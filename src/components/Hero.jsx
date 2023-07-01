/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import { styles } from "../styles";
import Tilt from 'react-parallax-tilt';
import { akashsalvi } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 mx-auto ${styles.paddingX} sm:ml-10 ml-0 flex flex-row lg:items-center items-start lg:top-[0px] top-[120px] gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#2e73ff]' />
          <div className='w-1 sm:h-80 h-60 blue-gradient' />
        </div>

        <div className="sm:mt-0 mt-8 sm:w-[50%] w-full">
          <p className={`${styles.heroSubText} mt-2 text-white-100 px-4 py-2 blue-gradient rounded-full w-fit`}>
            Hi, There 👋 Welcome to My Site
          </p>
          <h1 className={`${styles.heroHeadText} text-white pl-4`}>
            I'm <span className='text-[#2e73ff]'>Akash Salvi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 pl-4`}>
            I’m a software developer with a passion for building amazing
            websites.
          </p>
        </div>
      </div> 
      <div className="w-full h-full flex justify-center sm:justify-end sm:items-center items-end">
            <Tilt className="sm:mr-[10%] mr-0 max-w-lg 
                transition-all duration-300 rounded-lg  rounded-bl-[50%] rounded-tr-[50%]  blue-gradient 
                p-2 sm:mb-0 mb-[160px]" >
            <img 
                className="h-[260px] lg:h-[400px] 2xl:h-[520px] rounded-lg  rounded-bl-[50%] rounded-tr-[50%]" 
                src={akashsalvi}
                alt="image description"
              />
              </Tilt>
      </div>
      <div className='absolute bottom-10 sm:bottom-20 w-full flex justify-center items-center'>
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