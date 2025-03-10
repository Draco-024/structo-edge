
import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  const lastUpdated = "October 15, 2023";

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4 text-center">
            Terms of Service
          </h1>
          <p className="text-center text-muted-foreground mb-6">
            Last Updated: {lastUpdated}
          </p>
          
          <div className="prose prose-gray max-w-none">
            <p className="mb-6">
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the StructoEdge website and platform (the "Service") operated by StructoEdge ("us", "we", or "our").
            </p>
            <p className="mb-6">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            <p className="mb-6">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">1. Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p className="mb-4">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
            </p>
            <p className="mb-6">
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">2. Course Content and Intellectual Property</h2>
            <p className="mb-4">
              Our Service allows you to access educational content including videos, documents, and interactive materials ("Content"). The Content is owned by StructoEdge and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mb-4">
              You are granted a limited, non-exclusive, non-transferable license to access and use the Content for your personal, non-commercial educational purposes. You may not:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Modify, distribute, prepare derivative works of, reverse engineer, reverse assemble, disassemble, decompile or otherwise attempt to decipher any code used in the Content and/or the Service</li>
              <li>Sell, assign, license, disclose, distribute, or otherwise transfer or make available the Content or any copies thereof to third parties</li>
              <li>Remove, alter or obscure any proprietary notice or identification, including copyright, trademark, patent or other notices, contained in or displayed on or via the Content</li>
            </ul>
            
            <h2 className="text-xl font-medium mt-8 mb-4">3. Payments and Refunds</h2>
            <p className="mb-4">
              Certain aspects of the Service may be provided for a fee. You will be required to select a payment plan and provide accurate payment information if you elect to purchase paid aspects of the Service.
            </p>
            <p className="mb-4">
              All payments are non-refundable except in specific circumstances outlined in our Refund Policy. You may request a refund within 7 days of purchase if you have not completed more than 20% of a course. Refund eligibility is at our discretion.
            </p>
            <p className="mb-6">
              You agree to promptly update your account information with any changes related to your payment method, including but not limited to changes in billing address or credit card expiration date.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">4. User Conduct</h2>
            <p className="mb-4">
              While using our Service, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Violate any applicable laws, regulations, or ordinances</li>
              <li>Use the Service for any illegal purpose or to solicit others to engage in any illegal acts</li>
              <li>Share your account credentials with others or allow others to access or use your account</li>
              <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
              <li>Post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
              <li>Attempt to probe, scan, or test the vulnerability of the Service or breach any security or authentication measures</li>
            </ul>
            
            <h2 className="text-xl font-medium mt-8 mb-4">5. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="mb-6">
              All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall StructoEdge, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Your access to or use of or inability to access or use the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>Unauthorized access, use or alteration of your transmissions or content</li>
            </ul>
            
            <h2 className="text-xl font-medium mt-8 mb-4">7. Changes</h2>
            <p className="mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="font-medium">vishalmore9192@gmail.com</p>
            
            <div className="mt-10 flex items-center justify-between">
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;
