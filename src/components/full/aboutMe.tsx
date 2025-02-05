"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Code, Coffee, User, Zap } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/lib/workExp";
import ExpAcordionElement from "../ui/ExpAcordionElement";

const skillsAndInterests = [
  { icon: <Code className="h-6 w-6" />, text: "Full-stack Development" },
  { icon: <Coffee className="h-6 w-6" />, text: "UI/UX Design" },
  { icon: <Zap className="h-6 w-6" />, text: "Performance Optimization" },
  { icon: <User className="h-6 w-6" />, text: "User-Centered Design" },
];

export default function InteractiveAboutMe() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      id="aboutme"
      ref={containerRef}
      className="min-h-screen overflow-hidden bg-gradient-to-br from-background to-slate-950 p-8"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.h1
          className="mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-6xl font-bold text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Me
        </motion.h1>

        <div className="grid gap-12 lg:grid-cols-[2fr,3fr]">
          {/* About Me Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="overflow-hidden backdrop-blur-md">
              <CardContent className="p-6">
                <div className="mb-6 flex flex-col items-center">
                  <div className="relative mb-4 h-40 w-40">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="David Schlueter"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full border-4 border-accent"
                    />
                  </div>
                  <h2 className="mb-1 text-3xl font-bold">David Schlueter</h2>
                  <p className="text-xl text-purple-400">
                    Full-stack Developer
                  </p>
                </div>
                <p className="mb-6 text-lg leading-relaxed">
                  Passionate full-stack developer with a knack for creating
                  elegant, efficient, and user-friendly web applications. With a
                  background in [Your Background], I bring a unique perspective
                  to every project.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {skillsAndInterests.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center rounded-lg  p-3 transition-all hover:bg-purple-600/50"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      {item.icon}
                      <span className="ml-2 text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Work Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="backdrop-blur-md">
              <CardContent className="p-6">
                <h2 className="mb-6 flex items-center text-3xl font-bold">
                  <Briefcase className="mr-2 text-purple-400" />
                  Work Experience
                </h2>
                <div className="relative ml-4 border-l-2 border-accent pl-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="relative mb-10 last:mb-0"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                    >
                      <ExpAcordionElement
                        exp={exp}
                        index={index}
                        hoverId={hoveredIndex}
                      />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
