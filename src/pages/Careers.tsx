
import MainLayout from '@/layouts/MainLayout';
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Structural Engineer",
      department: "Course Development",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Curriculum Designer",
      department: "Education",
      location: "New York, NY",
      type: "Full-time"
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Content Marketing Manager",
      department: "Marketing",
      location: "San Francisco, CA",
      type: "Full-time"
    },
    {
      title: "Customer Success Specialist",
      department: "Support",
      location: "Remote",
      type: "Full-time"
    }
  ];

  const benefits = [
    {
      title: "Flexible Work Environment",
      description: "Work remotely or from one of our office locations with flexible hours.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Professional Development",
      description: "Access to all our courses and budget for conferences and further education.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      title: "Comprehensive Health Benefits",
      description: "Medical, dental, and vision coverage for you and your dependents.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Competitive Compensation",
      description: "Salary packages that recognize your expertise and contributions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4">
            Join Our Team
          </h1>
          <p className="text-muted-foreground">
            Help us revolutionize structural engineering education and empower the next generation of engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-2xl font-medium mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              At StructoEdge, we're building the future of technical education. Our platform combines cutting-edge technology with expert instruction to create learning experiences that are accessible, engaging, and effective.
            </p>
            <p className="text-muted-foreground mb-6">
              We're passionate about empowering structural engineers with the knowledge and skills they need to design safer, more innovative, and more sustainable structures.
            </p>
            <p className="text-muted-foreground">
              If you're excited about making a difference in the field of engineering education, we'd love to hear from you.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Team collaboration" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>

        <h2 className="text-2xl font-medium mb-8 text-center">Benefits & Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-muted/30">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-medium mb-8 text-center">Open Positions</h2>
        <div className="max-w-4xl mx-auto">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 bg-muted/30 p-4 text-sm font-medium text-muted-foreground">
              <div className="col-span-2">Position</div>
              <div>Department</div>
              <div>Location</div>
            </div>
            <div className="divide-y divide-border">
              {openPositions.map((position, index) => (
                <div key={index} className="grid grid-cols-4 p-4 hover:bg-muted/10 transition-colors">
                  <div className="col-span-2">
                    <h3 className="font-medium text-primary">{position.title}</h3>
                    <span className="text-xs bg-muted rounded-full px-2 py-0.5 mt-1 inline-block">{position.type}</span>
                  </div>
                  <div className="text-muted-foreground">{position.department}</div>
                  <div className="text-muted-foreground">{position.location}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Button>View All Positions</Button>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-muted/30 rounded-lg border border-border p-8 text-center">
          <h2 className="text-2xl font-medium mb-4">Don't see a position that fits?</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute.
          </p>
          <Button variant="outline">Send General Application</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Careers;
