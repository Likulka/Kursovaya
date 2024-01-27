import { createContext, useContext, useState } from 'react'

// Создаем контекст корзины
export const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([])
	const [isCartVisible, setIsCartVisible] = useState(false)

	const addToCart = newProduct => {
		setCartItems(prevCartItems => {
			// Проверяем, есть ли уже такой продукт в корзине
			const existingProduct = prevCartItems.find(
				item => item.name === newProduct.name
			)

			if (existingProduct) {
				// Если продукт уже есть, увеличиваем его количество
				return prevCartItems.map(item =>
					item.name === newProduct.name
						? { ...item, quantity: item.quantity + newProduct.quantity }
						: item
				)
			} else {
				// Если нет, добавляем новый продукт
				return [...prevCartItems, newProduct]
			}
		})
	}

	const removeFromCart = name => {
		setCartItems(cartItems.filter(item => item.name !== name))
	}

	const toggleCartVisibility = () => {
		setIsCartVisible(!isCartVisible)
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				isCartVisible,
				toggleCartVisibility,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
