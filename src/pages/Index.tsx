import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import CourseCard from '@/components/CourseCard';
import FeaturedCourse from '@/components/FeaturedCourse';
import { cn } from '@/lib/utils';

const Index = () => {
  const featuredCourse = {
    id: 'f001',
    title: 'Mastering Design Principles',
    description: 'Learn fundamental design principles that shape beautiful products from industry experts.',
    instructor: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Design',
    highlights: [
      'Understand balance, contrast, and hierarchy in design',
      'Apply minimalist principles to real-world projects',
      'Master typography and color theory fundamentals',
      'Design intuitive interfaces with thoughtful interactions'
    ]
  };

  const courses = [
    {
      id: '001',
      title: 'iOS App Development',
      description: 'Build beautiful iOS applications using Swift and SwiftUI following Apple design guidelines.',
      instructor: 'David Chen',
      image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Development',
      duration: '10 weeks',
      level: 'Intermediate' as 'Beginner' | 'Intermediate' | 'Advanced',
      rating: 4.8
    },
    {
      id: '002',
      title: 'UI Animation Fundamentals',
      description: 'Learn how to create meaningful animations that enhance user experience and interface design.',
      instructor: 'Emily Wong',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Design',
      duration: '6 weeks',
      level: 'Beginner' as 'Beginner' | 'Intermediate' | 'Advanced',
      rating: 4.7
    },
    {
      id: '003',
      title: 'Product Strategy',
      description: 'Master the art of product strategy with frameworks used by leading product teams.',
      instructor: 'Michael Barnes',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Business',
      duration: '8 weeks',
      level: 'Advanced' as 'Beginner' | 'Intermediate' | 'Advanced',
      rating: 4.9
    }
  ];

  const categoriesWithIcons = [
    {
      name: 'Design',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      name: 'Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      name: 'Business',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      name: 'Marketing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      quote: "The attention to detail in this course is extraordinary. I've never experienced learning that felt so intuitive and thoughtfully designed.",
      author: "Alex Chen",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Every interaction with this platform feels carefully considered. It's not just about learning—it's about experiencing true excellence in education.",
      author: "Mia Johnson",
      role: "UX Researcher",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(1 - scrollY / 600, 0.2);
        const scale = Math.max(1 - scrollY / 2000, 0.95);
        const translateY = scrollY * 0.2;
        
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-muted/50 to-background z-0" />
        
        <div 
          ref={heroRef}
          className="container mx-auto px-4 md:px-6 pt-24 pb-12 relative z-10 transition-all duration-200"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-6 animate-fade-in">
              Reimagining Education
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-primary animate-fade-in">
              Learning designed with <span className="text-accent">intention</span>
            </h1>
            
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Discover courses that combine elegance, simplicity, and functionality to create 
              truly meaningful learning experiences.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
              <Link
                to="/courses"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Explore Courses
              </Link>
              <Link
                to="/about"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium text-primary transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="h-6 w-6 text-primary opacity-70" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-primary mb-6">
              Explore Topics
            </h2>
            <p className="text-muted-foreground mb-8">
              Discover courses across multiple disciplines, all designed with our philosophy of 
              elegant simplicity and functional beauty.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
            {categoriesWithIcons.map((category, index) => (
              <Link
                key={category.name}
                to={`/category/${category.name.toLowerCase()}`}
                className={cn(
                  "flex flex-col items-center justify-center p-6 rounded-lg bg-background border border-border",
                  "transition-all duration-300 hover:shadow-md hover:border-accent/30 hover:-translate-y-1",
                  "group animate-fade-in"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                  {category.icon}
                </div>
                <span className="font-medium text-primary">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Course Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-primary">
              Featured Course
            </h2>
            <div className="mt-1 h-1 w-12 bg-accent mx-auto rounded-full"></div>
          </div>

          <FeaturedCourse
            id={featuredCourse.id}
            title={featuredCourse.title}
            description={featuredCourse.description}
            instructor={featuredCourse.instructor}
            image={featuredCourse.image}
            category={featuredCourse.category}
            highlights={featuredCourse.highlights}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-primary">
                Popular Courses
              </h2>
              <p className="mt-2 text-muted-foreground">
                Hand-picked courses to get you started on your learning journey.
              </p>
            </div>
            <Link
              to="/courses"
              className="mt-4 md:mt-0 text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center group"
            >
              View all courses
              <svg 
                className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                instructor={course.instructor}
                image={course.image}
                category={course.category}
                duration={course.duration}
                level={course.level}
                rating={course.rating}
                className="transform transition-all hover:translate-y-[-8px]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-primary">
              What Our Students Say
            </h2>
            <div className="mt-1 h-1 w-12 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-muted/30 border border-border rounded-lg p-6 md:p-8 relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <svg 
                  className="absolute top-6 left-6 h-8 w-8 text-accent/20" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <div className="relative z-10">
                  <p className="text-foreground mb-6 mt-4 ml-6">{testimonial.quote}</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
              Ready to transform your learning experience?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join our community of learners and experience education designed with purpose, 
              elegance, and attention to detail.
            </p>
            <Link
              to="/register"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
