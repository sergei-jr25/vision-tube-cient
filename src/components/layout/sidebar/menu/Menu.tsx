'use client'
import { FC } from 'react'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenuItem } from './menu.interface'

interface IMenu {
	title: string
	items: IMenuItem[]
	currentId?: number
}

const Menu: FC<IMenu> = ({ items, title }) => {
	return (
		<div className={styles.menu}>
			<h3 className={styles.menu__title}>{title}</h3>
			<ul className={styles.menu__list}>
				{items.map(item => (
					<li className={styles.menu__item} key={item.link}>
						<MenuItem item={item} />
					</li>
				))}
			</ul>
		</div>
	)
}
export default Menu
