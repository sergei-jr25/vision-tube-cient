'use client'
import TogglePublic from '@/components/layout/header/upload-video/toggle-public/TogglePublic'
import VideoInformation from '@/components/layout/header/upload-video/video-information/VideoInformation'
import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'
import TextArea from '@/components/ui/Textarea/Textarea'
import UploadField from '@/components/ui/upload-field/UploadField'
import { useAuth } from '@/hooks/useAuth'
import { videoApi } from '@/services/api/video.api'
import { IMediaResponse } from '@/services/media/media.interface'
import { IVideoDto } from '@/types/video.interface'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import styles from './VideoEdit.module.scss'

const VideoEdit: FC<{ id?: number }> = ({ id }) => {
	const { user } = useAuth()
	const { push, replace } = useRouter()
	if (!user) {
		replace('/')
		return null
	}
	const videoId = Number(id)

	const { data, isLoading } = videoApi.useGetVideoByIdQuery(videoId, {
		skip: !videoId
	})

	const [updateVideo, { isLoading: isUpdateLoading }] =
		videoApi.useUpdateVideoMutation()
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		setValue,
		watch
	} = useForm<IVideoDto>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IVideoDto> = data => {
		updateVideo({ ...data, id: videoId })
			.unwrap()
			.then(() => toastr.success('Статус', 'Видео обновлено'))
		push('/studio')
	}

	useEffect(() => {
		if (!watch('name') && data) {
			setValue('name', data.name)
			setValue('description', data.description)
			setValue('videoPath', `${data.videoPath}`)
			setValue('thumbnailPath', `${data.thumbnailPath}`)
			setValue('isPublic', data.isPublic)
		}
	}, [data])
	// 'id' | 'videoPath'
	return (
		<div className={styles.videoEdit}>
			{isUpdateLoading ? (
				<div>...Загрузка</div>
			) : (
				<form
					className={styles.videoEdit__form}
					onSubmit={handleSubmit(onSubmit)}
				>
					<div>
						<div className={styles.videoEdit__fields}>
							<Field
								{...register('name', {
									required: 'Название обязательно!'
								})}
								placeholder='Name'
								error={errors.name}
							/>
							<TextArea
								{...register('description', {
									required: 'Описание обязательно!'
								})}
								placeholder='Description'
								error={errors.description}
							/>
						</div>
						<Controller
							control={control}
							name='isPublic'
							render={({ field: { onChange, value } }) => (
								<TogglePublic
									clickHandler={() => onChange(!value)}
									isEnabled={!!value}
								/>
							)}
						/>
						<div className={styles.videoEdit__uploads}>
							<Controller
								control={control}
								name='thumbnailPath'
								render={file => (
									<UploadField
										folder='thumbnails'
										onChange={(value: IMediaResponse) =>
											file.field.onChange(value.url)
										}
									/>
								)}
							/>

							<Controller
								control={control}
								name='videoPath'
								render={file => (
									<UploadField
										folder='thumbnails'
										onChange={(value: IMediaResponse) =>
											file.field.onChange(value.url)
										}
									/>
								)}
							/>
						</div>
					</div>
					<div>
						<VideoInformation
							fileName={data?.name}
							videoId={videoId}
							isUploaded
							thumbnailPath={watch('thumbnailPath')}
						/>

						<Button>{isUpdateLoading ? 'Ожидайте' : 'Сохранить'}</Button>
					</div>
				</form>
			)}
		</div>
	)
}
export default VideoEdit
