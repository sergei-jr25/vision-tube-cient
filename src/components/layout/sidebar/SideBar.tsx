'use client'

import { useAuth } from '@/hooks/useAuth'
import { api } from '@/services/api/api'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import styles from './SideBar.module.scss'
import Menu from './menu/Menu'
import { menuData } from './menu/menu.data'

const SideBar: FC = () => {
	const { user } = useAuth()
	const { replace } = useRouter()

	const { data: profile } = api.useGetProfileQuery(null, { skip: !user })

	return (
		<div className={styles.sidebar}>
			<h1 onClick={() => replace('/')} className={styles.sidebar__title}>
				VisionTube
			</h1>
			<div>
				<Menu title='Меню' items={menuData} />
			</div>

			{user && (
				<Menu
					title='Мои подписки'
					items={
						profile?.subscriptions?.map(({ toChannel }) => ({
							link: '/c/' + toChannel.id,
							name: toChannel.name,
							image: toChannel.avatarPath
						})) || []
					}
				/>
			)}
		</div>
	)
}
export default SideBar
