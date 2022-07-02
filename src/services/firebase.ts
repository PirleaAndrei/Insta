import firebase from "firebase";
import { firebaseInit,fieldValue } from "../lib/firebase"

export async function doesUsernameExists(username:string){
    const result = await firebaseInit
    .firestore()
    .collection("users")
    .where("username","==",username)
    .get();

    return result.docs.map((user)=>user.data().lenght>0)
} 
export async function getUserByUserId(userId: string | undefined) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('userId', '==', userId)
        .get();
        
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
    
    return user;
}