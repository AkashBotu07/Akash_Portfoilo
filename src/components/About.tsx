import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Code2, Palette, Rocket } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my priority."
    },
    {
      icon: Palette,
      title: "Design-Focused",
      description: "Creating beautiful, user-friendly interfaces that users love."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and performance across all platforms."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            
          >
           About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "anticipate" }}
            >
              <motion.div
                className="aspect-square rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback 
                  src="https://res.cloudinary.com/dllj2hcms/image/upload/v1762068516/WhatsApp_Image_2025-11-02_at_12.53.47_844d4b98_kkklpr.jpg"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl -z-10"
                animate={{
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="mb-4" >Passionate Developer</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                
                Hi, I'm Akash — a passionate Full Stack Java Developer, and Selenium  Testing with experience building scalable web applications and solving real-world problems through clean, efficient code.
                I enjoy turning ideas into functional products using technologies like Java, React.js, Node.js, MongoDB, and SQL. I've built projects ranging from e-commerce platforms to learning management systems, dashboards, and smart surveillance systems using AI.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                I've completed internships at YHills as a Web Developer and at SmartInternz as a Salesforce Cloud Administrator, which helped me understand real-time development workflows and cloud operations.
                Outside academics, I've actively participated in Internal Smart India Hackathon (SIH) and contributed as a Core Member of the Web Eye Club, where I collaborated on multiple tech activities and events.
                Currently, I'm focusing on becoming a better Java developer and expanding my knowledge into advance Java and AI-powered systems.
                I love learning new technologies, solving challenges, and building things that make an impact.
                Let's build something amazing together. 🚀
              </p>
              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {["Java","Javascript","SQL","React", "Node.js"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="p-6 h-full">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="mb-2">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
