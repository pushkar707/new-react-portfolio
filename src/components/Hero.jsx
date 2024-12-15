import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/hero.jpg';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Pushkar Bansal
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Development Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
              dangerouslySetInnerHTML={{ __html: HERO_CONTENT }}
            >
              {/* {HERO_CONTENT} */}
            </motion.p>
            <a href="https://drive.google.com/file/d/11dhNc4bKf7boKuWwAZaT7e6WfROFLRcD/view">
              <button className="text-xl bg-neutral-800 font-medium text-purple-500 rounded-3xl px-7 py-2 hover:bg-purple-500 hover:text-white duration-300">
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div>
            <div className="flex justify-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={profilePic}
                alt="Pushkar Bansal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
