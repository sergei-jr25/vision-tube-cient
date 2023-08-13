'use client'

import { videoApi } from '@/services/api/video.api'
import { FC } from 'react'
import Catalog from '../Home/catalog/Catalog'

const Studio: FC = () => {
	const { data, isLoading } = videoApi.useGetProfileQuery(null)
	const [removeVideo] = videoApi.useDeleteVideoMutation()

	const videos = data?.videos
	return (
		<>
			{videos ? (
				isLoading ? (
					<div>...Loading</div>
				) : (
					<Catalog
						newVideos={videos}
						isUpdateLink
						removeHandler={removeVideo}
					/>
				)
			) : (
				<div>Видео не найдено </div>
			)}
		</>
	)
}
export default Studio
