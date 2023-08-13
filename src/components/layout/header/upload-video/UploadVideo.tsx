import { videoApi } from '@/services/api/video.api'
import { FC, useState } from 'react'
import { HiUpload } from 'react-icons/hi'
import UploadModule from './UploadModal'

const UploadVideo: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [videoId, setVideoId] = useState<number>(0)
	const [video, setVideo] = useState<number>(0)

	const [createVideo, { isLoading }] = videoApi.useCreateVideoMutation()

	return (
		<div>
			<button
				disabled={isLoading}
				onClick={() =>
					createVideo()
						.unwrap()
						.then(({ id }) => {
							setIsOpen(true)
							setVideoId(+id)
						})
				}
			>
				<HiUpload />
			</button>
			<UploadModule isOpen={isOpen} setIsOpen={setIsOpen} videoId={videoId} />
		</div>
	)
}
export default UploadVideo
