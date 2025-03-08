
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Briefcase, Users, Heart, BookOpen, Globe, BarChart3 } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Structural Engineer",
      department: "Content Development",
      location: "San Francisco, CA (Remote Option)",
      type: "Full-time",
      posted: "2 weeks ago",
      description: "Join our team of experts to develop cutting-edge structural engineering courses and content. You'll help create comprehensive learning materials that bridge theory and practice."
    },
    {
      title: "Curriculum Designer",
      department: "Education",
      location: "Boston, MA (Remote Option)",
      type: "Full-time",
      posted: "3 weeks ago",
      description: "Design and structure learning paths for structural engineering professionals. You'll work with subject matter experts to create effective educational experiences."
    },
    {
      title: "Technical Content Writer",
      department: "Content Development",
      location: "Remote",
      type: "Contract",
      posted: "1 week ago",
      description: "Create clear, concise, and accurate technical documentation and course materials for structural engineering concepts and applications."
    },
    {
      title: "Video Production Specialist",
      department: "Media",
      location: "Los Angeles, CA",
      type: "Full-time",
      posted: "4 weeks ago",
      description: "Help produce high-quality educational videos that clearly demonstrate structural engineering principles and practices."
    },
    {
      title: "Community Manager",
      department: "Operations",
      location: "Remote",
      type: "Part-time",
      posted: "2 days ago",
      description: "Foster and grow our community of structural engineering learners. Moderate discussions, organize events, and create engagement opportunities."
    }
  ];

  const valueProps = [
    {
      title: "Learning & Growth",
      description: "Continuous professional development with education stipends and mentorship opportunities.",
      icon: BookOpen
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours, generous PTO, and remote work options for most positions.",
      icon: Heart
    },
    {
      title: "Collaborative Culture",
      description: "Work alongside passionate professionals in a supportive and inclusive environment.",
      icon: Users
    },
    {
      title: "Global Impact",
      description: "Help engineers worldwide develop skills that create safer, more sustainable built environments.",
      icon: Globe
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
            Help us shape the future of structural engineering education and make an impact on the built environment.
          </p>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative max-w-3xl mx-auto px-6 py-24 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Make an Impact</h2>
            <p className="mb-8 text-white/80">
              At StructoEdge, we're on a mission to transform structural engineering education. Join us in creating world-class learning experiences that help engineers build safer, more sustainable structures.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              See Open Positions
            </Button>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-center mb-8">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => (
              <div key={index} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <prop.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-2">{prop.title}</h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-2xl font-medium text-center mb-8">Open Positions</h2>
          
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="flex justify-center space-x-2 mb-6">
              <TabsTrigger value="all">All Departments</TabsTrigger>
              <TabsTrigger value="content">Content Development</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="operations">Operations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {openPositions.map((position, index) => (
                <PositionCard key={index} position={position} />
              ))}
            </TabsContent>
            
            {["content", "education", "operations"].map((dept) => (
              <TabsContent key={dept} value={dept} className="space-y-4">
                {openPositions
                  .filter(p => 
                    (dept === "content" && p.department === "Content Development") ||
                    (dept === "education" && p.department === "Education") ||
                    (dept === "operations" && p.department === "Operations") ||
                    (dept === "media" && p.department === "Media")
                  )
                  .map((position, index) => (
                    <PositionCard key={index} position={position} />
                  ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* CTA Section */}
        <div className="bg-muted/30 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl font-medium mb-4">Don't See a Position That Fits?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute.
          </p>
          <Button size="lg">Submit Your Resume</Button>
        </div>
      </div>
    </MainLayout>
  );
};

interface PositionCardProps {
  position: {
    title: string;
    department: string;
    location: string;
    type: string;
    posted: string;
    description: string;
  };
}

const PositionCard = ({ position }: PositionCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{position.title}</CardTitle>
            <CardDescription className="mt-1">{position.department}</CardDescription>
          </div>
          <Button>Apply Now</Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{position.description}</p>
        <div className="flex flex-wrap gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center mr-6">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{position.location}</span>
          </div>
          <div className="flex items-center mr-6">
            <Briefcase className="h-4 w-4 mr-1" />
            <span>{position.type}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Posted {position.posted}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Careers;
