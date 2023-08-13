'use client'

import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall'
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton'
import { FC } from 'react'
import Catalog from '../Home/catalog/Catalog'
import styles from './Channel.module.scss'
import { IChannel } from './channel.inreface'

const Channel: FC<IChannel> = ({ channel }) => {
	console.log('channel', channel)

	return (
		<div className={styles.channel}>
			<div className={styles.channel__profile}>
				<div>
					<ChannelInfoSmall channel={channel} />
					<SubscribeButton channelIdFromSubscribe={channel.id} />
				</div>
				<article className={styles.channel__description}>
					{channel.description}
				</article>
				<Catalog newVideos={channel.videos || []} />
			</div>
		</div>
	)
}
export default Channel
