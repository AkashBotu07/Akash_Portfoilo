import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A responsive static e-commerce website equipped with cart functionality, smooth navigation, user-friendly interface.",
      image: "https://res.cloudinary.com/dllj2hcms/image/upload/v1764160137/stock-photo-what-is-ecommerce-business-isometric-illustration-graphic-1618740352_hbmiq4.jpg",
      tags: ["HTML", "CSS", "Javascript", "Cloudnary"],
      liveLink: " https://akashbotu07.github.io/Ecommerce-frontend/",
      githubLink: "https://github.com/AkashBotu07/Ecommerce-frontend.git"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop interface, and team features.",
      image: "https://res.cloudinary.com/dllj2hcms/image/upload/v1764161283/01-to-do-list-cover_jnjvie.webp",
      tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
      liveLink: "https://akashbotu07.github.io/To-Do-Using-react/",
      githubLink: "https://github.com/AkashBotu07/education-website.git"
    },
    {
      title: "Education Website",
      description: "A modern Educational application with transaction tracking, budgeting tools, and financial insights.",
      image: "https://res.cloudinary.com/dllj2hcms/image/upload/v1764160909/istockphoto-1090517868-612x612_bhk69t.jpg",
      tags: ["React Native", "GraphQL", "PostgreSQL"],
      liveLink: "https://akashbotu07.github.io/education-website/",
      githubLink: "https://github.com/AkashBotu07/education-website.git"
    },
    {
      title: "Meeting Website",
  description: "A responsive meeting website designed for hosting and joining virtual meetings, smooth navigation, and an intuitive user experience.",
      image: "https://res.cloudinary.com/dllj2hcms/image/upload/v1764160548/6568ae439a0e4ff37a81b212_an4zqdz02km9gjntehrr_kjzqea.webp",
      tags: ["HTML", "CSS", "Javascript", "Cloudnary"],
      liveLink: " https://meeting-website.vercel.app/",
      githubLink: "https://github.com/AkashBotu07/meeting_website.git"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </motion.div>



          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                {/* your existing project card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="overflow-hidden group hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>

                    <div className="p-6 flex flex-col h-full">
                      <h3 className="mb-2">{project.title}</h3>
                   <p className="text-slate-600 dark:text-slate-400 mb-4 h-[96px] min-h-[96px] max-h-[96px] overflow-y-scroll no-scrollbar">
  {project.description}
</p>



                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>

                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>


        </div>
      </div>
    </section>
  );
}
