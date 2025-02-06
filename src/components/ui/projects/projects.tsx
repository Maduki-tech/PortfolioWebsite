"use client";

import { motion } from "framer-motion";
import { GithubIcon, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/projects";

export default function ProjectSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8 text-white"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.h1
          className="mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-6xl font-bold text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="flex h-full flex-col overflow-hidden border-gray-700 bg-gray-800/50 backdrop-blur-md">
                <CardContent className="flex flex-grow flex-col p-6">
                  <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transform transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold text-purple-300">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-grow text-gray-300">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-purple-600/30 text-purple-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 transition-colors hover:text-purple-300"
                    >
                      <GithubIcon className="h-6 w-6" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 transition-colors hover:text-purple-300"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      height: hoveredIndex === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden"
                  >
                    <h4 className="mb-2 font-semibold text-purple-300">
                      Key Features:
                    </h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-gray-300">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
