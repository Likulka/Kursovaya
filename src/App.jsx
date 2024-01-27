import Layout from '@/pages/layout/Layout'
import HomePage from '@/pages/main/HomePage'
import { CartProvider } from '@/providers/cartProvider/CartProvider'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

// Импорты других страниц

const App = () => {
	return (
		<Router>
			<CartProvider>
				<Layout>
					<Routes>
						<Route path='/' element={<HomePage />}></Route>

						{/* <Route path='/payment'>
						<PaymentPage />
					</Route> */}
						{/* Другие маршруты */}
					</Routes>
				</Layout>
			</CartProvider>
		</Router>
	)
}

export default App
