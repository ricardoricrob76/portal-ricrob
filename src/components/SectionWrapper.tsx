"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export default function SectionWrapper({ id, className, children, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={cn("py-20 px-4 sm:px-6", className)}
    >
      {children}
    </motion.section>
  );
}
