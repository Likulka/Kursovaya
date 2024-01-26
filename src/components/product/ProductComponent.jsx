import { useState } from 'react' // Импортируем useState
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { uuidv7 } from 'uuidv7'
import { useCart } from '../../providers/cartProvider/CartProvider.jsx'
import { useCustomer } from '../../providers/customerProvider/CustomerProvider'

const ProductComponent = ({ name, basePrice, type }) => {
	const { addToCart } = useCart()
	const [quantity, setQuantity] = useState(1) // Начальное состояние веса
	const customer = useCustomer() // Получаем доступ к данным покупателя

	// Вычисляем итоговую цену
	const totalPrice = (basePrice * quantity).toFixed(2)
	// Функция для увеличения веса
	const increaseWeight = () => {
		if (type === 'unit') {
			setQuantity(quantity + 1) // Увеличиваем на 1 штуку
		} else {
			setQuantity(parseFloat((quantity + 0.25).toFixed(2))) // Увеличиваем вес
		}
	}

	// Функция для уменьшения веса
	const decreaseWeight = () => {
		if (type === 'unit' && quantity > 1) {
			setQuantity(quantity - 1) // Уменьшаем на 1 штуку
		} else if (quantity > 0.25) {
			setQuantity(parseFloat((quantity - 0.25).toFixed(2))) // Уменьшаем вес
		}
	}

	const handleAddToCart = () => {
		// ... создаем объект продукта ...
		let product = {
			id: uuidv7(),
			name,
			quantity,
			totalPrice: parseFloat(totalPrice),
		}

		addToCart(product)
	}

	return (
		<div className='product'>
			<div className='product-body'>
				<img src='' alt='product image' />
				<p className='name'>{name}</p>
				<p className='price'>{totalPrice}₽</p>
				<div className='weight-switcher'>
					<button onClick={decreaseWeight}>
						<AiOutlineMinus />
					</button>
					<span>
						{quantity}
						{type == 'unit' ? `шт` : `кг`}
					</span>
					<button onClick={increaseWeight}>
						<AiOutlinePlus />
					</button>
				</div>
				<button onClick={() => handleAddToCart()}>Add</button>
			</div>
		</div>
	)
}

export default ProductComponent
