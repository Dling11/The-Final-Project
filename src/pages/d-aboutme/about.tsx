import React from 'react'
import { SelectedPage } from '~/mylinks/types';
import {FaAward} from "react-icons/fa"
import {TbBooks} from "react-icons/tb"
import {BiHappyHeartEyes} from "react-icons/bi"
import Card from './Card';
import Aboutimage from "~/img/about.jpg"
import { motion } from 'framer-motion';

type Props = {
   setSelectedPage: (value: SelectedPage) => void;
}

const About = ({ setSelectedPage }: Props) => {

   const iconList = [
      {id: 1, icon: <FaAward />, title: "Experience", desc: '3+ Years Hacking'},
      {id: 2, icon: <TbBooks />, title: "Projects", desc: '180+ Completed'},
      {id: 3, icon: <BiHappyHeartEyes />, title: "Clients", desc: '70+ hacked clients'},
  ]
  const classCombo = `flex items-center gap-4 border-hover text-white py-[0.6rem] px-[2.5rem] cursor-pointer rounded-xl hover:-translate-y-2 transition-all duration-[400ms]`;

  return (
    <section 
      className='bg-primary-light'
      id='aboutme'
      >
      
      <motion.div 
        className="container grid grid-about"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
      >
          <motion.div 
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, x:-50 },
               visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="h-fit max-h-[40rem] border-[1rem] border-solid border-white ">
              <img className='hover:scale-105 transition-all duration-[450ms]' src={Aboutimage.src} alt="Haker" />
            </div>
          </motion.div>

          <motion.div 
            className="about-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, x: 50 }, //===> refer to initial="hidden"
               visible: { opacity: 1, x: 0 }, //===> refer to whileInView="visible"
            }}
          >
            <h3 className='basis-3/5 font-montserrat text-3xl font-bold'>
              About Me
            </h3>

            <div className="mt-[3rem] mb-[1.5rem] grid grid-cols-3 gap-[1.5rem] cursor-default">
                {
                  iconList.map((list)=> (
                     <Card
                        key={list.id}
                        icon={list.icon}
                        title={list.title}
                        desc={list.desc}
                     />
                  ))
                }
            </div>

            <motion.p 
              className='mb-4'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                 hidden: { opacity: 0, x: 50 }, //===> refer to initial="hidden"
                 visible: { opacity: 1, x: 0 }, //===> refer to whileInView="visible"
              }}
            >
              This world is rather vast with full of hatred and despair, people sat and eat while the unable can't do anything but pray. In this world where unfairness roams around the world where the weak are lay at the ground and wait.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                 hidden: { opacity: 0, x: 50 }, //===> refer to initial="hidden"
                 visible: { opacity: 1, x: 0 }, //===> refer to whileInView="visible"
              }}
            >
              My name is Ninja hacker I am from what you've seen everywhere and accross the globe if you assume, I am a full stack developer in hacking banks, or stealing from the bad. I am not a manace in this society, it's what they called me, and bla bla bla...Just writing random stuff.
            </motion.p>
            <motion.div 
              className='inline-block mt-6'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                 hidden: { opacity: 0, y: 50 }, //===> refer to initial="hidden"
                 visible: { opacity: 1, y: 0 }, //===> refer to whileInView="visible"
              }}
            >
              <a href="#contactme" className={`${classCombo} hover:bg-primary-secondary-hover bg-primary-secondary`}>Contact Me</a>
            </motion.div>
          </motion.div>
        </motion.div>

    </section>
  )
}

export default About