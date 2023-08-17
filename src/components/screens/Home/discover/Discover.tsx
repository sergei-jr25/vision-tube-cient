import VideoLarge from '@/components/ui/video-item/VideoLarge'
import { IVideo } from '@/types/video.interface'
import { FC } from 'react'
import styles from './Discover.module.scss'

interface IDiscover {
	randomVideo: IVideo
	topVideo: IVideo
}
const Discover: FC<IDiscover> = ({ randomVideo, topVideo }) => {
	return (
		<div className={styles.discover}>
			<div className={styles.top_video}>
				{randomVideo && <VideoLarge video={randomVideo} />}
			</div>
			<div className={styles.random_video}>
				{topVideo && <VideoLarge video={topVideo} />}
			</div>
		</div>
	)
}
export default Discover
