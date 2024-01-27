import React, { useState } from 'react'

const PaymentModal = ({ total, onPay, bonusPoints }) => {
	const [inputValue, setInputValue] = useState(0)

	const handleSliderChange = e => {
		setInputValue(e.target.value)
	}

	const handlePayClick = () => {
		onPay(inputValue)
		// Дополнительно, здесь можно обработать закрытие модального окна или другие действия после оплаты
	}

	return (
		<div className='payment-modal'>
			<h2>Оплата</h2>
			<p>Стоимость: {total}₽</p>
			<p>Стоимость после применения бонусов: {total - inputValue}₽</p>
			<p>Использовать бонусы:</p>
			<input
				type='range'
				min='0'
				max={bonusPoints}
				value={inputValue}
				onChange={handleSliderChange}
			/>
			<div>Используемые бонусы: {inputValue}</div>
			<div>
				<button onClick={handlePayClick}>Confirm Payment</button>
			</div>
		</div>
	)
}

export default PaymentModal
