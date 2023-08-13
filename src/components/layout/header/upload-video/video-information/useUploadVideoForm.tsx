import { videoApi } from '@/services/api/video.api'
import { IMediaResponse } from '@/services/media/media.interface'
import { IVideoDto } from '@/types/video.interface'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IUseVideoForm {
	handleCloseModel: () => void
	videoId: number
}

export const useUploadVideoForm = ({
	handleCloseModel,
	videoId
}: IUseVideoForm) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
		control,
		setValue,
		watch
	} = useForm<IVideoDto>({ mode: 'onChange' })

	const [UploadVideo, { isSuccess }] = videoApi.useUpdateVideoMutation()

	const onSubmit: SubmitHandler<IVideoDto> = data => {
		UploadVideo({ ...data, id: videoId })
			.unwrap()
			.then(() => {
				handleCloseModel()
				reset()
			})
	}

	const videoPath = watch('videoPath')
	const thumbnailPath = watch('thumbnailPath')
	const [videoFileName, setVideoFileName] = useState('')

	const handleUploadVideo = (value: IMediaResponse) => {
		setValue('videoPath', value.url)
		setValue('name', value.name)
		setVideoFileName(value.name)
	}

	const [isChosen, setIsChosen] = useState(false)
	const [percent, setIsPercent] = useState(0)
	const [isUpload, setIsUpload] = useState(false)

	const setProgressPercent = (val: number) => {
		setIsPercent(val)
		if (val === 100) setIsUpload(true)
	}

	return {
		form: {
			register,
			errors,
			control,
			handleSubmit,
			watch,
			setValue,
			reset,
			onSubmit
		},
		status: {
			isChosen,
			percent,
			isUpload,
			isSuccess,
			setProgressPercent,
			setIsChosen
		},
		media: {
			videoPath,
			thumbnailPath,
			videoFileName,
			setVideoFileName,
			handleUploadVideo
		}
	}
}
