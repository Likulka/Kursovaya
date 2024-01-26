import { createContext, useContext, useState } from 'react'

// Создаем контекст корзины
export const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([])

	const addToCart = product => {
		setCartItems([...cartItems, product])
	}

	const removeFromCart = productId => {
		setCartItems(cartItems.filter(item => item.id !== productId))
	}

	// Добавьте любые другие действия, которые вам нужны для корзины

	return (
		<CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	)
}
