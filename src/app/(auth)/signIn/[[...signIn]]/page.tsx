"use client"
import { SignIn} from '@clerk/nextjs'

export default function SignInPage() {

    return (
      <div className='flex justify-center items-center h-[100vh]'>
        <SignIn />
      </div>
    )
    

}