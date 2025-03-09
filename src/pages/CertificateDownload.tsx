
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { Award, Download, ArrowLeft, Printer } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CertificateDownload = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const { name, email, course } = location.state || { 
    name: "Student Name", 
    email: "student@example.com",
    course: "Fundamentals of Structural Analysis"
  };

  useEffect(() => {
    if (!location.state) {
      toast({
        title: "Certificate information missing",
        description: "Please generate a certificate first",
        variant: "destructive",
      });
      navigate('/certification');
    }
  }, [location.state, navigate, toast]);

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    
    if (printWindow && certificateRef.current) {
      printWindow.document.write(`
        <html>
          <head>
            <title>StructoEdge Certificate - ${name}</title>
            <style>
              body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
              }
              .certificate {
                border: 16px double #0056b3;
                padding: 40px;
                width: 210mm;
                height: 297mm;
                position: relative;
                background-color: white;
                box-sizing: border-box;
              }
              .certificate-content {
                text-align: center;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              }
              .certificate-header {
                margin-bottom: 20px;
              }
              .certificate-title {
                font-size: 36px;
                font-weight: bold;
                color: #0056b3;
                margin-bottom: 10px;
              }
              .recipient-name {
                font-size: 30px;
                font-weight: bold;
                color: #0056b3;
                margin: 30px 0;
              }
              .course-name {
                font-size: 24px;
                font-weight: bold;
                color: #0056b3;
                margin: 20px 0;
              }
              .signatures {
                display: flex;
                justify-content: space-between;
                margin-top: 40px;
              }
              .signature {
                text-align: center;
                width: 200px;
              }
              .signature-line {
                width: 100%;
                border-top: 1px solid #666;
                margin-bottom: 10px;
              }
              .watermark {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0.05;
                font-size: 120px;
                color: #000;
                z-index: -1;
              }
              @media print {
                body {
                  margin: 0;
                  padding: 0;
                }
                .certificate {
                  border-width: 8px;
                }
                .no-print {
                  display: none;
                }
              }
            </style>
          </head>
          <body>
            <div class="certificate">
              <div class="certificate-content">
                <div class="certificate-header">
                  <div class="certificate-title">CERTIFICATE OF COMPLETION</div>
                  <p>This is to certify that</p>
                  <div class="recipient-name">${name}</div>
                  <p>has successfully completed the course</p>
                  <div class="course-name">${course}</div>
                  <p>with excellence and dedication</p>
                </div>
                <div>
                  <p>This certificate is awarded on</p>
                  <p><strong>${new Date().toLocaleDateString('en-IN', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}</strong></p>
                </div>
                <div class="signatures">
                  <div class="signature">
                    <div class="signature-line"></div>
                    <p>Er. Vishal More</p>
                    <p>Lead Instructor</p>
                  </div>
                  <div class="signature">
                    <div class="signature-line"></div>
                    <p>Atharva Suryawanshi</p>
                    <p>Chief Technology Officer</p>
                  </div>
                </div>
              </div>
              <div class="watermark">StructoEdge</div>
            </div>
            <script>
              window.onload = function() {
                window.print();
              }
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const handleDownload = () => {
    toast({
      title: "Certificate downloaded",
      description: "Your certificate has been downloaded as a PDF.",
    });
    // In a production app, this would trigger actual PDF generation
    handlePrint();
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <Button 
            variant="outline" 
            onClick={() => navigate('/certification')} 
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Certification
          </Button>

          <div className="mb-6 text-center">
            <h1 className="text-3xl font-medium tracking-tight text-primary mb-4">Your Certificate</h1>
            <p className="text-muted-foreground">
              You can download or print your certificate from here.
            </p>
          </div>

          <div className="flex gap-4 justify-center mb-8">
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download as PDF
            </Button>
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              Print Certificate
            </Button>
          </div>

          <div ref={certificateRef} className="border-8 border-double border-primary/20 p-8 bg-white rounded-lg shadow-lg mb-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Award className="h-16 w-16 text-accent" />
              </div>
              <h2 className="text-3xl font-bold tracking-wide text-primary mb-2">CERTIFICATE OF COMPLETION</h2>
              <p className="text-muted-foreground mb-8">This certifies that</p>
              <p className="text-3xl font-bold text-primary mb-6">{name}</p>
              <p className="text-muted-foreground mb-8">has successfully completed the course</p>
              <p className="text-2xl font-semibold text-primary mb-10">{course}</p>
              <div className="flex justify-between items-center mt-12">
                <div className="text-center">
                  <div className="w-40 border-t border-gray-400 mx-auto"></div>
                  <p className="mt-2 text-muted-foreground">Er. Vishal More</p>
                  <p className="text-xs text-muted-foreground">Lead Instructor</p>
                </div>
                <div className="text-center">
                  <div className="w-40 border-t border-gray-400 mx-auto"></div>
                  <p className="mt-2 text-muted-foreground">Atharva Suryawanshi</p>
                  <p className="text-xs text-muted-foreground">Chief Technology Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CertificateDownload;
