import { useState } from 'react'
import { useCart } from '../../providers/cartProvider/CartProvider'
import PaymentModal from '../paymentModal/PaymentModal'

const CartComponent = ({
	payWithCard,
	payWithBonus,
	walletBalance,
	bonusPoints,
	setUseBonusPoints,
	paymentSuccess,
}) => {
	// Получаем товары из корзины через контекст
	const { cartItems, removeFromCart } = useCart()
	const [modalOpen, setModalOpen] = useState(false)
	const [useBonus, setUseBonus] = useState(0)

	// Считаем общую сумму корзины
	const total = cartItems
		.reduce((acc, item) => acc + item.totalPrice, 0)
		.toFixed(2)

	const handleOpenModal = () => {
		setModalOpen(true) // Открываем модальное окно
	}

	const handlePayment = () => {
		// Оплата частью бонусами, частью картой
		if (payWithBonus(useBonus) && payWithCard(total - useBonus)) {
			console.log('Payment Successful')
		}
		setModalOpen(false) // Закрываем модальное окно после оплаты
	}
	return (
		<div className='cart'>
			<h2>Shopping Cart</h2>
			{cartItems.map((item, index) => (
				<div key={index} className='cart-item'>
					<p>{item.name}</p>
					<p>{item.quantity}кг</p>
					<p>{item.totalPrice}₽</p>
					<button onClick={() => removeFromCart(item.id)}>remove</button>
				</div>
			))}
			<div className='cart-total'>Total: {total}₽</div>
			<button onClick={handleOpenModal}>Pay</button>
			{modalOpen && (
				<PaymentModal
					total={total}
					useBonus={useBonus}
					setUseBonus={setUseBonus}
					onPay={handlePayment}
				/>
			)}
			<button onClick={handlePayment}>Оплатить</button>
			{paymentSuccess ? (
				<div>Оплата прошла успешно</div>
			) : (
				<div>Оплата не прошла</div>
			)}
		</div>
	)
}

export default CartComponent
