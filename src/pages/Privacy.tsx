
import MainLayout from '@/layouts/MainLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const Privacy = () => {
  const lastUpdated = "October 15, 2023";

  const privacySections = [
    {
      title: "Information We Collect",
      content: (
        <>
          <p className="mb-4">We collect several types of information from and about users of our Platform, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Personal information you provide when registering or maintaining an account, such as your name, email address, postal address, telephone number, and payment information.</li>
            <li>Information about your courses, progress, and activity on the platform, including completed lectures, quiz attempts, and assignment submissions.</li>
            <li>Technical information, including your IP address, browser type, operating system, device information, and usage details.</li>
            <li>Information about your learning preferences, interests, and feedback you provide through surveys, reviews, or other communications.</li>
          </ul>
        </>
      )
    },
    {
      title: "How We Use Your Information",
      content: (
        <>
          <p className="mb-4">We use information that we collect about you or that you provide to us:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To provide, maintain, and improve our Platform and services.</li>
            <li>To personalize your experience and deliver content relevant to your interests and learning goals.</li>
            <li>To process payments and fulfill orders for courses, subscriptions, or other products.</li>
            <li>To communicate with you about your account, courses, or provide customer support.</li>
            <li>To send promotional materials, newsletters, and other marketing communications.</li>
            <li>To analyze usage patterns, monitor the effectiveness of our services, and enhance platform security.</li>
          </ul>
        </>
      )
    },
    {
      title: "Information Sharing",
      content: (
        <>
          <p className="mb-4">We may share your personal information in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>With service providers who perform services on our behalf, such as payment processing, data analysis, and customer service.</li>
            <li>With instructors, but only limited information necessary for course delivery and communication about course content.</li>
            <li>To comply with legal obligations, enforce our terms, protect our rights, or respond to government requests.</li>
            <li>In connection with a merger, acquisition, or sale of assets, with appropriate confidentiality agreements in place.</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent.</p>
        </>
      )
    },
    {
      title: "Your Privacy Rights",
      content: (
        <>
          <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access to your personal information and the ability to receive a copy in a structured, commonly used format.</li>
            <li>Correction of inaccurate or incomplete personal information.</li>
            <li>Deletion of your personal information in certain circumstances.</li>
            <li>Restriction or objection to certain processing activities.</li>
            <li>Withdrawal of consent at any time, where processing is based on your consent.</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section.</p>
        </>
      )
    },
    {
      title: "Data Security",
      content: (
        <>
          <p className="mb-4">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Encryption of sensitive data using industry-standard protocols.</li>
            <li>Regular security assessments and testing of our systems and processes.</li>
            <li>Access controls and authentication procedures for our staff and systems.</li>
            <li>Regular backups and disaster recovery planning to prevent data loss.</li>
          </ul>
          <p>However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
        </>
      )
    },
    {
      title: "Cookies and Tracking Technologies",
      content: (
        <>
          <p className="mb-4">We use cookies and similar tracking technologies to collect information about your browsing activities and to remember your preferences. These technologies help us:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Understand how you use our Platform and which pages you visit.</li>
            <li>Remember your login status and course progress.</li>
            <li>Personalize your experience and deliver relevant content.</li>
            <li>Analyze the effectiveness of our features and marketing campaigns.</li>
          </ul>
          <p>You can set your browser to refuse all or some browser cookies or to alert you when cookies are being sent. However, if you disable or refuse cookies, some parts of the Platform may become inaccessible or not function properly.</p>
        </>
      )
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4 text-center">
            Privacy Policy
          </h1>
          <p className="text-center text-muted-foreground mb-6">
            Last Updated: {lastUpdated}
          </p>
          
          <div className="prose prose-gray max-w-none">
            <p className="mb-6">
              At StructoEdge, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, website, and services (collectively, the "Platform").
            </p>
            <p className="mb-6">
              Please read this Privacy Policy carefully. By accessing or using our Platform, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy.
            </p>
            
            <Accordion type="single" collapsible className="w-full mt-8">
              {privacySections.map((section, index) => (
                <AccordionItem key={index} value={`section-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {section.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8">
              <h2 className="text-xl font-medium mb-4">Changes to Our Privacy Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              <p>
                Your continued use of the Platform after we post any modifications to the Privacy Policy will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
              </p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-medium mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="font-medium">privacy@structoedge.com</p>
              <div className="mt-6">
                <Link to="/help" className="text-primary hover:underline">
                  Visit our Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
