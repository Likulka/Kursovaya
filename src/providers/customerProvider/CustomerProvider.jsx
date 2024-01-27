// CustomerContext.js
import { createContext, useContext, useState } from 'react'

const initialCustomer = { name: 'Иван', card: 5000, bonus: 200 }

const CustomerContext = createContext(null)

export const useCustomer = () => useContext(CustomerContext)

export const CustomerProvider = ({ children }) => {
	const [customer, setCustomer] = useState(initialCustomer)
	// Создаем экземпляр покупателя
	console.log('provider')
	const updateBonus = newBonus => {
		setCustomer(prevCustomer => ({
			...prevCustomer, // Копируем все существующие свойства
			bonus: newBonus, // Обновляем только bonus
		}))
	}

	return (
		<CustomerContext.Provider value={{ customer, updateBonus }}>
			{children}
		</CustomerContext.Provider>
	)
}
