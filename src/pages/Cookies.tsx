
import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Cookies = () => {
  const lastUpdated = "October 15, 2023";

  const cookieCategories = [
    {
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. These cookies do not store any personally identifiable information.",
      examples: ["Authentication cookies", "Session cookies", "Security cookies"]
    },
    {
      title: "Performance & Analytics Cookies",
      description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous.",
      examples: ["Google Analytics", "Mixpanel", "Hotjar"]
    },
    {
      title: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.",
      examples: ["Language preference cookies", "Location cookies", "User interface customization cookies"]
    },
    {
      title: "Targeting & Advertising Cookies",
      description: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device.",
      examples: ["Facebook Pixel", "Google Ads", "LinkedIn Insight Tag"]
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4 text-center">
            Cookie Policy
          </h1>
          <p className="text-center text-muted-foreground mb-6">
            Last Updated: {lastUpdated}
          </p>
          
          <div className="prose prose-gray max-w-none">
            <p className="mb-6">
              This Cookie Policy explains how StructoEdge ("we", "us", "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">What are cookies?</h2>
            <p className="mb-6">
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
            </p>
            <p className="mb-6">
              Cookies set by the website owner (in this case, StructoEdge) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">Why do we use cookies?</h2>
            <p className="mb-6">
              We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our online properties. Third parties serve cookies through our website for advertising, analytics, and other purposes.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">Types of cookies we use</h2>
            <Accordion type="single" collapsible className="w-full">
              {cookieCategories.map((category, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {category.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4 text-muted-foreground">{category.description}</p>
                    <div className="mt-2">
                      <h4 className="font-medium mb-2">Examples:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        {category.examples.map((example, i) => (
                          <li key={i} className="text-muted-foreground">{example}</li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <h2 className="text-xl font-medium mt-8 mb-4">How can you control cookies?</h2>
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager that we make available on our website.
            </p>
            <p className="mb-4">
              The Cookie Consent Manager allows you to selectively accept different categories of cookies. You can change your cookie preferences at any time by visiting the Cookie Settings accessible via a link in the website footer.
            </p>
            <p className="mb-6">
              If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.
            </p>
            <p className="mb-6">
              The specific types of first- and third-party cookies served through our website and the purposes they perform are described in the table below:
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">How often will we update this Cookie Policy?</h2>
            <p className="mb-6">
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p className="mb-6">
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">Where can you get further information?</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or other technologies, please email us at:
            </p>
            <p className="font-medium">vishalmore9192@gmail.com</p>
            
            <div className="mt-10 flex items-center justify-between">
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cookies;
