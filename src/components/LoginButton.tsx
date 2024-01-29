'use client';
import { signIn } from "next-auth/react";

export default function LoginButton(){
  return(
    <button 
        onClick={() => signIn('google')}
        className="bg-gray-300 px-4 py-2 ml-2 rounded-md" >
          Login
    </button>  
  );
}