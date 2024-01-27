import { useState } from 'react' // Импортируем useState
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useCart } from '../../providers/cartProvider/CartProvider.jsx'
import { useCustomer } from '../../providers/customerProvider/CustomerProvider'
import styles from './ProductComponent.module.scss'

const ProductComponent = ({ name, basePrice, type, imagePath }) => {
	console.log('product')
	const { addToCart } = useCart()
	const [quantity, setQuantity] = useState(1) // Начальное состояние веса
	const customer = useCustomer() // Получаем доступ к данным покупателя

	// Вычисляем итоговую цену
	const totalPrice = (basePrice * quantity).toFixed(2)
	// Функция для увеличения веса
	const increaseWeight = () => {
		if (type === 'шт') {
			setQuantity(quantity + 1) // Увеличиваем на 1 штуку
		} else {
			setQuantity(parseFloat((quantity + 0.25).toFixed(2))) // Увеличиваем вес
		}
	}

	// Функция для уменьшения веса
	const decreaseWeight = () => {
		if (type === 'шт' && quantity > 1) {
			setQuantity(quantity - 1) // Уменьшаем на 1 штуку
		} else if (quantity > 0.25) {
			setQuantity(parseFloat((quantity - 0.25).toFixed(2))) // Уменьшаем вес
		}
	}

	const handleAddToCart = () => {
		// ... создаем объект продукта ...
		name
		let product = {
			name,
			quantity,
			totalPrice: parseFloat(totalPrice),
			imagePath,
		}

		addToCart(product)
	}

	return (
		<div className='product'>
			<div className={styles['product-body']}>
				<div>
					<img
						className={styles.image}
						src={`src/assets/${imagePath}`}
						alt='product image'
					/>
				</div>
				<p className='name'>{name}</p>
				<p className='price'>{totalPrice}₽</p>
				<div className={styles['weight-switcher']}>
					<button className='btn' onClick={decreaseWeight}>
						<AiOutlineMinus />
					</button>
					<span>
						{quantity}
						{type}
					</span>
					<button className='btn' onClick={increaseWeight}>
						<AiOutlinePlus />
					</button>
				</div>
				<div className={styles['btn-container']}>
					<button
						className={`${styles['add-btn']} btn`}
						onClick={() => handleAddToCart()}
					>
						Add
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductComponent
