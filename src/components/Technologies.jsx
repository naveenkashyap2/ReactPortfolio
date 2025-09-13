
import { RiReactjsLine } from "react-icons/ri"
import {SiMongodb} from "react-icons/si"
import {TbBrandNextjs} from "react-icons/tb"
import {TbBrandTailwind} from "react-icons/tb"
import {TbBrandBootstrap} from "react-icons/tb"
import { TbBrandNodejs}  from "react-icons/tb"
import { SiExpress }    from "react-icons/si"
import {  TbBrandJavascript} from "react-icons/tb"
import { TbBrandTypescript} from "react-icons/tb"
import { SiMysql}   from "react-icons/si"
import { animate, motion }  from "framer-motion"
// import { var } from './../../node_modules/rollup/dist/es/shared/node-entry';

const iconVariants = (duration) =>({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transiton: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration: 1.5}}

       className="my-20 text-center text-4xl">Technologies
       </motion.h2>
      <motion.div
      whileInView={{opacity: 1,x: 0}}
      initial={{opacity: 0, x:-100}}
      transition={{duration:1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
         className="p-4">
           <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(5)}
         className="p-4">
              <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants(4)}
        className="p-4">
            <TbBrandTailwind className="text-7xl text-cyan-500" />

        </motion.div>
        < motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
        className="p-4">
            <TbBrandBootstrap className="text-7xl text-purple-600" />

        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(5)}
         className="p-4">
           <TbBrandNodejs className="text-7xl text-green-500" />
        </motion.div>
        < motion.div 
        initial="initial"
        animate="animate"
        variants={iconVariants(7)}
        className="p-4">
          <SiExpress className="text-7xl text-gray-500" />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
         className="p-4">
           <TbBrandJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        < motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(6)}
         className="p-4">
           <TbBrandTypescript className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2)}
         className="p-4">
            <SiMysql className="text-7xl text-blue-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;


