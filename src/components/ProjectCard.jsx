import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Star } from "lucide-react";
import { useState } from "react";

const ProjectCard = ({ project, skillsMap }) => {
  const {
    title,
    description,
    screenshots,
    tech,
    github,
    demo,
    year,
    featured,
    status,
  } = project;
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="sticky top-20 w-full max-w-4xl">
      <Card className="group relative overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 dark:to-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardContent className="relative z-10 p-6 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                  {title}
                </h3>
                {featured && (
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800"
                  >
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {year && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {year}
                  </div>
                )}
                {status && (
                  <Badge
                    variant={
                      status === "completed"
                        ? "default"
                        : status === "in-progress"
                        ? "secondary"
                        : "outline"
                    }
                    className="text-xs"
                  >
                    {status.replace("-", " ")}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {screenshots?.length > 0 && (
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {screenshots.map((src, i) => (
                    <CarouselItem key={i} className="flex justify-center">
                      <div className="relative w-full max-w-2xl">
                        {!imageLoaded[i] && (
                          <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-lg animate-pulse" />
                        )}
                        <img
                          src={src}
                          alt={`${title} screenshot ${i + 1}`}
                          className={`w-full rounded-lg max-h-80 object-cover border border-zinc-200 dark:border-zinc-700 transition-all duration-300 hover:scale-[1.02] ${
                            imageLoaded[i] ? "opacity-100" : "opacity-0"
                          }`}
                          onLoad={() => handleImageLoad(i)}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {screenshots.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </>
                )}
              </Carousel>

              {screenshots.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                  {screenshots.length} images
                </div>
              )}
            </div>
          )}

          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {tech?.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                Built with
              </h4>
              <div className="flex flex-wrap gap-3">
                {tech.map((t) => {
                  const found = skillsMap.find(
                    (s) => s.name.toLowerCase() === t.toLowerCase()
                  );
                  return found ? (
                    <div
                      key={t}
                      className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 px-3 py-2 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-200 border border-zinc-200 dark:border-zinc-700"
                    >
                      <img
                        src={found.image}
                        alt={found.name}
                        className="w-4 h-4"
                      />
                      <span>{found.name}</span>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Enhanced Links */}
          <div className="flex gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
            {github && (
              <Button
                asChild
                variant="outline"
                className="flex-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
              >
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </Button>
            )}
            {demo && (
              <Button
                asChild
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
