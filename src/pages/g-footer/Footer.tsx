import Logo from "~/img/DlingLogo.png"

const Footer = () => {

   const comboclass = `my-[.2rem] mt-[.9rem] hover:rounded-[15px] hover:bg-primary-secondary w-fit px-[.4rem] transition-all duration-[300ms]`;

  return (
    <footer className="bg-primary-theme py-[3.2rem] cursor-default text-white">

      <div className="mx-auto w-5/6 gap-16 md:flex justify-center cursor-default">

         <div className="mt-16 basis-1/2 md:mt-0 cursor-default">
            <img src={Logo.src} alt="Logo" className="w-[3.2rem]" />
            <p className="my-5 cursor-default">
               Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality
            </p>
            <p cursor-default>© Dling's Portfolio | All Rights Reserved.</p>
         </div>
         {/* links */}
         <div className="mt-16 basis-1/4 md:mt-0 cursor-default">
            <h4 className="font-bold cursor-default pl-[.4rem]">
               Link
            </h4>
            <ul className="mt-16 basis-1/4 md:mt-0 cursor-default flex flex-col">
               <li className={comboclass}>
                  <a href="#home">Home</a>
               </li>
               <li className={comboclass}>
                  <a href="#aboutme">About Me</a>
               </li>
               <li className={comboclass}>
                  <a href="#myprogress">My Progress</a>
               </li>
            </ul>
         </div>
         
         <div className="mt-16 basis-1/4 md:mt-0 cursor-default">
            <h4 className="font-bold cursor-default">Contact Us</h4>
            <p className="my-5 cursor-default">Purok 38 Poblacion, Malaang, Makilala</p>
            <p cursor-default>+639505661183</p>
         </div>
         
      </div>

    </footer>
  )
}

export default Footer