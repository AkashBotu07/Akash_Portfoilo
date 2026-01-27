import { Card } from "./ui/card";
import { Code2, Database, Layout, Server, Bug, Wrench } from "lucide-react";
import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "HTML","CSS", "Javascript", ]
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Java", "JDBC", "Hibernates",  "Express","REST APIs"]
    },
    {
      icon: Database,
      title: "Database",
      skills: [ "MongoDB", "MySQL", "SQL PLUS"]
    },
    {
      icon: Bug,
      title: "Testing",
      skills: ["SDLC", "White Box Testing", "iOS", "Android", "Responsive Design"]
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "Github", "VS Code","Eclipse", "Figma", "Postman","Cloudnary"]
    },
    {
      icon: Layout,
      title: "Design",
      skills: ["UI/UX", "Figma","Canva"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Skills & Technologies</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <h3>{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.03 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
