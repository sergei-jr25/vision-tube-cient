'use client'
import Menu from '@/components/layout/sidebar/menu/Menu'
import { useAuth } from '@/hooks/useAuth'
import { api } from '@/services/api/api'
import { FC } from 'react'

const Subscription: FC = () => {
	const { user } = useAuth()
	const { data: profile } = api.useGetProfileQuery(null, { skip: !user })

	return (
		<>
			{profile?.subscribers ? (
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
			) : (
				<div>Вы не на кого не подписанны</div>
			)}
		</>
	)
}
export default Subscription
