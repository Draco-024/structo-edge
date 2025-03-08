
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  image: string;
  category: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating?: number;
  className?: string;
}

const CourseCard = ({
  id,
  title,
  description,
  instructor,
  image,
  category,
  duration,
  level,
  rating = 0,
  className,
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const levelColors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-blue-100 text-blue-700', 
    Advanced: 'bg-purple-100 text-purple-700',
  };

  return (
    <Link 
      to={`/courses/${id}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 ease-out',
        isHovered ? 'shadow-lg translate-y-[-4px]' : 'shadow-sm',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className={cn(
            'h-full w-full object-cover transition-transform duration-700 ease-out',
            isHovered ? 'scale-105' : 'scale-100'
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-primary">
            {category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="space-y-2.5">
          <div className="space-y-1">
            <h3 className="text-lg font-medium leading-tight text-primary group-hover:text-accent transition-colors duration-300 ease-out">
              {title}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className={cn('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium', levelColors[level])}>
              {level}
            </span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{duration}</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm font-medium text-foreground">By {instructor}</span>
          </div>
          {rating > 0 && (
            <div className="flex items-center">
              <svg
                className="h-4 w-4 text-amber-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-foreground">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
