// Projects.jsx
import  skills from "../assets/skills";
import ProjectCard from "./ProjectCard";

const dummyProjects = [
  {
    title: "Recruitment Bot",
    year: "2025",
    featured: true,
    status: "completed",
    description:
      "Recruitment Bot is a smart, interactive web-based platform designed to simulate real-life job interviews and help users enhance their communication and technical skills. The bot conducts natural language conversations with users, evaluates their answers, and provides instant feedback on grammar, clarity, and confidence. Users can choose from different interview roles (e.g., frontend developer, data analyst, etc.) and receive both verbal and textual evaluations.",
    screenshots: [
      "https://res.cloudinary.com/dxe17fztz/image/upload/v1752230205/WhatsApp_Image_2025-07-11_at_16.06.37_9ee3ce24_o3cyz8.jpg",
      "https://res.cloudinary.com/dxe17fztz/image/upload/v1752230256/WhatsApp_Image_2025-07-11_at_16.07.27_f8e47fcb_twlkt3.jpg",
      "https://res.cloudinary.com/dxe17fztz/image/upload/v1752230297/WhatsApp_Image_2025-07-11_at_16.08.09_51ce3417_uwccoi.jpg",
      "https://res.cloudinary.com/dxe17fztz/image/upload/v1752230330/WhatsApp_Image_2025-07-11_at_16.08.41_4eee377d_nf4xvt.jpg",
      "https://res.cloudinary.com/dxe17fztz/image/upload/v1752230364/WhatsApp_Image_2025-07-11_at_16.09.16_8ec83c4e_xj4v9t.jpg"
    ],
    tech: ["react", "nodejs", "mongodb", "express", "tailwind css", "Node.js"],
    github: "https://github.com/riyaz-shaik-16/recruitment-bot",
    demo: "https://recruitment-bot-alpha.vercel.app/",
  },
  {
    title: "Chat App",
    year: "2025",
    featured:true,
    status: "completed",
    description: "Designed and developed a full-stack real-time chat app with Google Authentication, Redis Pub/Sub for event syncing, and a modern UI using ShadCN and Tailwind CSS CSS. Socket.IO powered the live messaging experience with online presence and typing indicators.",
    screenshots: [
      "https://res.cloudinary.com/dxe17fztz/image/upload/v1753535728/Screenshot_2025-07-26_184408_j0zqw0.png",
      "https://res.cloudinary.com/dxe17fztz/image/upload/v1753609781/Screenshot_2025-07-27_145610_vme0yx.png",
      "https://res.cloudinary.com/dxe17fztz/image/upload/v1753609865/Screenshot_2025-07-27_151821_zphg9v.png"
    ],
    tech: ["react", "express", "mongodb", "Tailwind CSS","redis","Socket.IO"],
    github: "https://github.com/riyaz-shaik-16/chat-app",
    demo: "https://chat-app-16.vercel.app",
  },
  {
    title: "Alumni Interaction Platform",
    year: "2024",
    status: "completed",
    description:
      "The Alumni Interaction Platform is a web-based system designed to connect current students with alumni for guidance, mentorship, and career support. The platform facilitates real-time conversations, scheduled sessions, and resource sharing to help students make informed academic and career decisions.",
    screenshots: [
      "https://res.cloudinary.com/dxe17fztz/image/upload/v1752231841/699db290-9e1f-4a51-8c2b-f78bc97ca0e9.png",
      "https://res.cloudinary.com/dxe17fztz/image/upload/v1752231877/0b714bc4-2618-43a3-87ab-09cd7aeb2d3f.png",
      "https://res.cloudinary.com/dxe17fztz/image/upload/v1752231900/c8d0c569-d2c7-4a91-b3a6-7f2ea3599048.png",
      "https://res.cloudinary.com/dxe17fztz/image/upload/v1752231921/73a57806-3d85-4d8f-a146-be031dbe564e.png"
    ],
    tech: ["react", "node.js", "mongodb","express", "Tailwind CSS","shadcn"],
    github: "https://github.com/riyaz-shaik-16/Alumni-interaction-platform",
    demo: null,
  },
  {
    title: "Portfolio Website",
    year: "2025",
    featured: true,
    status: "completed",
    description: "Responsive portfolio website with smooth animations and modern design patterns.",
    screenshots: [
      "https://res.cloudinary.com/dxe17fztz/image/upload/v1752230940/715f05d1-ef74-4007-8732-a49160705bbb.png"
    ],
    tech: ["react", "Tailwind CSS", "javascript"],
    github: "https://github.com/riyaz-shaik-16/portfolio",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full py-20 px-4 md:px-20 bg-background text-foreground">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Projects</h2>
      <div className="relative flex flex-col gap-32">
        {dummyProjects.map((project, i) => (
          <div key={i} className="flex items-start gap-8 relative">
            <div className="sticky hidden md:block top-20 w-20 text-right text-muted-foreground text-sm font-mono">
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
