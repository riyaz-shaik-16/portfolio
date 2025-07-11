import Terminal from "./Terminal";
import { motion } from "framer-motion";
import { Download } from "lucide-react";


const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        ease: "easeOut",
      },
    },
  };

  const leftSideVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightSideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  const secondaryButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      backgroundColor: "rgba(124, 58, 237, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <div className="flex">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-45 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-background text-foreground gap-10"
      >
        {/* Left Side */}
        <motion.div
          variants={leftSideVariants}
          className="flex flex-col gap-6 max-w-xl text-center md:text-left"
        >
          <motion.h1
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold overflow-hidden"
          >
            Hey, I'm{" "}
            <motion.span
              variants={nameVariants}
              whileHover={{
                scale: 1.1,
                color: "#8b5cf6",
                transition: { duration: 0.3 },
              }}
              className="text-violet-600 inline-block cursor-default"
            >
              Riyaz
            </motion.span>
          </motion.h1>
          <motion.h1 className="text-3xl italic">
            Full Stack Developer
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-base md:text-lg text-muted-foreground"
          >
            I don't build for show. I build to breathe. Sometimes what I make
            breaks. But I fix it. That's how I learn.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start"
          >
            <motion.a
              href="#projects"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-violet-600 text-white px-6 py-2 rounded-xl shadow hover:bg-violet-700 transition text-sm relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-600 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <button onClick={j} className="relative z-10 p-3 flex justify-center items-center gap-2"> <Download className="w-7 h-7" />
  <p className="text-xl">Download Resume</p></button>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>
      <Terminal />
    </div>
  );
};

export default Hero;
