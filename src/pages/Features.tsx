
import MainLayout from '@/layouts/MainLayout';
import { BookText, Building, GraduationCap, Users, Video, BarChart3, Award, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      title: 'Comprehensive Curriculum',
      description: 'Access our extensive library of courses covering everything from fundamental principles to advanced analysis techniques.',
      icon: BookText
    },
    {
      title: 'Expert Instructors',
      description: 'Learn from practicing structural engineers with decades of real-world experience in design and construction.',
      icon: GraduationCap
    },
    {
      title: 'High-Quality Video Content',
      description: 'Enjoy professionally produced video lectures with clear explanations and practical demonstrations.',
      icon: Video
    },
    {
      title: 'Real-World Projects',
      description: 'Apply your knowledge to actual structural engineering challenges through guided projects and case studies.',
      icon: Building
    },
    {
      title: 'Interactive Community',
      description: 'Connect with fellow engineers, share insights, and participate in discussions on current topics.',
      icon: Users
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed analytics on course completion and assessment performance.',
      icon: BarChart3
    },
    {
      title: 'Professional Certification',
      description: 'Earn industry-recognized certificates that validate your skills and expertise.',
      icon: Award
    },
    {
      title: 'Continuous Updates',
      description: 'Stay current with the latest design codes, analysis methods, and industry practices.',
      icon: Lightbulb
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4">
            Platform Features
          </h1>
          <p className="text-muted-foreground">
            Discover why StructoEdge is the leading platform for structural engineering education.
          </p>
        </div>

        {/* Hero Feature */}
        <div className="relative rounded-lg overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Structural engineering project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative max-w-3xl mx-auto px-6 py-24 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Advanced Learning Experience</h2>
            <p className="mb-8 text-white/80">
              Our platform combines state-of-the-art technology with expert-led instruction to deliver an unmatched learning experience for structural engineers at every career stage.
            </p>
            <Link to="/courses">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-muted/30 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl font-medium mb-4">Ready to advance your structural engineering knowledge?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of engineers who have enhanced their skills and careers through our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto">Get Started Today</Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">View Pricing</Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Features;
