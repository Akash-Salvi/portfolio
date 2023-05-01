import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Animation({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const transition = { duration: 2, ease: "easeInOut" };
  return (
    <section ref={ref}>
      <motion.div
        animate={{ scale: 1, opacity: isInView ? 1 : 0, transition }}
        initial={{ scale: 0 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
