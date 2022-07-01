import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import firebase from 'firebase';

export default function SignUp() {
    useEffect(() => {
        document.title="SignUp - Instagram"
      }, []);
      
      const[username,setUsername]=useState<string>("");
      const[fullName,setFullName]=useState<string>("");
      const[email,setEmail]=useState<string>("");
      const[password,setPassword]=useState<string>("");
      const[error,setError]=useState<string>("");
      const isInvalid=username===""|| fullName==="" || email==="" || password ==="";

      const handleSignUp = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            
        } catch (error) {
            setFullName("");
            setEmail("");
            setPassword("");
            if(error instanceof Error){
            setError(error.message);}
        }
    }
    return (
        <div className="container flex mx-auto max-w-xs items-center h-screen">
            <div className="flex flex-col">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/insta-logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    
                    <form>
                        <input
                            aria-label="Enter your username"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={({ target }) => setUsername(target.value.toLowerCase())}
                        />
                        <input
                            aria-label="Enter your full name"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            placeholder="Full name"
                            value={fullName}
                            onChange={({ target }) => setFullName(target.value)}
                        />
                        <input
                            aria-label="Enter your email address"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value.toLowerCase())}
                        />
                        <input
                            aria-label="Enter your password"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${ isInvalid && 'cursor-not-allowed opacity-50'
                        }`}>
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        Have an account?{` `}
                        <Link to={ROUTES.LOGIN} className="font-bold text-blue">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}