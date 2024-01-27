import { getProducts } from '@/api/products'
import ProductComponent from '@/components/product/ProductComponent'
import { useEffect, useState } from 'react'
import styles from './CatalogComponent.module.scss'

const CatalogComponent = ({ customer }) => {
	const [products, setProducts] = useState([])
	console.log('catalog')
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await getProducts()
				setProducts(res.data)
				console.log(products)
			} catch (error) {
				console.error('Failed to fetch products:', error)
			}
		}

		fetchProducts()
	}, [])

	return (
		<div className='catalog'>
			<h2>Каталог продуктов</h2>
			<div className={styles['catalog-list']}>
				{products.map(product => (
					<ProductComponent
						key={product.id}
						name={product.name}
						basePrice={product.price}
						imagePath={product.image}
						type={product.type}
					/>
				))}
			</div>
		</div>
	)
}

export default CatalogComponent
