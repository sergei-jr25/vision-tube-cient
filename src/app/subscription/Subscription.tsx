'use client'
import Menu from '@/components/layout/sidebar/menu/Menu'
import { api } from '@/services/api/api'
import { FC } from 'react'

const Subscription: FC = () => {
	const { data: profile } = api.useGetProfileQuery(null)

	return (
		<>
			{profile?.subscribers.length && (
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
		</>
	)
}
export default Subscription
