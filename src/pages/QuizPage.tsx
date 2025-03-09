
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Quiz from '@/components/Quiz';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Clock, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Sample quiz data
const quizzes = {
  'structural-basics': {
    title: 'Structural Analysis Fundamentals',
    description: 'Test your knowledge of basic structural analysis concepts',
    timeLimit: 10, // minutes
    questions: [
      {
        id: 'q1',
        question: 'What is the primary purpose of a structural analysis?',
        options: [
          { id: 'a', text: 'To determine the aesthetic appeal of a structure' },
          { id: 'b', text: 'To calculate the forces and deflections in a structure' },
          { id: 'c', text: 'To estimate the construction cost of a structure' },
          { id: 'd', text: 'To determine the construction timeline of a structure' }
        ],
        correctOption: 'b'
      },
      {
        id: 'q2',
        question: 'Which of the following is NOT a type of structural load?',
        options: [
          { id: 'a', text: 'Dead load' },
          { id: 'b', text: 'Live load' },
          { id: 'c', text: 'Wind load' },
          { id: 'd', text: 'Aesthetic load' }
        ],
        correctOption: 'd'
      },
      {
        id: 'q3',
        question: 'What is the difference between a statically determinate and indeterminate structure?',
        options: [
          { id: 'a', text: 'The number of reactions' },
          { id: 'b', text: 'The number of equilibrium equations versus the number of unknowns' },
          { id: 'c', text: 'The construction material used' },
          { id: 'd', text: 'The size of the structure' }
        ],
        correctOption: 'b'
      },
      {
        id: 'q4',
        question: 'What is a free body diagram used for in structural analysis?',
        options: [
          { id: 'a', text: 'To represent the structure with all forces acting on it' },
          { id: 'b', text: 'To calculate the cost of a structure' },
          { id: 'c', text: 'To determine the aesthetic appeal of a structure' },
          { id: 'd', text: 'To establish the construction timeline' }
        ],
        correctOption: 'a'
      },
      {
        id: 'q5',
        question: 'Which principle states that the displacement of a point on a structure is proportional to the load applied?',
        options: [
          { id: 'a', text: 'Newton\'s Third Law' },
          { id: 'b', text: 'Principle of Superposition' },
          { id: 'c', text: 'Hooke\'s Law' },
          { id: 'd', text: 'Euler\'s Principle' }
        ],
        correctOption: 'c'
      }
    ]
  },
  'concrete-design': {
    title: 'Advanced Concrete Design',
    description: 'Test your knowledge of concrete structural elements',
    timeLimit: 15,
    questions: [
      {
        id: 'q1',
        question: 'What is the primary component of concrete that provides its strength?',
        options: [
          { id: 'a', text: 'Water' },
          { id: 'b', text: 'Sand' },
          { id: 'c', text: 'Cement' },
          { id: 'd', text: 'Aggregate' }
        ],
        correctOption: 'c'
      },
      {
        id: 'q2',
        question: 'What is the purpose of reinforcement in concrete?',
        options: [
          { id: 'a', text: 'To reduce the weight of the structure' },
          { id: 'b', text: 'To provide tensile strength' },
          { id: 'c', text: 'To reduce the cost of construction' },
          { id: 'd', text: 'To improve the appearance of the structure' }
        ],
        correctOption: 'b'
      },
      {
        id: 'q3',
        question: 'What is the water-cement ratio in concrete mix design?',
        options: [
          { id: 'a', text: 'The ratio of water to total weight of concrete' },
          { id: 'b', text: 'The ratio of water to cement by weight' },
          { id: 'c', text: 'The ratio of water to sand by volume' },
          { id: 'd', text: 'The ratio of water to aggregate by weight' }
        ],
        correctOption: 'b'
      }
    ]
  }
};

const QuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  // Get the quiz data based on the ID
  const quizData = quizId && quizzes[quizId as keyof typeof quizzes];

  useEffect(() => {
    if (quizData && quizStarted && !quizCompleted) {
      // Set initial time
      setTimeLeft(quizData.timeLimit * 60);
      
      // Start countdown
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleQuizComplete(0, quizData.questions.length);
            toast({
              title: "Time's up!",
              description: "Your quiz has been submitted automatically.",
              variant: "destructive",
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [quizStarted, quizCompleted, quizData]);

  if (!quizData) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-medium tracking-tight text-primary mb-6">Quiz Not Found</h1>
            <p className="text-muted-foreground mb-8">
              Sorry, the quiz you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleQuizComplete = (correct: number, total: number) => {
    setQuizCompleted(true);
    setScore({ correct, total });
    
    // In a real app, this would save the quiz results to a database
    toast({
      title: "Quiz completed!",
      description: `You scored ${correct} out of ${total}.`,
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" onClick={() => navigate(-1)} className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <h1 className="text-3xl font-medium tracking-tight text-primary mb-2">
              {quizData.title}
            </h1>
            <p className="text-muted-foreground">
              {quizData.description}
            </p>
          </div>

          {!quizStarted ? (
            <Card className="p-6">
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-medium mb-2">Ready to begin the quiz?</h2>
                  <p className="text-muted-foreground mb-4">
                    This quiz contains {quizData.questions.length} questions and has a time limit of {quizData.timeLimit} minutes.
                  </p>
                  <ul className="text-left text-sm text-muted-foreground space-y-2 mb-6">
                    <li>• You cannot pause the quiz once started</li>
                    <li>• Each question has only one correct answer</li>
                    <li>• You can review your answers before submission</li>
                    <li>• Results will be shown immediately after completion</li>
                  </ul>
                </div>
                <Button onClick={handleStartQuiz} className="w-full">Start Quiz</Button>
              </div>
            </Card>
          ) : (
            <>
              {!quizCompleted && (
                <div className="sticky top-20 bg-background z-10 p-2 mb-4 flex justify-between items-center rounded-lg border">
                  <span className="font-medium">Time Remaining:</span>
                  <span className={`font-mono text-lg ${timeLeft < 60 ? 'text-red-500 animate-pulse' : ''}`}>
                    {formatTime(timeLeft)}
                  </span>
                </div>
              )}
              
              <Quiz
                title={quizData.title}
                description={quizData.description}
                questions={quizData.questions}
                onComplete={handleQuizComplete}
              />
              
              {quizCompleted && (
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-2xl font-medium mb-2">Quiz Completed!</h2>
                  <p className="text-muted-foreground mb-6">
                    You scored {score.correct} out of {score.total} ({Math.round((score.correct / score.total) * 100)}%)
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button variant="outline" onClick={() => navigate('/courses')}>
                      Back to Courses
                    </Button>
                    <Button onClick={() => {
                      setQuizStarted(false);
                      setQuizCompleted(false);
                    }}>
                      Try Again
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default QuizPage;
