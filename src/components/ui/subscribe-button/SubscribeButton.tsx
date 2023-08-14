import { useAuth } from '@/hooks/useAuth'
import { api } from '@/services/api/api'
import cn from 'clsx'
import { FC } from 'react'
import { BsPersonPlusFill } from 'react-icons/bs'
import Button from '../Button/Button'
import styles from './SubscribeButton.module.scss'

const SubscribeButton: FC<{ channelIdFromSubscribe: number }> = ({
	channelIdFromSubscribe
}) => {
	const { user } = useAuth()

	const { data: profile } = api.useGetProfileQuery(null, { skip: !user })
	const [subscribe, { isLoading, data }] = api.useSubscribeToChannelMutation()
	if (user?.id === channelIdFromSubscribe) return null

	const isSubscribe =
		profile?.subscriptions?.some(
			sub => sub.toChannel.id === channelIdFromSubscribe
		) || !!data

	return (
		<Button
			className={cn(styles.button, { [styles.button_subscribe]: isSubscribe })}
			onClick={() => subscribe(channelIdFromSubscribe).unwrap()}
			disabled={isLoading}
		>
			<BsPersonPlusFill />
			{isSubscribe ? <div>Уже подписан</div> : <div>Подписаться</div>}
		</Button>
	)
}
export default SubscribeButton
