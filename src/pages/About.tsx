
import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Clock, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-8">
            About StructoEdge
          </h1>
          
          <div className="prose max-w-none mb-10">
            <p className="text-muted-foreground text-lg mb-6">
              At StructoEdge, our mission is to make high-quality education in structural engineering accessible to all. Founded by industry experts with decades of experience, we've created a comprehensive platform that bridges the gap between theoretical knowledge and practical application.
            </p>
            
            <p className="text-muted-foreground mb-6">
              We believe that learning should be continuous, engaging, and relevant to the current industry demands. That's why our courses are regularly updated to reflect the latest advancements, standards, and best practices in structural engineering.
            </p>
            
            <div className="py-10 border-y border-border mb-10">
              <h2 className="text-2xl font-medium mb-6 text-center">Trimurti Infrastructure – Engineering Your Dreams into Reality!</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-medium mb-4 flex items-center">
                    <span className="text-primary mr-2">📌</span> Services
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✔️</span>
                      <span>RCC Structure Design (STAAD.Pro, ETABS, AutoCAD, Revit)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✔️</span>
                      <span>Earthquake-Resistant Design & Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✔️</span>
                      <span>Project Consultation & Site Supervision</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✔️</span>
                      <span>Quantity Estimation (MT/Kg)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div className="mb-4">
                    <h3 className="text-xl font-medium mb-4 flex items-center">
                      <span className="text-primary mr-2">📞</span> Contact Us
                    </h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-primary" />
                        <a href="tel:+918788017458" className="hover:text-primary transition-colors">+91 8788017458</a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-primary" />
                        <a href="mailto:vishalmore9192@gmail.com" className="hover:text-primary transition-colors">vishalmore9192@gmail.com</a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-primary" />
                        <span>WhatsApp: 8788017458</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center text-primary">
                      <span className="text-lg">🔹</span>
                      <span className="mx-2">Innovative</span>
                      <span className="text-lg">|</span>
                      <span className="mx-2">Safe</span>
                      <span className="text-lg">|</span>
                      <span className="mx-2">Cost-Effective</span>
                      <span className="text-lg">|</span>
                      <span className="mx-2">Reliable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-medium mb-6">Our Approach to Learning</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-medium mb-3">Expert-Led Content</h3>
                <p className="text-muted-foreground">All our courses are designed and taught by Er. Vishal More, a seasoned professional with extensive industry experience who brings real-world projects into the classroom.</p>
              </div>
              
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-medium mb-3">Interactive Learning</h3>
                <p className="text-muted-foreground">We believe in learning by doing. Our courses include hands-on projects, quizzes, and assignments that reinforce concepts and build practical skills.</p>
              </div>
              
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-medium mb-3">Continuous Support</h3>
                <p className="text-muted-foreground">Learning doesn't stop when the video ends. Our community forums and dedicated support team ensure you get help whenever you need it.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-medium mb-6">Our Vision</h2>
            
            <p className="text-muted-foreground mb-10">
              We aim to create a global community of skilled structural engineers equipped to tackle the challenges of modern construction. By providing accessible, high-quality education, we're working towards safer, more innovative, and sustainable built environments worldwide.
            </p>
            
            <div className="bg-muted/30 p-6 rounded-lg border border-border mb-10">
              <h2 className="text-2xl font-medium mb-4">Join Our Community</h2>
              <p className="text-muted-foreground mb-4">
                Become part of our growing community of structural engineering students, professionals, and enthusiasts. Share knowledge, ask questions, and connect with like-minded individuals from around the world.
              </p>
              <Link 
                to="/community" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Join Now
              </Link>
            </div>
            
            <h2 className="text-2xl font-medium mb-6">Connect With Us</h2>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-3 border border-border rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 border border-border rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 border border-border rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 border border-border rounded-full hover:bg-primary hover:text-white hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
