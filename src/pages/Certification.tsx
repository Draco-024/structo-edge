
import { useState, useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Award, Download, Edit2, FileDown, Lock, ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate, Link } from 'react-router-dom';

const Certification = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const [certificateGenerated, setCertificateGenerated] = useState(false);
  const [purchasedCourses, setPurchasedCourses] = useState<string[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Simulate fetching purchased courses
  useEffect(() => {
    // In a real app, this would be an API call to get the user's purchased courses
    // For now, let's assume the user has purchased one course
    setPurchasedCourses(['Fundamentals of Structural Analysis']);
  }, []);

  const handleSave = () => {
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsEditing(false);
    setCertificateGenerated(true);
    toast({
      title: "Certificate generated!",
      description: "Your certificate has been generated successfully.",
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDownload = () => {
    toast({
      title: "Certificate downloaded",
      description: "Your certificate has been downloaded successfully.",
    });
    // Simulate download PDF - in a real app, this would be a PDF download
    setTimeout(() => {
      navigate('/certification/download-pdf', { state: { name, email, course: 'Fundamentals of Structural Analysis' } });
    }, 1000);
  };

  const allCourses = [
    {
      id: '001',
      title: 'Fundamentals of Structural Analysis',
      completedDate: '15 March 2023',
      isPurchased: purchasedCourses.includes('Fundamentals of Structural Analysis')
    },
    {
      id: '002',
      title: 'Advanced Concrete Design',
      completedDate: '10 June 2023',
      isPurchased: purchasedCourses.includes('Advanced Concrete Design')
    },
    {
      id: '003',
      title: 'Seismic Design and Analysis',
      completedDate: 'Not completed',
      isPurchased: false
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-medium tracking-tight text-primary mb-2 flex items-center">
            <Award className="mr-2 h-6 w-6 text-accent" />
            Certification Center
          </h1>
          <p className="text-muted-foreground mb-8">
            Generate your official StructoEdge certificate for completed courses.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Certificate Information</CardTitle>
              <CardDescription>
                Enter your details to generate your certificate. Make sure to use your legal name.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Enter your full name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Full Name:</span>
                    <span className="font-medium">{name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Email Address:</span>
                    <span className="font-medium">{email}</span>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {isEditing ? (
                <Button onClick={handleSave} className="w-full">Save Information</Button>
              ) : (
                <>
                  <Button variant="outline" onClick={handleEdit}>
                    <Edit2 className="mr-2 h-4 w-4" />
                    Edit Information
                  </Button>
                  <Button onClick={handleDownload} disabled={!certificateGenerated}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Certificate
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>

          {certificateGenerated && purchasedCourses.includes('Fundamentals of Structural Analysis') && (
            <div className="space-y-8">
              <div className="relative">
                <div className="border-8 border-double border-primary/20 p-8 bg-white rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <Award className="h-16 w-16 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-wide text-primary mb-2">CERTIFICATE OF COMPLETION</h2>
                    <p className="text-muted-foreground mb-8">This certifies that</p>
                    <p className="text-3xl font-bold text-primary mb-6">{name}</p>
                    <p className="text-muted-foreground mb-8">has successfully completed the course</p>
                    <p className="text-2xl font-semibold text-primary mb-10">Fundamentals of Structural Analysis</p>
                    <div className="flex justify-between items-center mt-12">
                      <div className="text-center">
                        <div className="w-40 border-t border-gray-400 mx-auto"></div>
                        <p className="mt-2 text-muted-foreground">Er. Vishal More</p>
                        <p className="text-xs text-muted-foreground">Lead Instructor</p>
                      </div>
                      <div className="text-center">
                        <div className="w-40 border-t border-gray-400 mx-auto"></div>
                        <p className="mt-2 text-muted-foreground">Date</p>
                        <p className="text-xs text-muted-foreground">{new Date().toLocaleDateString('en-IN')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-20">
                  <Award className="h-40 w-40 text-accent" />
                </div>
              </div>

              <div className="text-center">
                <Button onClick={handleDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Certificate
                </Button>
              </div>
            </div>
          )}

          <Separator className="my-8" />

          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-primary mb-4">Your Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allCourses.map((course) => (
                <Card key={course.id} className="group transition-all duration-200 hover:shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      {course.title}
                      {!course.isPurchased && (
                        <Lock className="ml-2 h-4 w-4 text-muted-foreground" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {course.completedDate !== 'Not completed' 
                        ? `Completed on: ${course.completedDate}` 
                        : 'Status: Not completed'}
                    </p>
                  </CardContent>
                  <CardFooter>
                    {course.isPurchased ? (
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                        onClick={() => {
                          setCertificateGenerated(true);
                          setIsEditing(false);
                          setName(name || "Your Name");
                          setEmail(email || "your.email@example.com");
                        }}
                      >
                        <Award className="mr-2 h-4 w-4" />
                        View Certificate
                      </Button>
                    ) : (
                      <Link to="/pricing" className="w-full">
                        <Button variant="outline" className="w-full">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Purchase Course
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
            {purchasedCourses.length === 0 && (
              <Alert className="mt-4">
                <AlertTitle className="flex items-center">
                  <Lock className="mr-2 h-4 w-4" />
                  Certificates Locked
                </AlertTitle>
                <AlertDescription>
                  Certificates are only available for purchased courses. Visit our <Link to="/pricing" className="text-primary hover:underline">pricing page</Link> to purchase courses and unlock certificates.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Certification;
