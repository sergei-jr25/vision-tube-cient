import { FC } from 'react'
import styles from './VideoItem.module.scss'

const VideoDuration: FC<{
	duration: number | undefined
	isBottom?: boolean
}> = ({ duration, isBottom }) => {
	return (
		<div>
			<time className={isBottom ? styles.bottom : ''}>{duration}.min</time>
		</div>
	)
}
export default VideoDuration
