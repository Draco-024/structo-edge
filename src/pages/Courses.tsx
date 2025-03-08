
import MainLayout from '@/layouts/MainLayout';
import CourseCard from '@/components/CourseCard';

const Courses = () => {
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
    },
    {
      id: '004',
      title: 'Digital Marketing Essentials',
      description: 'Master digital marketing strategies that drive growth and engagement in today\'s competitive landscape.',
      instructor: 'Jessica Taylor',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Marketing',
      duration: '8 weeks',
      level: 'Beginner' as 'Beginner' | 'Intermediate' | 'Advanced',
      rating: 4.6
    },
    {
      id: '005',
      title: 'Data Visualization with D3.js',
      description: 'Learn to create compelling data visualizations using the powerful D3.js library.',
      instructor: 'Robert Lee',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Development',
      duration: '6 weeks',
      level: 'Intermediate' as 'Beginner' | 'Intermediate' | 'Advanced',
      rating: 4.9
    },
    {
      id: '006',
      title: 'UX Research Methods',
      description: 'Master essential UX research techniques to create user-centered designs that solve real problems.',
      instructor: 'Sophia Kim',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Design',
      duration: '8 weeks',
      level: 'Intermediate' as 'Beginner' | 'Intermediate' | 'Advanced',
      rating: 4.7
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4">
            Explore Our Courses
          </h1>
          <p className="text-muted-foreground">
            Discover courses designed with intention, elegance, and functionality to enhance your learning experience.
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
