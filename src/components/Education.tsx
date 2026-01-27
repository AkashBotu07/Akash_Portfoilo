import { motion } from "motion/react";

export function Education() {
  const educationData = [
    {
      year: "2019",
      title: "Matriculation",
      description: "I completed my matriculation from Green Valley Public School, Rayagada, following the CBSE curriculum.",
      position: "left",
      link:"https://greenvalleypenta.com/"
    },
    {
      year: "2021",
      title: "Intermediate",
      description: "I completed my intermediate education in Science (MPC) from Narayana Jr College, Visakhapatnam, under the BIEAP board.",
      position: "right",
      link:"https://jsdl.in/DT-62MM6IYQ2EA"
    },
    {
      year: "2025",
      title: "Bachelor's Degree",
      description: "Currently pursuing my bachelor's degree in the domain of Computer Science Engineering at GIET UNIVERSITY, Gunupur.",
      position: "left",
      link:"https://www.giet.edu/"
    }
  ];

  return (
    <section id="education" className="py-20 md:py-32  bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 -translate-x-1/2 hidden md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />

            {/* Timeline Items */}
            <div className="space-y-16 md:space-y-24">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${
                    item.position === "left" ? "" : "md:grid-flow-dense"
                  }`}>
                    {/* Year */}
                    <motion.div
                      className={`mb-4 md:mb-0 ${
                        item.position === "left" 
                          ? "md:text-right md:pr-12" 
                          : "md:text-left md:pl-12 md:col-start-2"
                      }`}
                      initial={{ opacity: 0, x: item.position === "left" ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.2 + 0.2 }}
                    >
                      <span className="text-slate-900 dark:text-white text-xl md:text-2xl">
                        {item.year}
                      </span>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      className={`relative ${
                        item.position === "left" 
                          ? "md:pr-12" 
                          : "md:pl-12 md:col-start-1 md:row-start-1"
                      }`}
                      initial={{ 
                        opacity: 0, 
                        x: item.position === "left" ? -50 : 50,
                        scale: 0.9
                      }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.7, 
                        delay: index * 0.2 + 0.3,
                        ease: "easeOut"
                      }}
                      whileHover={{ scale: 1.03, y: -5 }}
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-[2px]">
                        <div className="rounded-3xl p-6 md:p-8 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors h-full">
                          <h3 className="mb-3">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300">
                            {item.description}
                          </p>
                          <a href={item.link} target="_blank">View Details</a>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Node (Circle) */}
                  <motion.div
                    className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg shadow-purple-500/50"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.2 + 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}