import Field from '@/components/ui/Field/Field'
import TextArea from '@/components/ui/Textarea/Textarea'
import UploadField from '@/components/ui/upload-field/UploadField'
import { IMediaResponse } from '@/services/media/media.interface'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import styles from '../UploadVideo.module.scss'
import FooterForm from '../footer-form/FooterForm'
import TogglePublic from '../toggle-public/TogglePublic'
import SuccessMessage from './SuccessMessage'
import VideoInformation from './VideoInformation'
import { useUploadVideoForm } from './useUploadVideoForm'

const UploadVideoForm: FC<{
	videoId: number
	handleCloseModel: () => void
}> = ({ handleCloseModel, videoId }) => {
	const { form, media, status } = useUploadVideoForm({
		handleCloseModel,
		videoId
	})
	const { control } = useForm()

	return (
		<div className={styles.modal}>
			<form
				className={styles.modal__form}
				onSubmit={form.handleSubmit(form.onSubmit)}
			>
				{status.isSuccess && <SuccessMessage />}

				{status.isChosen ? (
					<>
						<div className={styles.modal__wrapper}>
							<div className={styles.modal__letf}>
								<div className={styles.modal__fields}>
									<Field
										{...form.register('name', {
											required: 'Название обязательно!'
										})}
										placeholder='Name'
										error={form.errors.name}
									/>

									<TextArea
										{...form.register('description', {
											required: 'Описание обязательно!'
										})}
										placeholder='Description'
										error={form.errors.description}
									/>
								</div>

								<Controller
									control={form.control}
									name='isPublic'
									render={({ field: { onChange, value } }) => (
										<TogglePublic
											clickHandler={() => onChange(!value)}
											isEnabled={!!value}
										/>
									)}
								/>

								<Controller
									control={form.control}
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
							</div>
							<div className={styles.modal__right}>
								<VideoInformation
									fileName={media.videoFileName}
									videoId={videoId}
									isUploaded={status.isUpload}
									thumbnailPath={media.thumbnailPath}
								/>
							</div>
							<FooterForm
								isUploaded={status.isUpload}
								percent={status.percent}
							/>
						</div>
					</>
				) : (
					<Controller
						control={form.control}
						name='videoPath'
						render={file => (
							<UploadField
								title='Сначала загрузи видео'
								folder='thumbnails'
								setValue={status.setProgressPercent}
								isSetChosen={status.setIsChosen}
								onChange={media.handleUploadVideo}
								className={styles.modal__title}
							/>
						)}
					/>
				)}
			</form>
		</div>
	)
}
export default UploadVideoForm
