import { IUser } from '@/types/user.interface'
import { FC } from 'react'
import UserAvatar from '../user-avatar/UserAvatar'
import styles from './ChannelInfoSmall.module.scss'

const ChannelInfoSmall: FC<{
	channel: IUser | undefined
	message?: string
}> = ({ channel, message }) => {
	return (
		<div className={styles.infosmall}>
			<div className={styles.infosmall__avatar}>
				{channel?.avatarPath && <UserAvatar user={channel} />}
			</div>
			<div className={styles.infosmall__content}>
				<div className={styles.infosmall__name}>{channel?.name}</div>
				<div className={styles.infosmall__subscrubtion}>
					{/* {channel?.name} */}
					{message || channel?.subscriberCount + ' subscribers'}
				</div>
			</div>
		</div>
	)
}
export default ChannelInfoSmall
