import { motion } from 'framer-motion';
import { SelectedPage } from '~/mylinks/types';
import { myprogress } from "~/pages/e-progress/MyProgress"
import  MyWebsite  from '~/pages/e-progress/MyWebsite';
import { ClassType } from "~/pages/types"
import React from 'react'

type Props = {
   setSelectedPage: (value: SelectedPage) => void;
}

const Progress = ({ setSelectedPage }: Props) => {

  return (
    <section
      id='myprogress'
    >
            <motion.div
               onViewportEnter={() => setSelectedPage(SelectedPage.MyProgress)}
            >

         <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, x:-50 }, //===> refer to initial="hidden"
               visible: { opacity: 1, x: 0 }, //===> refer to whileInView="visible"
            }}
         >
            <div className="md:w-3/5">
               <h3 className='basis-3/5 font-montserrat text-3xl font-bold'>
                  Junior Progress
               </h3>
               <p className="py-5">
                  Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality.
               </p>
            </div>
         </motion.div>

         <motion.div 
            className="mt-10 h-[300px] w-full overflow-x-auto overflow-y-hidden scrollbar"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, x: -50 }, //===> refer to initial="hidden"
               visible: { opacity: 1, x: 0 }, //===> refer to whileInView="visible"
            }}
         >
            <ul className="w-[2200px] whitespace-nowrap">
               {myprogress.map((item: ClassType, index) => (
                  <MyWebsite
                     key={`${item.name}-${index}`}
                     name={item.name}
                     description={item.description}
                     image={item.image}
                  />
               ))}
            </ul>
         </motion.div>
      </motion.div>
    </section>
  )
}

export default Progress