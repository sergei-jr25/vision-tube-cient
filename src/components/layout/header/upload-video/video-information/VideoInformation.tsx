import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from '../UploadVideo.module.scss'

interface IVideoInformation {
	thumbnailPath?: string
	videoId: number
	fileName: string | undefined
	isUploaded: boolean
}

const VideoInformation: FC<IVideoInformation> = ({
	fileName,
	isUploaded,
	videoId,
	thumbnailPath
}) => {
	return (
		<div className={styles.info}>
			{!thumbnailPath ? (
				<div>
					{!isUploaded ? 'Идет загрузка видео' : 'Нужно  загрузить превью'}
				</div>
			) : (
				<div className={styles.info__image}>
					{thumbnailPath ? (
						<Image fill alt={fileName || ''} src={thumbnailPath} />
					) : (
						<span></span>
					)}
				</div>
			)}
			<div>
				<span className={styles.info__value}>Video link</span>
				<Link href={`/v/${videoId}`}>http://localhost:3000/v/{videoId}</Link>
			</div>
			<div className={styles.info__name}>
				<span className={styles.info__value}>Filename</span>
				<span>{fileName}</span>
			</div>
		</div>
	)
}
export default VideoInformation
