import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/data/project";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

export function Projects() {
  // Sort projects to show featured ones first
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <section id="projects" className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 space-y-8">
      <div className="text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h1>
        <p className="text-base sm:text-lg text-gray-600">
          A selection of projects I've worked on, showcasing my skills and experience.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-2">
        {sortedProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden flex flex-col h-full">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {project.featured && (
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Featured
                  </Badge>
                </div>
              )}
            </div>

            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
              <CardDescription className="text-sm">{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs sm:text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  View Project <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
