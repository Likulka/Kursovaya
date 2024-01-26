import CartComponent from './components/cart/Cart'
import CatalogComponent from './components/catalog/CatalogComponent'
import Customer from './components/user/Customer'
import { CartProvider } from './providers/cartProvider/CartProvider'

function App() {
	return (
		<>
			<CartProvider>
				<div className='wrapper'>
					<div className='container'>
						<main>
							<Customer>
								{({
									payWithCard,
									payWithBonus,
									walletBalance,
									bonusPoints,
									paymentSuccess,
								}) => (
									<div className='product-list'>
										<CatalogComponent />
										<CartComponent
											payWithCard={payWithCard}
											payWithBonus={payWithBonus}
											walletBalance={walletBalance}
											bonusPoints={bonusPoints}
											paymentSuccess={paymentSuccess}
										/>
									</div>
								)}
							</Customer>
						</main>
					</div>
				</div>
			</CartProvider>
		</>
	)
}

export default App
