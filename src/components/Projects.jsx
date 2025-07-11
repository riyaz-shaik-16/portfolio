// Projects.jsx
import  skills from "../assets/skills";
import ProjectCard from "./ProjectCard";

const dummyProjects = [
  {
    title: "Recruitment Bot",
    year: "2024",
    featured: true,
    status: "completed",
    description:
      "AI-powered recruitment assistant that generates and evaluates job-specific interview questions using advanced NLP algorithms.",
    screenshots: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop"
    ],
    tech: ["react", "nodejs", "redis", "socketio"],
    github: "https://github.com/riyaz-shaik-16/recruitment-bot",
    demo: "https://recruitment-bot-alpha.vercel.app/",
  },
  {
    title: "Taskify",
    year: "2023",
    status: "completed",
    description: "Collaborative kanban board for team task management with real-time updates and drag-and-drop functionality.",
    screenshots: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop"
    ],
    tech: ["react", "express", "mongodb", "tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Dashboard",
    year: "2024",
    featured: true,
    status: "in-progress",
    description:
      "Modern analytics dashboard for e-commerce businesses with real-time sales tracking and inventory management.",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1590402494756-10c265b9d736?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop"
    ],
    tech: ["react", "nodejs", "postgresql", "tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather App",
    year: "2023",
    status: "completed",
    description: "Beautiful weather application with location-based forecasts and interactive maps.",
    screenshots: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop"
    ],
    tech: ["react", "javascript", "css", "api"],
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media Clone",
    year: "2024",
    status: "in-progress",
    description:
      "Full-stack social media platform with real-time messaging, post sharing, and user authentication.",
    screenshots: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop"
    ],
    tech: ["react", "nodejs", "mongodb", "socketio"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    year: "2023",
    featured: true,
    status: "completed",
    description: "Responsive portfolio website with smooth animations and modern design patterns.",
    screenshots: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop"
    ],
    tech: ["react", "tailwind", "javascript"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="relative w-full py-20 px-4 md:px-20 bg-background text-foreground">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Projects</h2>
      <div className="relative flex flex-col gap-32">
        {dummyProjects.map((project, i) => (
          <div key={i} className="flex items-start gap-8 relative">
            <div className="sticky top-20 w-20 text-right text-muted-foreground text-sm font-mono">
              {project.year}
            </div>
            <ProjectCard project={project} skillsMap={skills} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
