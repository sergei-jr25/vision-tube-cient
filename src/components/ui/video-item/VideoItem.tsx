import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import UserAvatar from '../user-avatar/UserAvatar'
import VideoDuration from './VideoDuration'
import styles from './VideoItem.module.scss'
import VideoStatistics from './VideoStatistics'
import { IVideoItem } from './video-item.interface'



const VideoItem: FC<IVideoItem> = ({
	isSmall,
	video,
	isUpdateLink,
	removeHandler
}) => {
	const { push } = useRouter()
 
	return (
		<div className={cn(styles.video_item, { [styles.small]: isSmall })}>
			{!!removeHandler && (
				<button
					onClick={() => removeHandler(video.id)}
					className={styles.video_item__trash}
				>
					<BiTrash />
				</button>
			)}
			{isUpdateLink && (
				<button
					onClick={() => push(`/video/edit/${video.id}`)}
					className={styles.video_item__trash}
				>
					<BiEdit />
				</button>
			)}

			<div className={styles.video_item__thumbNail}></div>

			<div className={styles.video_item__images}>
				{video.thumbnailPath && (
					<Link href={`/v/${video.id}`}>
						<Image
							fill
							alt={video.name}
							src={video.thumbnailPath || ''}
							className={styles.video_item__image}
						/>
					</Link>
				)}
				<div className={styles.video_item__avatar}>
					{video?.user?.avatarPath && <UserAvatar user={video.user} />}
				</div>
				<div className={styles.video_item__duration}>
					<VideoDuration duration={video.duration || 0} />
				</div>
			</div>

			<div className={styles.video_item__information}>
				<div className={styles.video_item__body}>
					{!isSmall && (
						<div className={styles.video_item__username}>
							{video.user?.name}
						</div>
					)}
					<Link
						className={styles.video_item__videoname}
						href={`/v/${video.id}`}
					>
						{video.name}
					</Link>
					<VideoStatistics
						views={video.views || 0}
						createdAt={!isSmall ? video.createdAt : undefined}
					/>
				</div>
			</div>
		</div>
	)
}
export default VideoItem
