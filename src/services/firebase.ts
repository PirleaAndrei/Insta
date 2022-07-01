import { firebaseInit,fieldValue } from "../lib/firebase"

export async function doesUsernameExists(username:string){
    const result = await firebaseInit
    .firestore()
    .collection("users")
    .where("username","==",username)
    .get();

    return result.docs.map((user)=>user.data().lenght>0)
} 