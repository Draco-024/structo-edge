
import MainLayout from '@/layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      description: 'Essential structural engineering education for beginners',
      price: '$19',
      period: 'per month',
      features: [
        'Access to 10 foundational courses',
        'Basic practice problems',
        'Mobile access',
        'Certificate of completion',
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Comprehensive training for working engineers',
      price: '$49',
      period: 'per month',
      features: [
        'Access to all 50+ courses',
        'Advanced practice problems',
        'Downloadable resources',
        'Priority support',
        '1 specialized certification path',
        'Mock exams and assessments'
      ],
      cta: 'Start Pro Plan',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for engineering firms and teams',
      price: 'Custom',
      period: 'per organization',
      features: [
        'All Professional features',
        'Dedicated account manager',
        'Custom learning paths',
        'Team analytics & reporting',
        'API access',
        'SSO integration'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground">
            Choose the plan that's right for your career growth and development needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative rounded-lg border ${plan.popular ? 'border-primary shadow-lg' : 'border-border'} p-6 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-md">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground h-12">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.popular ? '' : 'bg-muted-foreground/10 text-foreground hover:bg-muted-foreground/20'}`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-medium mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-medium mb-2">Can I switch plans later?</h3>
              <p className="text-muted-foreground text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Do you offer student discounts?</h3>
              <p className="text-muted-foreground text-sm">Yes, we offer a 50% discount to verified students. Contact our support team for details.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground text-sm">We accept all major credit cards, PayPal, and bank transfers for enterprise plans.</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">How do certifications work?</h3>
              <p className="text-muted-foreground text-sm">Complete a learning path to earn a certification. All certifications are industry-recognized and can be shared on your LinkedIn profile.</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Pricing;
