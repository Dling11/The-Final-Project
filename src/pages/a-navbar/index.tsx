import AuthShowcase from "~/pages/b-authShowcase";
import Rowell from "~/img/DlingLogo.png"
import Link from "./Link";
import { SelectedPage } from "~/mylinks/types";

type Props = {
   selectedPage: SelectedPage;
   setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {

  return (
    <nav>
      
      <div className="fixed top-0 z-30 w-full py-6 flex items-center justify-between bg-primary-theme h-[5rem]">
         <div className="mx-auto w-5/6 flex items-center justify-between">
            <div className="flex items-center justify-between w-full gap-20">

               {/*==========> logo <========== */}
               <div className="basis-12">
                  <img src={Rowell.src} alt="Dlings"/>
               </div>
               <div className="flex items-center justify-between w-full">

            {/*==========> first div links <========== */}
                  <div className="flex items-center justify-between gap-8 text-sm text-white">
                  <Link 
                     page="Home" 
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                  />
                  <Link 
                     page="About Me" 
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                  />
                  <Link 
                     page="My Progress" 
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                  />
                  <Link 
                     page="Contact Me" 
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                  />
                  </div>
            {/*==========> second-kuya ekoy form <========== */}
                  <div>
                     <AuthShowcase />
                  </div>

               </div>



            </div>
         </div>
      </div>

    </nav>
  )
}

export default Navbar