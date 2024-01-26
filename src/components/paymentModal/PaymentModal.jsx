const PaymentModal = ({ total, useBonus, setUseBonus, onPay }) => {
	const handleSliderChange = e => {
		setUseBonus(e.target.value) // Обновляем количество используемых бонусов
	}

	const handlePayClick = () => {
		onPay() // Вызываем функцию оплаты
	}

	return (
		<div className='payment-modal'>
			<h2>Payment Information</h2>
			<p>Total Amount: {total - useBonus} (Remaining after bonus)</p>
			<p>Bonus Points Usage:</p>
			<input
				type='range'
				min='0'
				max={total}
				value={useBonus}
				onChange={handleSliderChange}
			/>
			<div>
				<button onClick={handlePayClick}>Confirm Payment</button>
			</div>
		</div>
	)
}

export default PaymentModal
