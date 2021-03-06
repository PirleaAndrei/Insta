import React,{useState,useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import firebase from 'firebase';
import { doesUsernameExists } from '../services/firebase';
import "../i18n"
import { useTranslation } from 'react-i18next';

export default function SignUp() {
const {t} = useTranslation()

    useEffect(() => {
        document.title="SignUp - Instagram"
      }, []);
      
      const[username,setUsername]=useState<string>("");
      const[fullName,setFullName]=useState<string>("");
      const[email,setEmail]=useState<string>("");
      const[password,setPassword]=useState<string>("");
      const[error,setError]=useState<string>("");
      const isInvalid=username===""|| fullName==="" || email==="" || password ==="";
      const history=useHistory();

      const handleSignUp = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const doesUsernameExistsResult = await doesUsernameExists(username);
        if (doesUsernameExistsResult && doesUsernameExistsResult.length === 0) {
        try {
            const createdUserResult = await firebase.auth().createUserWithEmailAndPassword(email, password);
            if(createdUserResult.user!=null)
            await createdUserResult.user.updateProfile({
                displayName: username
            });
            if(createdUserResult.user!=null)
            await firebase.firestore().collection('users').add({
                userId: createdUserResult.user.uid,
                username: username.toLowerCase(),
                fullName,
                emailAddress: email.toLowerCase(),
                following: [],
                followers: [],
                dateCreated: Date.now()
            })
            history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setFullName("");
            setEmail("")
            setPassword("")
            setError("")
            if(error instanceof Error){
            setError(error.message);}
        }
    }
    else{
        setError("This username already exists,please try another one !")
    }
}
    return (
        <div className="container flex mx-auto max-w-xs items-center h-screen">
            <div className="flex flex-col">
                <div className="flex flex-col items-center bg-white p-4 border mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/insta-logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-500 text-center">{error}</p>}
                    <form onSubmit={handleSignUp}>
                        <input
                            aria-label="Enter your username"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            placeholder={t("username")}
                            value={username}
                            onChange={({ target }) => setUsername(target.value.toLowerCase())}
                        />
                        <input
                            aria-label="Enter your full name"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="text"
                            placeholder={t("full_name")}
                            value={fullName}
                            onChange={({ target }) => setFullName(target.value)}
                        />
                        <input
                            aria-label="Enter your email address"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="email"
                            placeholder={t("email")}
                            value={email}
                            onChange={({ target }) => setEmail(target.value.toLowerCase())}
                        />
                        <input
                            aria-label="Enter your password"
                            className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
                            type="password"
                            placeholder={t("password")}
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${ isInvalid && 'cursor-not-allowed opacity-50'
                        }`}>
                            
                            {t("sign_up_btn")}
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                    <p className="text-sm">
                        {t("have_an_account")}{` `}
                        <Link to={ROUTES.LOGIN} className="font-bold text-blue">
                          
                         { t("login_btn")}
                      </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}