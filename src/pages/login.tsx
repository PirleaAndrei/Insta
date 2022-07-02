import React, { useEffect, useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { firebaseContext } from '../context/firebase';
import firebase from 'firebase';
import "../i18n"
import { useTranslation } from 'react-i18next';


export default function Login() {
    const {t} = useTranslation()
    const history = useHistory();
    useEffect(() => {
        document.title="Login - Instagram"
      }, []);
      const [email,setEmail]=useState<string>("");
      const [password,setPassword]=useState<string>("");
      const [error,setError]=useState<string>("");
      const isInvalid:boolean=password==="" || email==="";

      const handleLogin = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setEmail("");
            setPassword("");
            if(error instanceof Error){
            setError(error.message);
        }}
    }

      
    
    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-2/5 relative">
           
         
                <img src="/images/login-left.png" alt="iPhone with Instagram app"  />
             
                
            </div>
            <div className="flex flex-col w-2/5">
            <div className="flex flex-col items-center bg-white p-4 border mb-4">
                <h1 className="flex justify-center w-full">
                   
                    <img src="/images/insta-logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                </h1>
                {error && <p className="mb-4 text-xs text-red-500">{error}</p>}

                
                <form onSubmit={handleLogin} >
                    <input
                        aria-label="Enter your email address"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                        type="email"
                        placeholder={t("email")}
                        onChange={({target})=>setEmail(target.value)}
                        value={email}
                    />
                    <input
                        aria-label="Enter your password"
                        className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                        type="password"
                        placeholder={t("password")}
                        onChange={({target})=>setPassword(target.value)}
                        value={password}
                    />
                    <button
                        disabled={isInvalid}
                        type="submit"
                        className={`bg-blue-500 text-white w-full rounded h-8 font-bold${isInvalid && " cursor-not-allowed opacity-50 "}`}
                    >
                        {t("login_btn")}
                        
                    </button>
                </form>
            </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                    {t("not_have_an_account")}{' '}
                        <Link to={ROUTES.SIGN_UP} className="font-bold">
                        {t("sign_up_btn")}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}