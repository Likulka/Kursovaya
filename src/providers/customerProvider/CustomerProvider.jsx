// CustomerContext.js
import { createContext, useContext, useState } from 'react'
import Customer from '../../components/user/Customer' // Убедитесь, что импортируете класс Customer

const CustomerContext = createContext(null)

export const useCustomer = () => useContext(CustomerContext)

export const CustomerProvider = ({ children }) => {
	const [customer] = useState(new Customer('Иван', 5000, 200)) // Создаем экземпляр покупателя

	return (
		<CustomerContext.Provider value={customer}>
			{children}
		</CustomerContext.Provider>
	)
}
