
import MainLayout from '@/layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone } from "lucide-react";
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const { toast } = useToast();
  
  const pricingPlans = [
    {
      name: "Basic",
      description: "Essential structural engineering courses to get you started",
      price: "₹11,999",
      duration: "per course",
      features: [
        "Access to individual course materials",
        "14-day money-back guarantee",
        "Course completion certificate",
        "6 months of access",
        "Email support"
      ],
      recommended: false,
      btnText: "Purchase Course",
      link: "/payment"
    },
    {
      name: "Professional",
      description: "Full access to our comprehensive curriculum",
      price: "₹3,999",
      duration: "per month",
      features: [
        "Access to all courses",
        "Hands-on projects & assignments",
        "Personalized feedback",
        "Course completion certificates",
        "Priority email support",
        "Access to community forum"
      ],
      recommended: true,
      btnText: "Start Free Trial",
      link: "/payment"
    },
    {
      name: "Enterprise",
      description: "Custom solutions for teams and organizations",
      price: "Custom",
      duration: "billed annually",
      features: [
        "Everything in Professional plan",
        "Customized learning paths",
        "Dedicated account manager",
        "Team analytics dashboard",
        "SSO and LMS integration",
        "Custom course development"
      ],
      recommended: false,
      btnText: "Contact Sales",
      link: "/contact"
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include unlimited access to our curriculum and course materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative flex flex-col transition-all duration-200 hover:shadow-lg ${plan.recommended ? 'border-primary shadow-lg' : 'border-border hover:border-primary/50'}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground"> {plan.duration}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {plan.name === "Enterprise" ? (
                  <Link to={plan.link} className="w-full">
                    <Button 
                      className="w-full flex items-center hover:bg-primary/90 transition-colors"
                      variant="outline"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      {plan.btnText}
                    </Button>
                  </Link>
                ) : (
                  <Link to={plan.link} className="w-full">
                    <Button 
                      className={`w-full transition-colors ${plan.recommended ? 'bg-primary hover:bg-primary/90' : 'hover:bg-primary hover:text-white'}`}
                      variant={plan.recommended ? 'default' : 'outline'}
                    >
                      {plan.btnText}
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-medium text-primary mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-lg font-medium mb-2">Can I switch plans later?</h3>
              <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes will take effect in the next billing cycle.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground">We offer a 7-day free trial for our Professional plan. No credit card required.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">What's your refund policy?</h3>
              <p className="text-muted-foreground">We offer a 14-day money-back guarantee for all our courses. If you're not satisfied, contact us for a full refund.</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Pricing;
