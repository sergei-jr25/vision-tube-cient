import { useAuth } from '@/hooks/useAuth'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { user } = useAuth()
	const pathname = usePathname()

	// const { data: profile } = api.useGetProfileQuery(null, { skip: !user })

	if (item.link === '/my-channel')
		if (!user) return null
		else item.link = '/c/' + user.id

	return (
		<li className={styles.menu__item}>
			<Link
				href={item.link}
				className={cn(styles.link, {
					[styles.link_active]: pathname === item.link
				})}
			>
				{item.image && (
					<Image
						src={item.image}
						width={40}
						height={40}
						alt={item.name}
						className={styles.image}
					/>
				)}
				{item.icon && <item.icon />}
				<div>{item.name}</div>
			</Link>
		</li>
	)
}
export default MenuItem
