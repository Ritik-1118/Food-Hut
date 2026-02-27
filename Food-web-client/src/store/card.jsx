import React, { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

// Hydrate initial state from localStorage if available
const loadCartFromStorage = () => {
    try {
        const stored = localStorage.getItem("foodhunt_cart");
        if (stored) {
            const parsed = JSON.parse(stored);
            return {
                cart: parsed.cart || [],
                count: parsed.count || 0,
                itemcount: parsed.itemcount || 0,
            };
        }
    } catch (e) {
        console.warn("Failed to load cart from localStorage", e);
    }
    return { cart: [], count: 0, itemcount: 0 };
};

const initialState = loadCartFromStorage();

const reducer = ( state, action ) => {
    switch ( action.type ) {
        case "ADD_TO_CART":
            // Add logic to increase quantity if item already exists
            const existingItemIndex = state.cart.findIndex(
                ( item ) => item._id === action.payload.data._id
            );
            if ( existingItemIndex !== -1 ) {
                const updatedCart = state.cart.map( ( item ) => {
                    if ( item._id === action.payload.data._id ) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                } );
                return {
                    ...state,
                    cart: updatedCart,
                    count: state.count + 1, // Increment count when adding a new item
                };
            } else {
                return {
                    ...state,
                    cart: [ ...state.cart, { ...action.payload.data, quantity: 1 } ],
                    itemcount: state.itemcount + 1,
                };
            }
        case "REMOVE_ITEM":
            const itemIndex = state.cart.findIndex(
                ( item ) => item._id === action.payload.id
            );
            if ( itemIndex !== -1 ) {
                let updatedCart;
                let newItemCount = state.itemcount;
                if ( state.cart[ itemIndex ].quantity === 1 ) {
                    // If quantity is 1, remove the item and decrement itemcount
                    updatedCart = [
                        ...state.cart.slice( 0, itemIndex ),
                        ...state.cart.slice( itemIndex + 1 ),
                    ];
                    newItemCount--;
                } else {
                    updatedCart = state.cart.map( ( item, index ) => {
                        if ( index === itemIndex ) {
                            return { ...item, quantity: item.quantity - 1 };
                        }
                        return item;
                    } );
                }
                return {
                    ...state,
                    cart: updatedCart,
                    count: state.count - 1,
                    itemcount: newItemCount,
                };
            } else {
                return state;
            }

        case "INCREASE_QUANTITY":
            const increaseItemIndex = state.cart.findIndex(
                ( item ) => item._id === action.payload.id
            );
            if ( increaseItemIndex !== -1 ) {
                const updatedCart = state.cart.map( ( item, index ) => {
                    if ( index === increaseItemIndex ) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                } );
                return {
                    ...state,
                    cart: updatedCart,
                };
            }
            // Return the state without changes if item is not found
            return state;
        default:
            return state;
    }
};

const CartProvider = ( { children } ) => {
    const [ state, dispatch ] = useReducer( reducer, initialState );

    // Persist cart to localStorage on every state change
    useEffect( () => {
        try {
            localStorage.setItem("foodhunt_cart", JSON.stringify(state));
        } catch (e) {
            console.warn("Failed to save cart to localStorage", e);
        }
    }, [ state ] );

    const addToCart = ( data ) => {
        dispatch( { type: "ADD_TO_CART", payload: { data } } );
    };
    const removeToCart = ( id ) => {
        dispatch( { type: "REMOVE_ITEM", payload: { id } } );
    };
    const increaseQuantityById = ( id ) => {
        dispatch( { type: "INCREASE_QUANTITY", payload: { id } } );
    };

    return (
        <CartContext.Provider
            value={ { ...state, addToCart, removeToCart, increaseQuantityById } }
        >
            { children }
        </CartContext.Provider>
    );
};

const UserCart = () => {
    return useContext( CartContext );
};

export { CartProvider, UserCart };
