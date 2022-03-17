import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebaseConf";

const fetchChat = async()  =>{
    const docs= await getDocs(collection(db,"chat"));
    return docs
}
export default fetchChat