import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Code, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const experiences = [
    {
      title: "Assistant Software Engineer",
      company: "Onnorokom Projukti Limited",
      period: "Apr 2025 – present",
      location: "Dhaka, Bangladesh",
      description: "Currently working on integrating real time messaging and file sharing service inside Udvash online course portal using .NET API in Backend and React in frontend"
    },
    {
      title: "Software Development Intern",
      company: "Onnorokom Projukti Limited", 
      period: "Oct 2024 – Mar 2025",
      location: "Dhaka, Bangladesh",
      description: "Developed a Meeting Room Booking System using .NET Core MVC, streamlining room scheduling and management for employees."
    }
  ];

  const projects = [
    {
      title: "Grocery Shop Management",
      subtitle: "Inventory Management Application",
      description: "A system with JWT authentication for secure inventory tracking, sales processing, and customer management.",
      technologies: ["HTML", "CSS", "JavaScript", "Express.js", "MySQL"],
      features: [
        "JWT authentication for secure operations",
        "Real-time stock updates and sales reporting", 
        "Built based on shop owner requirements and analysis"
      ]
    },
    {
      title: "InfoByte",
      subtitle: "A News Application",
      description: "An Android app using Java, Android Studio to fetch real-time news from NewsAPI.",
      technologies: ["Java", "Android Studio", "XML", "NewsAPI"],
      features: [
        "Clean UI for browsing news across categories",
        "Dynamic API integration",
        "Real-time news fetching"
      ]
    },
    {
      title: "ToDo-List",
      subtitle: "A CRUD Web Application",
      description: "A task management app with HTML, CSS, JavaScript front-end and Express.js, MySQL backend.",
      technologies: ["HTML", "CSS", "JavaScript", "Express.js", "MySQL", "Postman"],
      features: [
        "Task management with full CRUD operations",
        "RESTful APIs tested with Postman",
        "Responsive web design"
      ]
    }
  ];

  const skills = {
    languages: ["C#", "Javascript", "C++"],
    databases: ["Sql Server", "Mysql"],
    frameworks: [".NET MVC", ".NET Web Api", "Node Js"],
    competencies: ["Backend Development", "API Design"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tonmoy
            </h1>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="#about">About</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#experience">Experience</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#projects">Projects</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Md Sams Noor Tonmoy
            </h1>
            <p className="text-2xl text-gray-600 mb-8 font-light">
              Assistant Software Engineer
            </p>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Passionate full-stack developer with expertise in .NET, React, and modern web technologies. 
              Currently building real-time messaging systems and course management platforms at Omonokom Projukti Limited.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Mirpur, Dhaka</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>noortonmoy47@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+880-1770-383-184</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" asChild className="hover-scale">
                <a href="https://github.com/noor-tonmoy47" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-scale">
                <a href="https://linkedin.com/in/md-sams-noor-tonmoy-7365642b3/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover-scale border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-800">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right text-gray-600">
                      <p className="font-medium">{exp.period}</p>
                      <p className="text-sm">{exp.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-scale h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <Code className="w-5 h-5 text-blue-600" />
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {project.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((lang, idx) => (
                    <Badge key={idx} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-green-600" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((db, idx) => (
                    <Badge key={idx} className="bg-green-100 text-green-800 hover:bg-green-200">
                      {db}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-purple-600" />
                  Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((framework, idx) => (
                    <Badge key={idx} className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-orange-600" />
                  Key Competencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.competencies.map((comp, idx) => (
                    <Badge key={idx} className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                      {comp}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          
          <Card className="hover-scale">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl text-gray-800">
                    Bachelor of Engineering in Software Engineering
                  </CardTitle>
                  <CardDescription className="text-lg">
                    <span className="text-blue-600 font-medium">Shahjalal University of Science & Technology</span>
                    <br />
                    Feb 2020 – Mar 2025
                    <br />
                    Sylhet, Bangladesh
                  </CardDescription>
                </div>
                <div className="ml-6 flex-shrink-0">
                  {/* University Logo */}
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border">
                    <img 
                      src="/placeholder.svg" 
                      alt="SUST Logo" 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-12 opacity-90">
            Interested in collaborating or have a project in mind? I'd love to hear from you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" variant="secondary" asChild className="hover-scale">
              <a href="mailto:noortonmoy47@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-scale text-white border-white hover:bg-white hover:text-blue-600">
              <a href="tel:+8801770383184">
                <Phone className="w-5 h-5 mr-2" />
                Call Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-gray-300 text-center">
        <p>&copy; 2024 Md Sams Noor Tonmoy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
