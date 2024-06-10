import {collection, doc, getDocs, orderBy, query, setDoc} from "firebase/firestore";
import {firestore} from "../../firebase.config";

export const getAllFoodItems = async() =>{
    const items = await getDocs(
        query(collection(firestore, "foodItems")), orderBy("id","desc")
    );
    return items.docs.map((doc)=>doc.data());
};

export const fetchCart = () =>{
    const cartInfo = localStorage.getItem("cartItems")!=="undefined"? JSON.parse(localStorage.getItem("cartItems")):localStorage.clear();
    return cartInfo ? cartInfo : [];
}