/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 mx-auto ${styles.paddingX} ml-10 flex flex-row lg:items-center items-start lg:top-[0px] top-[120px] gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#2e73ff]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>

        <div className="sm:mt-0 mt-8">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#2e73ff]'>Akash Salvi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Learner | Coder | Explorer
          </p>
        </div>
      </div>

      <div className="absolute right-0 lg:mr-20 xs:mt-16  top-[-5] lg:w-6/12 sm:w-[100%] xs:w-[100%] w-[140%] h-full">
      <ComputersCanvas />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;