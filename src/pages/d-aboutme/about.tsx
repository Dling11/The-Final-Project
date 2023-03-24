import React from 'react'
import { SelectedPage } from '~/mylinks/types';
import {FaAward} from "react-icons/fa"
import {TbBooks} from "react-icons/tb"
import {BiHappyHeartEyes} from "react-icons/bi"
import Card from './Card';
import Aboutimage from "~/img/about.jpg"
type Props = {
   selectedPage: SelectedPage;
   setSelectedPage: (value: SelectedPage) => void;
}

const About = ({ selectedPage, setSelectedPage }: Props) => {

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
      
      <div className="container grid grid-about">
          <div className="mt-10">
            <div className="h-fit max-h-[40rem] border-[1rem] border-solid border-white ">
              <img className='hover:scale-105 transition-all duration-[450ms]' src={Aboutimage.src} alt="Haker" />
            </div>
          </div>

          <div className="about-right">
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

            <p className='mb-4'>
              This world is rather vast with full of hatred and despair, people sat and eat while the unable can't do anything but pray. In this world where unfairness roams around the world where the weak are lay at the ground and wait.
            </p>
            <p>
              My name is Ninja hacker I am from what you've seen everywhere and accross the globe if you assume, I am a full stack developer in hacking banks, or stealing from the bad. I am not a manace in this society, it's what they called me, and bla bla bla...Just writing random stuff.
            </p>
            <div className='inline-block mt-6'>
              <a href="#contactme" className={`${classCombo} hover:bg-primary-secondary-hover bg-primary-secondary`}>Contact Me</a>
            </div>
          </div>
        </div>

    </section>
  )
}

export default About