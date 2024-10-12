import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (

    <div className="relative overflow-y-hidden overflow-x-hidden">
      <div className=" min-h-screen bg-black ">

        <div className="">
          {/* <SignIn path="/sign-in" className=' bg-opacity-20'/> */}
          <div className="flex items-center justify-center py-28 ">
            <SignIn path="/sign-in" fallbackRedirectUrl="/dashboard" className=' bg-opacity-20' />

          </div>
        </div>
      </div>
    </div>
  )
    ;
}