import { motion } from 'framer-motion';
import React from 'react'
import { SelectedPage } from '~/mylinks/types';
import { useForm } from "react-hook-form"; 
import contactmonitor from "~/img/monitor.png"

type Props = {
   setSelectedPage: (value: SelectedPage) => void;
}
function Contact({ setSelectedPage }: Props) {

   const inputStyles = `focus:outline-none w-full rounded-lg bg-primary-secondary px-5 py-3 placeholder-white mb-5 hover:bg-primary-secondary-hover text-black`;

   const {
      register,
      trigger,
      formState: { errors }
   } = useForm();

   const onSubmit = async (e:any) => {
      const isValid = await trigger();
      if(!isValid) {
         e.preventDefault();
      }
   }

  return (
    <section
      id='contactme'
      className="mx-auto w-full pt-[10rem] pb-32 bg-primary-light"
    >
      <motion.div 
         className='w-5/6 mx-auto sm:px-[.5rem] md:px-[4rem]'
         onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
      >
         {/* Header */}
         <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
               hidden: { opacity: 0, x:-50 },
               visible: { opacity: 1, x: 0 },
            }}
         >
            <h3 className='basis-3/5 font-montserrat text-3xl font-bold'>
               Contact Me
            </h3>
            <p className="my-5">
               If you are interested on my works, feel free to Contact me anytime I would like to hear your soft lewd voice. I- mean... Thank you.
            </p>
         </motion.div>
            {/* Form and image */}
            <div className="mt-10 justify-between gap-8 md:flex items-center">
               <motion.div
                  className="mt-10 basis-3/5 md:mt-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                     hidden: { opacity: 0, y: 50 },
                     visible: { opacity: 1, y: 0 },
                  }}
               >

                  <form
                     target="_blank"
                     onSubmit={onSubmit}
                     action="https://formsubmit.co/9242eb6eda88ffbb4921212a67203ce6" //===> incase you forgot => your email- naked link
                     method="POST"
                  >

                     {/*=======> name input <======= */}
                     {errors.name && (
                        <p className="mt-1 text-[#dd0808]">
                           {errors.name.type === "required" && "This field is required."}
                           {errors.name.type === "maxLength" && "Name max Length must atleast 10 characters."}
                        </p>
                     )} 
                     <input
                        className={inputStyles}
                        type="text"
                        placeholder="NAME"
                        {...register("name", {
                           required: true,
                           maxLength: 10,
                        })}
                     />

                     {/*=======> email input <======= */}
                     {errors.email && (
                        <p className="mt-1 text-[#dd0808]">
                           {errors.email.type === "required" && "This field is required."}
                           {errors.email.type === "pattern" && "Invalid Email Address - BAKA"}
                        </p>
                     )}
                     <input
                        className={inputStyles}
                        type="text"
                        placeholder="EMAIL"
                        {...register("email", {
                           required: true,
                           pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, //===> dont get confuse this all means related in email
                        })}
                     />

                     {/*=======> message textarea <======= */}
                     {errors.message && (
                        <p className="mt-1 text-[#dd0808]">
                           {errors.message.type === "required" && "This field is required."}
                           {errors.message.type === "maxLength" && "max Length is 50 character."}
                        </p>
                     )} 
                     <textarea
                        className={`resize-none ${inputStyles}`}
                        rows={4}
                        cols={50}
                        placeholder="MESSAGE"
                        {...register("message", {
                           required: true,
                           maxLength: 50,
                        })}
                     />


                     <button
                        type="submit"
                        className="flex items-center gap-4text-white py-[0.6rem] px-[2.5rem] cursor-pointer rounded-xl hover:-translate-y-2 transition-all duration-[400ms] bg-primary-theme text-white hover:bg-primary-theme-hover"
                     >
                        SUBMIT
                     </button>
                  </form>

               </motion.div>

               <motion.div
                  className="relative mt-16 basis-2/5 md:mt-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                     hidden: { opacity: 0, y: 50 }, //===> refer to initial="hidden"
                     visible: { opacity: 1, y: 0 }, //===> refer to whileInView="visible"
                  }}
               >
                  <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                     <img 
                        className="w-full rounded-3xl"
                        src={contactmonitor.src} 
                        alt="monitor-from-undraw" 
                     />
                  </div>
               </motion.div>
            </div>
      </motion.div>

    </section>
  )
}

export default Contact