import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FC } from 'react'
import styles from './VideoItem.module.scss'

interface IVideoStatistics {
	createdAt?: Date
	views: number | undefined
}

dayjs.extend(relativeTime)
const VideoStatistics: FC<IVideoStatistics> = ({ views, createdAt }) => {
	return (
		<div className={styles.statisitcks}>
			<div className={styles.statisitcks__views}>views: {views}</div>-
			{!!createdAt && <div>{dayjs(new Date(createdAt)).fromNow()}</div>}
		</div>
	)
}
export default VideoStatistics
