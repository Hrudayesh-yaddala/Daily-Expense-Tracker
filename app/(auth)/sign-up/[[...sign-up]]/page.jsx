import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div>
      <div className="bg-[url('/images/bagimg.jpg')] min-h-screen bg-clip-padding">
       <div className="flex items-center justify-center py-10">
       <SignUp path="/sign-up"/>
       </div>
       

      </div>
    </div>
  );
}