import { fetchCart } from "../utils/firebaseFunctions"

const cartInfo = fetchCart();

export const initialState =  {
    foodItems: null,
    cartShow: false,
    cartItems: cartInfo,
}