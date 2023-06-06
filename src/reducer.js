export const initialState = {
    basket: [],
    user: null
}

// Selector (for price)
// basket?.reduce: The reduce method is called on the basket array. The ? is known as the optional chaining operator, which ensures that the code doesn't throw an error if basket is null or undefined. If basket is null or undefined, the reduce operation is skipped, and the default value of 0 is returned.
export const getBAsketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //Logic for adding item to cart
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from cart
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket];

            if (index >= 0) {
                // item exists in basket, remove it..
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product {id: ${action.id}} as its not in basket`
                )
            }
            return {
                ...state,
                basket: newBasket
            };
        default:
            return state;
    }
}

export default reducer;