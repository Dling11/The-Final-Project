import React from 'react'
import { SelectedPage } from '~/mylinks/types';
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { iconType } from "~/pages/types"
import singlePerson from "~/img/singlePerson3.png"
import { motion } from 'framer-motion';

type Props = {
   setSelectedPage: (value: SelectedPage) => void;
}

const index = ({ setSelectedPage }: Props) => {

   const iconList: Array<iconType> = [
      {id: 1, link: 'https://www.facebook.com/rowelljay.rodriguez', icon: <AiOutlineFacebook />},
      {id: 2, link: 'https://www.youtube.com/watch?v=yxylV1w9jts', icon: <AiOutlineYoutube />},
      {id: 3, link: 'https://www.facebook.com/rowelljay.rodriguez', icon: <AiOutlineTwitter />},
      {id: 4, link: 'https://github.com/Dling11', icon: <AiOutlineGithub />}
   ]

   const classCombo = `flex items-center gap-4 border-hover text-white py-[0.6rem] px-[2.5rem] cursor-pointer rounded-xl hover:-translate-y-2 transition-all duration-[400ms]`;

  return (
    <section
      id='home'
      className='flex justify-center items-center h-screen'
    >

      {/*===========> container <===========*/}
      <motion.div className='md:my-5 md:w-3/5 flex flex-col items-center relative pt-[6rem]'
         onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
         {/* image-profile */}
         <motion.div 
            className='w-72 radius-rem overflow-hidden bg-primary-theme mb-6'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, x:-50 }, //===> refer to initial="hidden"
               visible: { opacity: 1, x: 0 }, //===> refer to whileInView="visible"
            }}
         >
            <img src={singlePerson.src} alt="singlePerson" />
         </motion.div>
         {/*===========> title <===========*/}
         <motion.h3 
            className='basis-3/5 font-montserrat text-3xl font-bold mb-[1rem]'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, x:-50 }, //===> refer to initial="hidden"
               visible: { opacity: 1, x: 0 }, //===> refer to whileInView="visible"
            }}
         >
            My Portfolio
         </motion.h3>
         <motion.p 
            className='w-3/5 text-center mb-6'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, x:-50 }, //===> refer to initial="hidden"
               visible: { opacity: 1, x: 0 }, //===> refer to whileInView="visible"
            }}
         >
            "Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that, in this reality, only pain, suffering, and futility exist."
         </motion.p>

         {/*===========> button <===========*/}
         <motion.div 
            className="flex items-center gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, y: 50 }, //===> refer to initial="hidden"
               visible: { opacity: 1, y: 0 }, //===> refer to whileInView="visible"
            }}
         >
          <a href="#contactme" className={`${classCombo} hover:bg-primary-secondary-hover bg-primary-secondary`}>Contact Me</a>
          <a href="#aboutme" className={`${classCombo} bg-primary-theme`}>About Me</a>
        </motion.div>

         {/*===========> icons <===========*/}
        <motion.div 
            className='absolute left-0 bottom-[8rem] flex flex-col gap-6'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, y: 50 }, //===> refer to initial="hidden"
               visible: { opacity: 1, y: 0 }, //===> refer to whileInView="visible"
            }}
        >
        {
         iconList.map((icon) => (
            <a 
               className='text-2xl grid items-center justify-center w-11 bg-primary-light aspect-square border-radius-icon hover:bg-primary-secondary-hover hover:text-white transform hover:translate-x-2 transition-all duration-[400ms]'
               key={icon.id}
               href={icon.link}
               target="_blank"
            >
               {icon.icon}
            </a>
            ))
         }
        </motion.div>
      </motion.div>

    </section>
  )
}

export default index