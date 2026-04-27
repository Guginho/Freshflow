"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const baseVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "section" | "div" | "article" | "li";
  id?: string;
};

export function MotionSection({
  children,
  className,
  delay = 0,
  as = "div",
  id,
}: Props) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

export const fadeUp = baseVariants;
