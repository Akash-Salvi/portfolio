import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center pb-12`}>
          Technologies.
        </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 py-12'>
      {technologies.map((technology) => (
        <div className="group [perspective:1000px] cursor-pointer">
          <div className="relative w-28 h-28 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img className="w-28 h-28 p-2 bg-blue-950 rounded-xl object-cover shadow-xl shadow-black/40" src={technology.icon} alt="" />
            </div>
            <div className="absolute inset-0 w-28 h-28 rounded-xl bg-blue-950 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-28 h-full flex-col items-center justify-center items-center">
                <p className="text-lg font-semibold">{technology.experience}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default SectionWrapper(Tech, "technology");