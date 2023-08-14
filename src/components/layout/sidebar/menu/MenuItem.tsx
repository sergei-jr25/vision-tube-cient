import { useAuth } from '@/hooks/useAuth'
import { api } from '@/services/api/api'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'
import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { data: profile } = api.useGetProfileQuery(null)

	const {} = useRouter()
	const pathname = usePathname()
	const { user } = useAuth()
	if (item.link === '/my-channel')
		if (!user) return null
		else item.link = '/c/' + user.id

	return (
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
	)
}
export default MenuItem
