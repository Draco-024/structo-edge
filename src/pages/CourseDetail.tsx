import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart, Lock, BookOpen, PlayCircle, FileText } from "lucide-react";
import Quiz from '@/components/Quiz';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPurchased, setIsPurchased] = useState(false); // Simulate whether course is purchased
  const { toast } = useToast();
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState<number | null>(null);
  
  // Sample quiz data for the course
  const quizzes = [
    {
      id: 1,
      title: "Week 1 Quiz: Introduction to Structural Engineering",
      description: "Test your knowledge of basic structural concepts",
      questions: [
        {
          id: "q1",
          question: "What is the primary role of a structural engineer?",
          options: [
            { id: "a", text: "To design the exterior appearance of buildings" },
            { id: "b", text: "To ensure structures can safely resist loads" },
            { id: "c", text: "To manage construction projects" },
            { id: "d", text: "To select interior finishes for buildings" }
          ],
          correctOption: "b"
        },
        {
          id: "q2",
          question: "Which of the following is NOT a type of structural load?",
          options: [
            { id: "a", text: "Dead load" },
            { id: "b", text: "Wind load" },
            { id: "c", text: "Aesthetic load" },
            { id: "d", text: "Live load" }
          ],
          correctOption: "c"
        },
        {
          id: "q3",
          question: "Who is the instructor for this course?",
          options: [
            { id: "a", text: "Dr. Robert Chen" },
            { id: "b", text: "Dr. Emily Wong" },
            { id: "c", text: "Er. Vishal More" },
            { id: "d", text: "Dr. Sarah Johnson" }
          ],
          correctOption: "c"
        }
      ]
    },
    {
      id: 2,
      title: "Week 2 Quiz: Statics and Forces",
      description: "Test your understanding of force systems and equilibrium",
      questions: [
        {
          id: "q1",
          question: "What is a free body diagram used for?",
          options: [
            { id: "a", text: "To show the structure with all forces acting on it" },
            { id: "b", text: "To determine the cost of materials" },
            { id: "c", text: "To calculate the aesthetic appeal of a structure" },
            { id: "d", text: "To show the finished appearance of a structure" }
          ],
          correctOption: "a"
        },
        {
          id: "q2",
          question: "In structural engineering, what does equilibrium mean?",
          options: [
            { id: "a", text: "The structure has equal amounts of all materials" },
            { id: "b", text: "The structure is symmetrical" },
            { id: "c", text: "The sum of forces and moments equals zero" },
            { id: "d", text: "The structure has a balanced appearance" }
          ],
          correctOption: "c"
        }
      ]
    }
  ];
  
  // This would typically come from an API, but for demo purposes:
  const courseData = {
    id: courseId,
    title: 'Fundamentals of Structural Analysis',
    description: 'This comprehensive course covers the core principles of structural analysis essential for modern engineering projects. Learn to analyze and understand the behavior of structures under various loading conditions.',
    instructor: 'Er. Vishal More',
    image: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '₹11,999',
    rating: 4.8,
    studentsEnrolled: 2547,
    lastUpdated: 'November 2023',
    category: 'Engineering',
    level: 'Beginner',
    lectures: [
      {
        week: 1,
        title: 'Introduction to Structural Engineering',
        lessons: [
          { id: 1, title: 'Welcome and Course Overview', duration: '10:15', type: 'video' },
          { id: 2, title: 'History of Structural Engineering', duration: '18:45', type: 'video' },
          { id: 3, title: 'Fundamental Concepts', duration: '22:10', type: 'video' },
          { id: 4, title: 'Week 1 Quiz', duration: '15 mins', type: 'quiz', quizId: 1 }
        ]
      },
      {
        week: 2,
        title: 'Statics and Forces',
        lessons: [
          { id: 5, title: 'Force Systems', duration: '24:30', type: 'video' },
          { id: 6, title: 'Equilibrium', duration: '19:45', type: 'video' },
          { id: 7, title: 'Free Body Diagrams', duration: '26:15', type: 'video' },
          { id: 8, title: 'Week 2 Quiz', duration: '15 mins', type: 'quiz', quizId: 2 }
        ]
      },
      {
        week: 3,
        title: 'Analysis of Determinate Structures',
        lessons: [
          { id: 9, title: 'Trusses Analysis', duration: '28:10', type: 'video' },
          { id: 10, title: 'Beams and Frames', duration: '32:20', type: 'video' },
          { id: 11, title: 'Influence Lines', duration: '22:45', type: 'video' },
          { id: 12, title: 'Week 3 Quiz', duration: '20 mins', type: 'quiz', quizId: 3 }
        ]
      }
    ],
  };

  // Updated YouTube playlist videos from the provided links
  const videoURLs = [
    "https://www.youtube.com/embed/XJbVuq_2MCY?si=9DwJXoL3KZdqzuO9",
    "https://www.youtube.com/embed/5C0BZp_HZP8?si=8QhkE-2oo5qoaXK0",
    "https://www.youtube.com/embed/eld9F-KTZY0?si=iUxijKUl6x5iV0hl",
    "https://www.youtube.com/embed/-gAAcg6mUBI?si=oGUYFtb9yw-fzWDT",
    "https://www.youtube.com/embed/-Tp-jh1f7Wc?si=kCk7Z_Ii_-MzNkN6",
    "https://www.youtube.com/embed/k40vTnrX_bc?si=h9uQzZdNi9D6XQkJ",
    "https://www.youtube.com/embed/Vv_lJwWXlKA?si=9DwJXoL3KZdqzuO9",
    "https://www.youtube.com/embed/deUHMZZ2pIo?si=8QhkE-2oo5qoaXK0",
    "https://www.youtube.com/embed/x38Sqqj9ASw?si=iUxijKUl6x5iV0hl",
    "https://www.youtube.com/embed/evESmg6SSNM?si=oGUYFtb9yw-fzWDT",
    "https://www.youtube.com/embed/_xzYEZxvyIk?si=kCk7Z_Ii_-MzNkN6",
    "https://www.youtube.com/embed/JpMTDIRZERU?si=h9uQzZdNi9D6XQkJ",
    "https://www.youtube.com/embed/BpZpINWZ23I?si=9DwJXoL3KZdqzuO9",
    "https://www.youtube.com/embed/U6kWb83Q2ug?si=8QhkE-2oo5qoaXK0",
    "https://www.youtube.com/embed/aFlVIGWkDAM?si=iUxijKUl6x5iV0hl",
    "https://www.youtube.com/embed/r-zvK9sQ3YE?si=oGUYFtb9yw-fzWDT",
    "https://www.youtube.com/embed/0NQAsIyOch8?si=kCk7Z_Ii_-MzNkN6",
    "https://www.youtube.com/embed/M4w6l6puPzo?si=h9uQzZdNi9D6XQkJ",
    "https://www.youtube.com/embed/wF73q3K9JTg?si=9DwJXoL3KZdqzuO9",
    "https://www.youtube.com/embed/tApdZ75W3pE?si=8QhkE-2oo5qoaXK0"
  ];

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${courseData.title} has been added to your cart.`,
    });
    // In a real application, this would update the cart state
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${courseData.title} has been added to your wishlist.`,
    });
    // In a real application, this would update the wishlist state
  };

  const handleBuyNow = () => {
    // For demo purposes, we'll simulate successful purchase
    setTimeout(() => {
      setIsPurchased(true);
      toast({
        title: "Purchase successful!",
        description: "You now have full access to the course.",
      });
    }, 1000);
  };

  const handleStartQuiz = (quizId: number) => {
    if (!isPurchased) {
      toast({
        title: "Access restricted",
        description: "Please purchase the course to access quizzes.",
        variant: "destructive",
      });
      return;
    }
    
    const quiz = quizzes.find((q) => q.id === quizId);
    if (quiz) {
      setCurrentQuiz(quizId);
      setShowQuiz(true);
    } else {
      toast({
        title: "Quiz not available",
        description: "This quiz is not yet available.",
        variant: "destructive",
      });
    }
  };

  const handleQuizComplete = (score: number, total: number) => {
    toast({
      title: "Quiz completed!",
      description: `You scored ${score} out of ${total}. Certificate available in your profile.`,
    });
    setShowQuiz(false);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        {showQuiz && currentQuiz !== null ? (
          <div className="max-w-3xl mx-auto">
            <Button 
              variant="outline" 
              onClick={() => setShowQuiz(false)} 
              className="mb-6"
            >
              Back to Course
            </Button>
            
            {quizzes.find(q => q.id === currentQuiz) && (
              <Quiz
                title={quizzes.find(q => q.id === currentQuiz)!.title}
                description={quizzes.find(q => q.id === currentQuiz)!.description}
                questions={quizzes.find(q => q.id === currentQuiz)!.questions}
                onComplete={handleQuizComplete}
              />
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column: Course info and lectures */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-medium tracking-tight text-primary mb-4">
                {courseData.title}
              </h1>
              
              <div className="mb-6">
                {isPurchased ? (
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                    <iframe 
                      className="w-full h-[400px] rounded-lg border border-border"
                      src={videoURLs[currentVideo]}
                      title={`Lecture ${currentVideo + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative">
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                      <div className="w-full h-[400px] rounded-lg border border-border bg-muted/30 flex flex-col items-center justify-center">
                        <Lock className="h-16 w-16 text-muted-foreground mb-4" />
                        <h3 className="text-xl font-medium mb-2">Content Locked</h3>
                        <p className="text-muted-foreground mb-4 text-center max-w-md">
                          Purchase this course to access all lectures, videos, quizzes and resources
                        </p>
                        <Button onClick={handleBuyNow}>Unlock Course Content</Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {isPurchased && (
                  <div className="flex space-x-4 mb-6 overflow-x-auto py-2">
                    {videoURLs.map((_, index) => (
                      <div 
                        key={index}
                        onClick={() => setCurrentVideo(index)}
                        className={`flex-shrink-0 w-48 h-28 rounded-md border-2 flex items-center justify-center cursor-pointer ${
                          currentVideo === index ? 'border-primary' : 'border-border'
                        }`}
                      >
                        <div className="flex flex-col items-center text-center">
                          <span className="text-lg font-medium">Lecture {index + 1}</span>
                          <span className="text-xs text-muted-foreground">Week {Math.floor(index / 3) + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Tabs defaultValue="curriculum" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="curriculum" className="space-y-4">
                  {courseData.lectures.map((week) => (
                    <div key={week.week} className="border border-border rounded-lg overflow-hidden">
                      <div className="bg-muted/30 p-4 flex justify-between items-center">
                        <h3 className="font-medium">Week {week.week}: {week.title}</h3>
                        <span className="text-sm text-muted-foreground">{week.lessons.length} lessons</span>
                      </div>
                      <div className="divide-y divide-border">
                        {week.lessons.map((lesson) => (
                          <div key={lesson.id} className="p-4 flex justify-between items-center hover:bg-muted/20">
                            <div className="flex items-center">
                              {lesson.type === 'video' ? (
                                <PlayCircle className="h-5 w-5 mr-3 text-primary" />
                              ) : lesson.type === 'quiz' ? (
                                <FileText className="h-5 w-5 mr-3 text-amber-500" />
                              ) : (
                                <BookOpen className="h-5 w-5 mr-3 text-blue-500" />
                              )}
                              <span>{lesson.title}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-muted-foreground mr-4">{lesson.duration}</span>
                              {lesson.type === 'quiz' && (
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleStartQuiz(lesson.quizId as number)}
                                >
                                  Start Quiz
                                </Button>
                              )}
                              {!isPurchased && <Lock className="h-4 w-4 text-muted-foreground ml-2" />}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="description">
                  <div className="prose max-w-none">
                    <p className="text-muted-foreground mb-4">
                      {courseData.description}
                    </p>
                    <h3 className="text-lg font-medium mb-2">What you'll learn</h3>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Analyze structural systems under various loading conditions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Develop models for the analysis of determinate structures</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Apply equilibrium equations to solve engineering problems</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Create and interpret free body diagrams</span>
                      </li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center mr-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`h-5 w-5 ${i < Math.floor(courseData.rating) ? 'text-amber-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xl font-medium">{courseData.rating.toFixed(1)}/5.0</span>
                      <span className="ml-2 text-sm text-muted-foreground">({courseData.studentsEnrolled} students)</span>
                    </div>
                    
                    {/* Sample reviews */}
                    <div className="space-y-4">
                      {[
                        { name: "Raj Patel", rating: 5, comment: "Dr. Vishal is an excellent teacher. His explanations are clear and the practical examples really helped me understand complex concepts." },
                        { name: "Priya Singh", rating: 4, comment: "Very thorough content. The quizzes after each section help reinforce the learning. Would recommend!" },
                        { name: "Ankit Sharma", rating: 5, comment: "This course helped me pass my structural engineering exams with flying colors. The instructor is knowledgeable and engaging." }
                      ].map((review, index) => (
                        <div key={index} className="border border-border rounded-lg p-4">
                          <div className="flex items-center mb-2">
                            <div className="flex items-center mr-3">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`h-4 w-4 ${i < review.rating ? 'text-amber-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="font-medium">{review.name}</span>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Right column: Course details and enrollment */}
            <div className="lg:col-span-1">
              <div className="border border-border rounded-lg p-6 sticky top-24">
                <div className="mb-4">
                  <span className="text-3xl font-medium text-primary">{courseData.price}</span>
                </div>
                
                {!isPurchased ? (
                  <>
                    <Button className="w-full mb-4" onClick={handleBuyNow}>Enroll Now</Button>
                    <Link to="/cart">
                      <Button variant="outline" className="w-full mb-4" onClick={handleAddToCart}>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full mb-6" onClick={handleAddToWishlist}>
                      Add to Wishlist
                    </Button>
                  </>
                ) : (
                  <div className="border border-green-200 bg-green-50 rounded-lg p-4 mb-6">
                    <p className="text-green-700 font-medium flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      You own this course
                    </p>
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Instructor:</span>
                    <span className="font-medium">{courseData.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">10 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lectures:</span>
                    <span className="font-medium">42</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Level:</span>
                    <span className="font-medium">{courseData.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Language:</span>
                    <span className="font-medium">English</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span className="font-medium">{courseData.lastUpdated}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-medium mb-3">This course includes:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>42 hours of video content</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>12 practical assignments</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Downloadable resources</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Lifetime access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default CourseDetail;
