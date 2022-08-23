import React, { useContext, createContext, ReactNode, useState } from "react"
import ShoppingCart from "../components/ShoppingCart/shopping-cart"

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContextProps = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartItems: CartItem[]
    cartQuantity: number
    openCart: Function
}

type CartItem = {
    id: number,
    quantity: number
}

const ShoppingCartContext = createContext({} as  ShoppingCartContextProps);

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const cartQuantity = cartItems.length;

    const getItemQuantity = (id: number) => {
        console.log(cartItems);
        console.log(id);
        return cartItems?.find(item => item?.id === id)?.quantity || 0;
    }

    const openCart = () => {
        setIsOpen(!isOpen);
    }

    const increaseCartQuantity = (id: number) => {
        setCartItems((currItems): any => {
            if (currItems.find(item => item.id === id) === undefined) {
                return [...currItems, {id, quantity: 1}];
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } 
                    return item;
                })
            }
        })
    }

    const decreaseCartQuantity = (id: number) => {
        setCartItems((currItems): any => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id: number) => {
        setCartItems(currlItems => {
            return currlItems.filter(item => item.id !== id);
        })
    }

    return (
        <ShoppingCartContext.Provider value=
            {
                {
                    getItemQuantity,
                    increaseCartQuantity,
                    decreaseCartQuantity,
                    removeFromCart,
                    cartQuantity,
                    cartItems,
                    openCart
                }
            }
        >
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
} 