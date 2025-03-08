
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FeaturedCourseProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  image: string;
  category: string;
  highlights: string[];
  className?: string;
}

const FeaturedCourse = ({
  id,
  title,
  description,
  instructor,
  image,
  category,
  highlights,
  className,
}: FeaturedCourseProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-lg bg-background transition-all duration-300 ease-out',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                {category}
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-primary">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {description}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                What you'll learn
              </h3>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="mr-2 h-5 w-5 flex-shrink-0 text-accent"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Instructor: <span className="font-medium text-foreground">{instructor}</span>
              </p>
              <Link
                to={`/courses/${id}`}
                className={cn(
                  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ease-out',
                  'bg-primary text-white hover:bg-primary/90'
                )}
              >
                Explore Course
                <svg 
                  className={cn(
                    "ml-2 h-4 w-4 transition-transform duration-300",
                    isHovered ? "translate-x-1" : ""
                  )}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <div 
              className={cn(
                "absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent transition-opacity duration-500",
                isHovered ? "opacity-60" : "opacity-40"
              )} 
            />
            <img
              src={image}
              alt={title}
              className={cn(
                "h-full w-full object-cover transition-transform duration-700 ease-out",
                isHovered ? "scale-105" : "scale-100"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourse;
