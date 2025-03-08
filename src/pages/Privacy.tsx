
import MainLayout from '@/layouts/MainLayout';

const Privacy = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: June 1, 2023
          </p>

          <div className="prose prose-slate max-w-none">
            <p>
              At StructoEdge, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Register for an account</li>
              <li>Purchase a course or subscription</li>
              <li>Complete forms on our website</li>
              <li>Participate in forums or communities</li>
              <li>Contact our support team</li>
              <li>Subscribe to our newsletter</li>
            </ul>
            <p>
              This information may include your name, email address, postal address, phone number, payment information, and other details you choose to provide.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">Automatically Collected Information</h2>
            <p>
              When you visit our website or use our platform, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Time zone setting</li>
              <li>Pages visited and time spent on those pages</li>
              <li>Unique device identifiers</li>
            </ul>
            
            <h2 className="text-xl font-medium mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and sending related information</li>
              <li>Sending administrative messages, updates, and security alerts</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Protecting against fraudulent, unauthorized, or illegal activity</li>
            </ul>
            
            <h2 className="text-xl font-medium mt-8 mb-4">Sharing Your Information</h2>
            <p>
              We may share your personal information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Service providers who perform services on our behalf</li>
              <li>Payment processors to complete transactions</li>
              <li>Professional advisors, such as lawyers, accountants, and insurers</li>
              <li>Government bodies when required by law</li>
              <li>Third parties in connection with a merger, sale, or acquisition</li>
            </ul>
            
            <h2 className="text-xl font-medium mt-8 mb-4">Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Accessing and receiving a copy of your personal information</li>
              <li>Rectifying inaccurate or incomplete information</li>
              <li>Deleting your personal information</li>
              <li>Restricting or objecting to certain processing activities</li>
              <li>Data portability</li>
              <li>Withdrawing consent</li>
            </ul>
            
            <h2 className="text-xl font-medium mt-8 mb-4">Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">International Transfers</h2>
            <p>
              Your information may be transferred to, and processed in, countries other than the one in which you reside. These countries may have data protection laws that differ from those in your country.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date at the top of this document. We encourage you to review this Privacy Policy periodically.
            </p>
            
            <h2 className="text-xl font-medium mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> privacy@structoedge.com<br />
              <strong>Address:</strong> 123 Engineering Way, Suite 400, San Francisco, CA 94103
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
