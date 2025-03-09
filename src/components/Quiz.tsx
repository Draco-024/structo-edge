
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface QuizOption {
  id: string;
  text: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctOption: string;
}

interface QuizProps {
  title: string;
  description: string;
  questions: QuizQuestion[];
  onComplete?: (score: number, total: number) => void;
}

const Quiz = ({ title, description, questions, onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleOptionSelect = (value: string) => {
    setSelectedOptions({
      ...selectedOptions,
      [questions[currentQuestion].id]: value,
    });
  };

  const handleNext = () => {
    if (!selectedOptions[questions[currentQuestion].id]) {
      toast({
        title: "Please select an option",
        variant: "destructive",
      });
      return;
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      if (onComplete) {
        const score = calculateScore();
        onComplete(score, questions.length);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question) => {
      if (selectedOptions[question.id] === question.correctOption) {
        score += 1;
      }
    });
    return score;
  };

  const isOptionCorrect = (questionId: string, optionId: string) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return false;
    return question.correctOption === optionId;
  };

  const isOptionSelected = (questionId: string, optionId: string) => {
    return selectedOptions[questionId] === optionId;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOptions({});
    setShowResults(false);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {!showResults ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">
                {questions[currentQuestion].question}
              </h3>
              
              <RadioGroup 
                value={selectedOptions[questions[currentQuestion].id] || ""} 
                onValueChange={handleOptionSelect}
                className="space-y-3"
              >
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer">{option.text}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <span className="text-2xl font-bold text-primary">
                  {calculateScore()}/{questions.length}
                </span>
              </div>
              <h3 className="text-lg font-medium">
                Your Score: {Math.round((calculateScore() / questions.length) * 100)}%
              </h3>
              <p className="text-muted-foreground">
                {calculateScore() === questions.length ? 
                  "Perfect! You got all questions correct." : 
                  `You got ${calculateScore()} out of ${questions.length} questions correct.`}
              </p>
            </div>
            
            <div className="space-y-4">
              {questions.map((question, index) => (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center mr-2">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-medium mb-2">{question.question}</h4>
                      <div className="space-y-2">
                        {question.options.map((option) => {
                          const isCorrect = isOptionCorrect(question.id, option.id);
                          const isSelected = isOptionSelected(question.id, option.id);
                          const showCorrect = isCorrect;
                          const showIncorrect = isSelected && !isCorrect;
                          
                          return (
                            <div 
                              key={option.id}
                              className={`flex items-center p-2 rounded ${
                                showCorrect ? "bg-green-100" :
                                showIncorrect ? "bg-red-100" :
                                "bg-muted/50"
                              }`}
                            >
                              <div className="flex-1">{option.text}</div>
                              {showCorrect && <Check className="h-5 w-5 text-green-600" />}
                              {showIncorrect && <X className="h-5 w-5 text-red-600" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {!showResults ? (
          <>
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button onClick={handleNext}>
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </>
        ) : (
          <Button onClick={resetQuiz} className="w-full">
            Try Again
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Quiz;
