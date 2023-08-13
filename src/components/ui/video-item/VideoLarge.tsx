import { IVideo } from '@/types/video.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import UserAvatar from '../user-avatar/UserAvatar'
import VideoDuration from './VideoDuration'
import styles from './VideoItem.module.scss'
import VideoStatistics from './VideoStatistics'

const VideoLarge: FC<{ video: IVideo }> = ({ video }) => {
	return (
		<div className={styles.videoLarge}>
			{video.thumbnailPath && (
				<Image
					fill
					alt={video.name}
					src={video.thumbnailPath}
					className={styles.videoLarge__image}
				/>
			)}
			<div className={styles.videoLarge__body}>
				<Link className={styles.videoLarge__videoname} href={`/v/${video.id}`}>
					{video.name}
				</Link>
				{video?.user?.avatarPath && <UserAvatar user={video.user} isWhite />}

				<div className={styles.videoLarge__username}>{video?.user?.name}</div>

				<div className={styles.videoLarge__statistics}>
					<VideoStatistics views={video.views} createdAt={video.createdAt} />
				</div>
			</div>

			<div className={styles.videoLarge__duration}>
				<VideoDuration duration={video.duration} isBottom />
			</div>
		</div>
	)
}
export default VideoLarge
