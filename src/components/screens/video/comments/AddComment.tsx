import Field from '@/components/ui/Field/Field'
import { commentApi } from '@/services/api/comment.api'
import { ICommentDto } from '@/types/comment.interface'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IoMdSend } from 'react-icons/io'
import styles from './Comments.module.scss'

const AddComment: FC<{ videoId: number }> = ({ videoId }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<ICommentDto>({ mode: 'onChange' })

	const [writeComment, { isLoading }] = commentApi.useCreateCommentMutation()

	const onSubmit: SubmitHandler<ICommentDto> = async data => {
		console.log({ ...data, videoId })

		writeComment({ ...data, videoId })
			.unwrap()
			.then(() => reset())
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('message', {
					required: 'Сообщение обязательно'
				})}
				type='text'
				placeholder='Введите коментарии'
			/>
			<button className={styles.form__button} disabled={isLoading}>
				<IoMdSend />
			</button>
		</form>
	)
}
export default AddComment
