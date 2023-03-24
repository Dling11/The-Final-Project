import { ClassType } from "../types"
import image1 from "~/img/a-first.png"
import image2 from "~/img/b-second.png"
import image3 from "~/img/c-third.png"
import image4 from "~/img/d-fourth.png"
import image5 from "~/img/e-fifth.png"

export const myprogress: Array<ClassType> = [
   {
      name: "My First Portfolio",
      description: "This Portfolio is styled with the anime that I liked which is Onepiece, This is created using plane Html, Css and Javascript.",
      image: image1.src
   },
   {
      name: "My Second Portfolio",
      description: "This Portfolio, Is where I started to learn more about React, Which I've used React Routers and more anime reference.",
      image: image2.src
   },
   {
      name: "My Third Project",
      image: image3.src
   },
   {
      name: "My Fourth Project",
      description: "This project was created using React, this is were I manage to learn more about animations and loading sequence. This is the first Portfolio which i admired the most.",
      image: image4.src
   },
   {
      name: "The Final Project",
      description: "This Project is one of the design I choose to apply in my Web-Delopment Training. My Senior Supervisor: Sir Michael Gloria is the one who is guiding me and teaching about the fundamental of web-development",
      image: image5.src
   }
]