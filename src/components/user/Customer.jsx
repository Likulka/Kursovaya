import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../providers/cartProvider/CartProvider' // Путь к вашему CartProvider

const Customer = ({ children }) => {
	const [walletBalance, setWalletBalance] = useState(5000)
	const [bonusPoints, setBonusPoints] = useState(200)
	const { cartItems } = useContext(CartContext)
	const [paymentSuccess, setPaymentSuccess] = useState(false)
	// Используем данные из корзины

	// Обработка платежей и других действий покупателя здесь...

	const payWithCard = amount => {
		if (walletBalance >= amount) {
			setWalletBalance(walletBalance - amount)
			setPaymentSuccess(true) // Устанавливаем успех оплаты
			return true
		}
		setPaymentSuccess(false) // Устанавливаем неуспех оплаты
		return false
	}

	const payWithBonus = amount => {
		if (bonusPoints >= amount) {
			setBonusPoints(bonusPoints - amount)
			setPaymentSuccess(true) // Устанавливаем успех оплаты
			return true
		}
		setPaymentSuccess(false) // Устанавливаем неуспех оплаты
		return false
	}

	// Можете добавить логику для частичной оплаты здесь...

	// При необходимости отслеживаем изменения в корзине
	useEffect(() => {
		// Например, обновляем общую стоимость или другие данные покупателя
	}, [cartItems])

	// Интерфейс для детей (например, кнопки оплаты и отображение баланса)
	return (
		<div>
			{/* Здесь может быть интерфейс пользователя для покупателя */}
			{children({
				payWithCard,
				payWithBonus,
				walletBalance,
				bonusPoints,
				paymentSuccess,
			})}
		</div>
	)
}

export default Customer
