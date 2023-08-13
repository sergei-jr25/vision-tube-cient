'use client'
import { videoApi } from '@/services/api/video.api'
import { IVideo } from '@/types/video.interface'
import { FC, useEffect } from 'react'
import styles from './Video.module.scss'
import Comments from './comments/Comments'
import VideoDetail from './video-detail/VideoDetail'
import VideoPlayer from './video-player/VideoPlayer'

const Video: FC<{ id: number }> = ({ id }) => {
	const { data: video = {} as IVideo } = videoApi.useGetVideoByIdQuery(
		Number(id),
		{ skip: !id }
	)

	const [updateViews] = videoApi.useUpdateViewsMutation()

	useEffect(() => {
		if (id) updateViews(Number(id))
	}, [id])
	return (
		<div className={styles.video}>
			<VideoPlayer videoPath={video.videoPath} />
			<Comments comments={video.comments || []} videoId={video.id} />
			<VideoDetail video={video} />
		</div>
	)
}
export default Video
