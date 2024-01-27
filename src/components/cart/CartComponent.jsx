import { CartContext } from '@/providers/cartProvider/CartProvider'
import React, { useContext, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useCart } from '../../providers/cartProvider/CartProvider'
import PaymentModal from '../paymentModal/PaymentModal'
import styles from './CartComponent.module.scss'

const CartComponent = ({
	payWithCard,
	payWithBonus,
	walletBalance,
	bonusPoints,
}) => {
	const { cartItems, removeFromCart } = useCart()
	const [modalOpen, setModalOpen] = useState(false)
	const [paymentSuccess, setPaymentSuccess] = useState(null)
	const { isCartVisible, toggleCartVisibility } = useContext(CartContext)
	// Добавлено состояние для статуса оплаты

	// Считаем общую сумму корзины
	const total = cartItems
		.reduce((acc, item) => acc + item.totalPrice, 0)
		.toFixed(2)

	const handleOpenModal = () => {
		setModalOpen(true) // Открываем модальное окно
	}

	const handlePayment = usedBonusPoints => {
		// Логика оплаты
		const isPaymentSuccessful =
			payWithBonus(usedBonusPoints) && payWithCard(total - usedBonusPoints)
		setPaymentSuccess(isPaymentSuccessful)
		setModalOpen(false) // Закрываем модальное окно после оплаты
	}

	return (
		<div className={`cart ${isCartVisible ? 'visible' : ''}`}>
			<div className={styles['cart-header']}>
				<h2>Shopping Cart</h2>
				<button onClick={toggleCartVisibility} className='btn-header'>
					<IoCloseOutline />
				</button>
			</div>

			{cartItems.map(item => (
				<div key={item.id} className={styles['cart-item']}>
					<div className={styles['cart-item-info']}>
						<img src={`src/assets/${item.imagePath}`} alt='' />
						<p>{item.name}</p>
						<div>
							<span>{item.quantity}кг</span>
							<span>{item.totalPrice}₽</span>
						</div>
					</div>
					<button onClick={() => removeFromCart(item.name)}>
						<IoCloseOutline />
					</button>
				</div>
			))}
			<div className='cart-total'>Total: {total}₽</div>
			<button onClick={handleOpenModal}>Pay</button>
			{modalOpen && (
				<PaymentModal
					total={total}
					bonusPoints={bonusPoints}
					onPay={handlePayment}
				/>
			)}
			{paymentSuccess !== null &&
				(paymentSuccess ? (
					<div>Оплата прошла успешно</div>
				) : (
					<div>Оплата не прошла</div>
				))}
		</div>
	)
}

export default CartComponent
