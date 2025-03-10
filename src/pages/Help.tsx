
import MainLayout from '@/layouts/MainLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, HelpCircle, Mail, Book, PlayCircle, FileText } from "lucide-react";

const Help = () => {
  const faqs = [
    {
      question: "How do I access course materials after purchase?",
      answer: "After purchasing a course, you can access all materials immediately through your dashboard. Simply log in, navigate to 'My Courses,' and select the course you wish to study. All videos, documents, and assignments will be available there."
    },
    {
      question: "Do courses have any prerequisites?",
      answer: "Each course listing includes information about prerequisites. Some advanced courses require prior knowledge of fundamental concepts, while beginner courses assume no previous experience. Check the course description for specific requirements."
    },
    {
      question: "Can I download videos for offline viewing?",
      answer: "Yes, all course videos can be downloaded for offline viewing through our mobile app. This feature is available for all paid courses and allows you to continue learning even without an internet connection."
    },
    {
      question: "How long do I have access to a course?",
      answer: "Standard course purchases include lifetime access to all materials. For subscription plans, you'll have access as long as your subscription remains active. Once your subscription ends, your access to course content will be suspended until renewal."
    },
    {
      question: "Are certificates provided upon completion?",
      answer: "Yes, all courses offer a certificate of completion once you've finished all required modules and assignments. These certificates can be downloaded directly from your account and shared on platforms like LinkedIn."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for certain regions. For enterprise plans, we can also accommodate purchase orders and invoice-based payments."
    }
  ];

  const resourceCategories = [
    {
      name: "Getting Started",
      icon: Book,
      resources: ["Platform Overview", "Account Setup", "Navigating Courses", "Progress Tracking"]
    },
    {
      name: "Course Experience",
      icon: PlayCircle,
      resources: ["Video Playback", "Downloadable Resources", "Assignments & Quizzes", "Discussion Forums"]
    },
    {
      name: "Account & Billing",
      icon: FileText,
      resources: ["Subscription Management", "Payment Methods", "Invoices & Receipts", "Refund Policy"]
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4">
            Help Center
          </h1>
          <p className="text-muted-foreground">
            Find answers to your questions and learn how to get the most out of our platform.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Search for help articles..." 
              className="pl-10 py-6 text-base"
            />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2">
              Search
            </Button>
          </div>
        </div>

        {/* Help Tabs */}
        <Tabs defaultValue="faq" className="max-w-4xl mx-auto mb-16">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="faq" className="flex items-center justify-center space-x-2 py-3">
              <HelpCircle className="h-4 w-4" />
              <span>FAQs</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center justify-center space-x-2 py-3">
              <Book className="h-4 w-4" />
              <span>Resources</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resourceCategories.map((category, index) => (
                <div key={index} className="border border-border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <category.icon className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-lg font-medium">{category.name}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.resources.map((resource, i) => (
                      <li key={i}>
                        <a href="#" className="text-primary hover:underline">{resource}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="contact">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="bg-muted/30 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-lg font-medium">Email Support</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  For general inquiries and account issues, our support team is ready to help.
                </p>
                <p className="font-medium">vishalmore9192@gmail.com</p>
                <p className="text-sm text-muted-foreground">Response time: Within 24 hours</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Help Topics */}
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-8">Popular Help Topics</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Course Access", "Payments", "Certificates", "Technical Issues", "Mobile App", "Enterprise Solutions"].map((topic, index) => (
              <a 
                key={index} 
                href="#" 
                className="px-4 py-2 bg-muted/50 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {topic}
              </a>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Help;
