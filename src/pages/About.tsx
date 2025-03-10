
import MainLayout from '@/layouts/MainLayout';
import { PhoneCall, Mail, MessageSquare } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Er. Vishal More",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Structural engineering expert with over 15 years of experience in education technology and professional practice."
    },
    {
      name: "Er. Vishal More",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Engineering leader with experience at major tech companies and edtech startups focused on accessible learning."
    },
    {
      name: "Er. Vishal More",
      role: "Head of Education",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      bio: "Ph.D. in Structural Engineering with a passion for creating engaging learning experiences for all students."
    }
  ];

  const values = [
    {
      title: "Intentional Design",
      description: "We believe learning environments should be designed with purpose, removing distractions and focusing on what matters.",
      icon: (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      title: "Accessibility",
      description: "Education should be accessible to everyone, regardless of background, ability, or circumstances.",
      icon: (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M9 2h6v4H9z" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Community Growth",
      description: "Learning flourishes in community. We foster environments where students can collaborate, share, and grow together.",
      icon: (
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 1 0 7.75" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-primary mb-4">
            About StructoEdge
          </h1>
          <p className="text-lg text-muted-foreground">
            We're reimagining structural engineering education through the lens of intentional design and meaningful learning experiences.
          </p>
        </div>

        {/* Trimurti Infrastructure Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-muted/30 border border-border rounded-lg p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-primary mb-6">
              Trimurti Infrastructure – Engineering Your Dreams into Reality!
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3">📌 Services:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔️</span>
                    <span>RCC Structure Design (STAAD.Pro, ETABS, AutoCAD, Revit)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔️</span>
                    <span>Earthquake-Resistant Design & Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔️</span>
                    <span>Project Consultation & Site Supervision</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔️</span>
                    <span>Quantity Estimation (MT/Kg)</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <a href="tel:+918788017458" className="flex items-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-all">
                  <PhoneCall className="h-5 w-5 text-accent mr-2" />
                  <span>+91 8788017458</span>
                </a>
                <a href="mailto:vishalmore9192@gmail.com" className="flex items-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-all">
                  <Mail className="h-5 w-5 text-accent mr-2" />
                  <span>vishalmore9192@gmail.com</span>
                </a>
                <a href="https://wa.me/918788017458" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-background rounded-lg border border-border hover:shadow-md transition-all">
                  <MessageSquare className="h-5 w-5 text-accent mr-2" />
                  <span>WhatsApp: 8788017458</span>
                </a>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                  🔹 Innovative
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                  🔹 Safe
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                  🔹 Cost-Effective
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                  🔹 Reliable
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-muted/30 border border-border rounded-lg p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              At StructoEdge, we believe that learning experiences in structural engineering should be designed with the same level of care and attention to detail as the structures we build. We're on a mission to create educational content that combines elegance, simplicity, and functionality to help engineers achieve their goals.
            </p>
            <p className="text-lg leading-relaxed">
              Founded in 2023 by Er. Vishal More, we bring together experts from structural engineering, design, and technology to create courses that don't just teach skills, but inspire creativity and foster deep understanding of engineering principles.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-primary mb-10 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 text-accent">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-primary mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-primary mb-10 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-primary">{member.name}</h3>
                  <p className="text-accent mb-2">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
