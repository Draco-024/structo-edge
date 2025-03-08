
import { useParams } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const CourseDetail = () => {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState(0);
  
  // This would typically come from an API, but for demo purposes:
  const courseData = {
    id: id,
    title: 'Fundamentals of Structural Analysis',
    description: 'This comprehensive course covers the core principles of structural analysis essential for modern engineering projects. Learn to analyze and understand the behavior of structures under various loading conditions.',
    instructor: 'Dr. Robert Chen',
    image: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: '$499',
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
          { id: 4, title: 'Week 1 Quiz', duration: '15 mins', type: 'quiz' }
        ]
      },
      {
        week: 2,
        title: 'Statics and Forces',
        lessons: [
          { id: 5, title: 'Force Systems', duration: '24:30', type: 'video' },
          { id: 6, title: 'Equilibrium', duration: '19:45', type: 'video' },
          { id: 7, title: 'Free Body Diagrams', duration: '26:15', type: 'video' },
          { id: 8, title: 'Week 2 Assignment', duration: '1 hour', type: 'assignment' }
        ]
      },
      {
        week: 3,
        title: 'Analysis of Determinate Structures',
        lessons: [
          { id: 9, title: 'Trusses Analysis', duration: '28:10', type: 'video' },
          { id: 10, title: 'Beams and Frames', duration: '32:20', type: 'video' },
          { id: 11, title: 'Influence Lines', duration: '22:45', type: 'video' },
          { id: 12, title: 'Week 3 Quiz', duration: '20 mins', type: 'quiz' }
        ]
      }
    ],
    videos: [
      'https://www.youtube.com/embed/dQw4w9WgXcQ',
      'https://www.youtube.com/embed/dQw4w9WgXcQ',
      'https://www.youtube.com/embed/dQw4w9WgXcQ'
    ]
  };

  const videoURLs = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdefghijklmno",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=pqrstuvwxyz1234",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?si=5678abcdefghijk"
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: Course info and lectures */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-medium tracking-tight text-primary mb-4">
              {courseData.title}
            </h1>
            
            <div className="mb-6">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                <iframe 
                  className="w-full h-[400px] rounded-lg border border-border"
                  src={videoURLs[currentVideo]}
                  title={`Lecture ${currentVideo + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
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
                      <span className="text-xs text-muted-foreground">Week {index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
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
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                            ) : lesson.type === 'quiz' ? (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                              </svg>
                            )}
                            <span>{lesson.title}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{lesson.duration}</span>
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
                      { name: "John D.", rating: 5, comment: "Excellent course! The instructor explains complex concepts in an easy-to-understand way." },
                      { name: "Sarah M.", rating: 4, comment: "Very thorough content. I especially enjoyed the practical examples." },
                      { name: "Robert K.", rating: 5, comment: "This course helped me land a job in structural engineering. Highly recommend!" }
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
              
              <Button className="w-full mb-4">Enroll Now</Button>
              <Button variant="outline" className="w-full mb-6">Add to Wishlist</Button>
              
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
      </div>
    </MainLayout>
  );
};

export default CourseDetail;
