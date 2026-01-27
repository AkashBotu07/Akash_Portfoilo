import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8 inline-block" variants={itemVariants}>
            <motion.div
              className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-white text-5xl">👋</span>
            </motion.div>
          </motion.div>
          
          <motion.h1 className="mb-6" variants={itemVariants}>
  Hi, I'm{" "}
  <span
    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
    style={{ fontWeight: "var(--font-weight-medium)" }}
  >
    BOTU AKASH
  </span>
</motion.h1>

          
          <motion.h2 className="mb-8 text-slate-600 dark:text-slate-400 font-size: larger; font-weight: bold" variants={itemVariants}>
            Full Stack Developer & Test Engineer
          </motion.h2>
          
          <motion.p className="mb-12 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto" variants={itemVariants}>
            I craft beautiful, functional web experiences with modern technologies. <br/>
            Passionate about creating intuitive interfaces and solving complex problems and testing it.
          </motion.p>
          
          <motion.div className="flex gap-4 justify-center mb-12 flex-wrap" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" onClick={() => scrollToSection("contact")}>
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div className="flex gap-6 justify-center" variants={itemVariants}>
            {[
              { href: "https://github.com/AkashBotu07", icon: Github },
              { href: " https://www.linkedin.com/in/akash-botu-222911249/", icon: Linkedin },
              { href: "mailto:botuakashkumar4321@gmail.com", icon: Mail }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      
      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 dark:text-slate-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1, duration: 0.6 }
        }}
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
