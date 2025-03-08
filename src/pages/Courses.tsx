
import MainLayout from '@/layouts/MainLayout';
import CourseCard from '@/components/CourseCard';

const Courses = () => {
  const courses = [
    {
      id: '001',
      title: 'Fundamentals of Structural Analysis',
      description: 'Learn the core principles of structural analysis essential for modern engineering projects.',
      instructor: 'Dr. Robert Chen',
      image: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Engineering',
      duration: '10 weeks',
      level: 'Beginner' as 'Beginner' | 'Intermediate' | 'Advanced',
      rating: 4.8
    },
    {
      id: '002',
      title: 'Advanced Concrete Design',
      description: 'Master advanced techniques in concrete design for complex structural engineering projects.',
      instructor: 'Dr. Emily Wong',
      image: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Engineering',
      duration: '8 weeks',
      level: 'Advanced' as 'Beginner' | 'Intermediate' | 'Advanced',
      rating: 4.9
    },
    {
      id: '003',
      title: 'Bridge Engineering Principles',
      description: 'Explore the fundamentals of bridge design, analysis, and construction methods.',
      instructor: 'Prof. Michael Barnes',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Engineering',
      duration: '12 weeks',
      level: 'Intermediate' as 'Beginner' | 'Intermediate' | 'Advanced',
      rating: 4.7
    },
    {
      id: '004',
      title: 'Seismic Design of Structures',
      description: 'Learn essential techniques for designing structures resistant to earthquake forces.',
      instructor: 'Dr. Jessica Taylor',
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Engineering',
      duration: '8 weeks',
      level: 'Intermediate' as 'Beginner' | 'Intermediate' | 'Advanced',
      rating: 4.8
    },
    {
      id: '005',
      title: 'Structural Dynamics',
      description: 'Comprehensive study of dynamic loads and their effects on engineering structures.',
      instructor: 'Dr. Robert Lee',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Engineering',
      duration: '10 weeks',
      level: 'Advanced' as 'Beginner' | 'Intermediate' | 'Advanced',
      rating: 4.9
    },
    {
      id: '006',
      title: 'Building Information Modeling',
      description: 'Master BIM techniques that revolutionize structural engineering workflows and collaboration.',
      instructor: 'Prof. Sophia Kim',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Technology',
      duration: '6 weeks',
      level: 'Intermediate' as 'Beginner' | 'Intermediate' | 'Advanced',
      rating: 4.7
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4">
            Structural Engineering Courses
          </h1>
          <p className="text-muted-foreground">
            Advance your career with our professional structural engineering courses designed by industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course) => (
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
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Courses;
