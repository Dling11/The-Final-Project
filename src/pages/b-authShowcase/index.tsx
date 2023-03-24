import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

const AuthShowcase: React.FC = () => {
   
   const router = useRouter();
   const { data: sessionData } = useSession();
   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
     undefined, // no input
     { enabled: sessionData?.user !== undefined }
   );

   return (

     <div className="flex items-center justify-center gap-4">
       <p className="text-center text-2xl text-white">
         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
         {secretMessage && <span> - {secretMessage}</span>}
       </p>
       <button
         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white transition hover:bg-white/20"
         onClick={sessionData ? () => void signOut() : () => void signIn()}
       >
         {sessionData ? "Sign out" : "Sign in"}
       </button>
       {!sessionData && (
         <button
           className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white transition hover:bg-white/20"
           onClick={() => void router.push("/register")}
         >
           Sign up
         </button>
       )}
     </div>
   );
 };

 export default AuthShowcase