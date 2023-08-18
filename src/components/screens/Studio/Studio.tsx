'use client'

import { useAuth } from '@/hooks/useAuth'
import { videoApi } from '@/services/api/video.api'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import Catalog from '../Home/catalog/Catalog'

const Studio: FC = () => {
	const { user } = useAuth()
	const { data, isLoading } = videoApi.useGetProfileQuery(null, { skip: !user })
	const { replace } = useRouter()

	if (!data) {
		replace('/')
		return null
	}
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
