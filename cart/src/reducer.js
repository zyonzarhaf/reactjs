import { CLEAR_CART, REMOVE_ITEM, CHANGE_QTD, GET_TOTAL, LOADING, DISPLAY_DATA } from './actions'; 

const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] };

    } else if (action.type === REMOVE_ITEM) {
        return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) }

    } else if (action.type === CHANGE_QTD) {
        return { ...state, cart: state.cart.map((item) => {
            
            if (item.id === action.payload.id) {
                
                if (action.payload.type === 'increase') {
                    return { ...item, amount: item.amount + 1 }
                
                } else if (action.payload.type === 'decrease') {
                    
                    if (item.amount < 1) {
                        return {...item}
                    
                    } else {
                        return { ...item, amount: item.amount - 1 }
                    }
                }
            
            } else {
                return {...item}
            }
        })}

    } else if (action.type === GET_TOTAL) {
       let { total, amount } = state.cart.reduce((accumulator, item) => 
       {
            const {price, amount} = item
            accumulator.total += (price * amount)
            accumulator.amount += amount
            return accumulator  //this is whats being returned from reduce's callback function
        }, 
        { 
            total: 0,  //this
            amount: 0  // and this is whats being returned from the reduce() method
        })
        total = parseFloat(total.toFixed(2))
        return { ...state, total, amount }

    } else if (action.type === LOADING) {
        return { ...state, loading: true }
    
    } else if (action.type === DISPLAY_DATA) {
        return { ...state, loading: false, cart: action.payload.cart}
    
    } else {
        return state
    }
};

export default reducer;