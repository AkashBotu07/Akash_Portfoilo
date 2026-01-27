import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {  ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export function Certification() {
  const projects = [
    {
      title: "GCCP Completion",
      image: "https://res.cloudinary.com/dllj2hcms/image/upload/v1769544920/icons8-google-cloud-144_j7kaj2.png",
      liveLink: " https://certificate.givemycertificate.com/c/2d46c8c4-1f0c-4151-9f33-2f8a5a9609a6",
    },
    
    {
      title: "SalesForce Internship",
      image: "https://res.cloudinary.com/dllj2hcms/image/upload/v1769545002/Salesforce.com_logo.svg_ca2bxi.png",
      liveLink: "https://smartinternz.com/internships/salesforce_certificates/8fa9505461d59353a18be8a7d3885e48",    },
      {
      title: "Introduction to Industry 4.0 and Industrial Internet of Things",
      image: "https://res.cloudinary.com/dllj2hcms/image/upload/v1769545437/nptel-hero_ophedw.png",
      liveLink: " https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs95/Course/NPTEL24CS95S46530025103970146.pdf",
    },
    {
      title: "Yhills Internship",
      image: "https://res.cloudinary.com/dllj2hcms/image/upload/v1769545242/620113c90cf2612e79c71d37_wevwcg.png",
      liveLink: "https://drive.google.com/file/d/1lHryl7c8asyKF7cauhrBvnLb1BNNVJeT/view?usp=sharing",
    },
    
    {
      title: "The Joy of Computing using Python",
      image: "https://res.cloudinary.com/dllj2hcms/image/upload/v1769545437/nptel-hero_ophedw.png",
      liveLink: "https://archive.nptel.ac.in/content/noc/NOC23/SEM1/Ecertificates/106/noc23-cs20/Course/NPTEL23CS20S2494150104088477.jpg",
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Certifications</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Here are some of my certifications that showcase my skills and experience
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
                      <h3 className="mb-2"><strong>{project.title}</strong></h3>
                                   
                     <div className="flex gap-3 mt-auto">
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Link
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
