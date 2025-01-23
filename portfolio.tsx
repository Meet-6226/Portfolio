import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Meet Alshi
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Software Engineer passionate about building innovative solutions
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <a href="https://www.linkedin.com/in/meet-alshi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:contact@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">JavaScript</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">SQL</Badge>
            <Badge variant="secondary">Git</Badge>
            <Badge variant="secondary">AWS</Badge>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center">Experience</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Software Engineer</h3>
                <p className="text-sm text-muted-foreground mb-4">Company Name • 2022 - Present</p>
                <ul className="text-sm space-y-2">
                  <li>Developed and maintained web applications using React and Node.js</li>
                  <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                  <li>Implemented CI/CD pipelines and automated testing procedures</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Full Stack Developer</h3>
                <p className="text-sm text-muted-foreground mb-4">Previous Company • 2020 - 2022</p>
                <ul className="text-sm space-y-2">
                  <li>Built RESTful APIs using Node.js and Express</li>
                  <li>Designed and implemented database schemas using PostgreSQL</li>
                  <li>Optimized application performance and user experience</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Software Developer Intern</h3>
                <p className="text-sm text-muted-foreground mb-4">Internship Company • 2019</p>
                <ul className="text-sm space-y-2">
                  <li>Assisted in developing new features for web applications</li>
                  <li>Participated in code reviews and team meetings</li>
                  <li>Learned industry best practices and modern technologies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2024 Meet Alshi. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/meet-alshi/"
                className="text-muted-foreground hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

