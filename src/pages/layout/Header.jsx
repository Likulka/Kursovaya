import { useCart } from '@/providers/cartProvider/CartProvider'
import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = ({ currentPath }) => {
	const navigate = useNavigate()
	const { toggleCartVisibility } = useCart()

	return (
		<header>
			{currentPath === '/payment' ? (
				<div>Особенная шапка для страницы оплаты</div>
			) : (
				<button onClick={toggleCartVisibility} className={styles['header-btn']}>
					<IoCartOutline fontSize={45} />
				</button>
			)}
			{/* Общие элементы шапки */}
		</header>
	)
}
export default Header
