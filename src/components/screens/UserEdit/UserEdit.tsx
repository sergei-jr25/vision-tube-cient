'use client'
import Field from '@/components/ui/Field/Field'
import UploadField from '@/components/ui/upload-field/UploadField'
import { api } from '@/services/api/api'
import { validateEmail } from '@/utils/regex'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'
import styles from './UserEdit.module.scss'

const UserEdit: FC<{ userId: number }> = ({ userId }) => {
	const { replace } = useRouter()
	if (!userId) {
		replace('/')
		return null
	}
	const {
		register,
		reset,
		control,
		setValue,
		watch,
		getValues,
		handleSubmit,
		formState: { errors }
	} = useForm({ mode: 'onChange' })

	const { data: profile } = api.useGetProfileQuery(null, { skip: !userId })
	const [handleEditProfile, { isSuccess }] = api.useEditProfileMutation()
	const thumbnailPath = watch('avatarPath')

	useEffect(() => {
		setValue('email', profile?.email)
		setValue('name', profile?.name)
		setValue('description', profile?.description)
		setValue('avatarPath', profile?.avatarPath)
	}, [profile])

	const onSumbit = (data: any) => {
		handleEditProfile({ id: userId, ...data })
		if (isSuccess) {
			toastr.success('Профиль', ' успешно изменен')
		}
		reset()
	}

	return (
		<div className={styles.userEdit}>
			<h2 className={`title ${styles.userEdit__title}`}>
				Редакировать профиль
			</h2>
			<form className={styles.userEdit__form} onSubmit={handleSubmit(onSumbit)}>
				<Field
					{...register('name', { minLength: 3 })}
					placeholder='name'
					type='text'
					error={errors.name}
				/>
				<Field
					{...register('email', {
						pattern: {
							value: validateEmail,
							message: 'Введите корректный email'
						}
					})}
					placeholder='email'
					type='email'
					error={errors.email}
				/>
				<Field
					{...register('description')}
					placeholder='description'
					type='text'
				/>
				<div className={styles.userEdit__picture}>
					<Controller
						control={control}
						name='avatarPath'
						render={file => (
							<UploadField onChange={value => file.field.onChange(value.url)} />
						)}
					/>
					<Image
						className={styles.userEdit__image}
						src={thumbnailPath}
						width={60}
						height={60}
						alt=''
					/>
				</div>
				<button className={styles.userEdit__button}>Отправить</button>
			</form>
		</div>
	)
}
export default UserEdit
