import CartComponent from '@/components/cart/CartComponent'
import CatalogComponent from '@/components/catalog/CatalogComponent'
import Customer from '@/components/user/Customer'
import { CustomerProvider } from '@/providers/customerProvider/CustomerProvider'

const HomePage = () => {
	return (
		<>
			<div className='wrapper'>
				<div className='container'>
					<CustomerProvider>
						<main>
							<div className='body'>
								<Customer>
									{({
										payWithCard,
										payWithBonus,
										walletBalance,
										bonusPoints,
										paymentSuccess,
									}) => (
										<>
											<div className='product-list'>
												<CatalogComponent />
											</div>

											{
												<CartComponent
													payWithCard={payWithCard}
													payWithBonus={payWithBonus}
													walletBalance={walletBalance}
													bonusPoints={bonusPoints}
													paymentSuccess={paymentSuccess}
												/>
											}
										</>
									)}
								</Customer>
							</div>
						</main>
					</CustomerProvider>
				</div>
			</div>
		</>
	)
}

export default HomePage
