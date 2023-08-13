import Button from '@/components/ui/Button/Button'
import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall'
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton'
import { videoApi } from '@/services/api/video.api'
import { IVideo } from '@/types/video.interface'
import dayjs from 'dayjs'
import { FC } from 'react'
import { HiCalendar } from 'react-icons/hi'
import { IoMdEye } from 'react-icons/io'
import { RiHeart2Fill } from 'react-icons/ri'
import styles from './VideoDetail.module.scss'

const VideoDetail: FC<{ video: IVideo }> = ({ video }) => {
	console.log('video', video.id)

	const [updateLike, { isLoading: isLikeLoading }] =
		videoApi.useUpdateLikesMutation()
	return (
		<div className={styles.detail}>
			<div className={styles.detail__user}>
				<ChannelInfoSmall channel={video.user} />
				<h1 className={styles.detail__name}>{video.name}</h1>
				<article className={styles.detail__description}>
					{video.description}
				</article>
			</div>

			<div className={styles.detail__body}>
				<div className={styles.detail__actions}>
					<div className={styles.detail__subscribe}>
						{video?.user && (
							<SubscribeButton channelIdFromSubscribe={video.user.id} />
						)}
					</div>

					<Button onClick={() => updateLike(video.id)} disabled={isLikeLoading}>
						<RiHeart2Fill />
						Лайк
					</Button>
				</div>
				<div className={styles.detail__info}>
					<div className={styles.detail__value}>
						<IoMdEye />
						<span>{video.views}</span>
					</div>
					<div className={styles.detail__value}>
						<RiHeart2Fill />
						<span>{video.likes}</span>
					</div>
					<div className={styles.detail__value}>
						<HiCalendar />
						{dayjs(new Date(video.createdAt)).fromNow()}
					</div>
				</div>
			</div>
		</div>
	)
}
export default VideoDetail
