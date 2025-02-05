import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import React from "react";
import { Badge } from "./badge";
import { type ExperienceItem } from "@/lib/workExp";

export default function ExpAcordionElement({
  exp,
  index,
  hoverId,
}: {
  exp: ExperienceItem;
  index: number;
  hoverId: number | null;
}) {
  return (
    <>
      <div className="absolute -left-[34px] top-1.5 h-4 w-4 rounded-full border-4 animate-pulse border-gray-800 bg-accent"></div>
      <h3 className="text-2xl font-semibold text-purple-300">{exp.title}</h3>
      <p className="mb-1 text-gray-400">{exp.company}</p>
      <p className="mb-2 text-sm text-gray-500">{exp.period}</p>
      <p className="mb-2 text-gray-300">{exp.description}</p>
      <div className="mb-2 flex flex-wrap gap-2">
        {exp.skills.map((skill, skillIndex) => (
          <Badge
            key={skillIndex}
            variant="secondary"
            className="bg-purple-600/30 text-purple-200"
          >
            {skill}
          </Badge>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: hoverId === index ? 1 : 0,
          height: hoverId === index ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="mt-2 overflow-hidden rounded-lg bg-gray-700/30 p-3"
      >
        <h4 className="mb-2 flex items-center font-semibold text-purple-300">
          <ChevronRight className="mr-1 h-4 w-4" />
          Key Achievements
        </h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-300">
          {exp.achievements.map((achievement, achievementIndex) => (
            <li key={achievementIndex}>{achievement}</li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
