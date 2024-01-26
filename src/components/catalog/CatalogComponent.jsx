import ProductComponent from '../product/ProductComponent'
import products from './productsData'

const CatalogComponent = ({ customer }) => {
	return (
		<div className='catalog'>
			<h2>Каталог продуктов</h2>
			{products.map(product => (
				<ProductComponent
					key={product.id}
					name={product.name}
					basePrice={product.basePrice}
					type={product.type}
				/>
			))}
		</div>
	)
}

export default CatalogComponent
