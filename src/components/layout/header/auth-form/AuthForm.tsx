import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'
import { useAction } from '@/hooks/useAction'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOtside'
import { validateEmail } from '@/utils/regex'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CgProfile } from 'react-icons/cg'
import styles from './AuthForm.module.scss'

const AuthForm: FC = () => {
	const { isShow, ref, setIsShow } = useOutside(false)
	const [type, setType] = useState<'login' | 'register'>('login')

	const { isLoading } = useAuth()
	const { login, logout, register: registerAction } = useAction()
	const { handleSubmit, register, formState } = useForm({ mode: 'onChange' })

	const onSubmit = (data: any) => {
		console.log(data)

		if (type === 'login') login(data)
		if (type === 'register') registerAction(data)
	}
	return (
		<div className={styles.authform}>
			<button
				className={styles.authform__button}
				ref={ref}
				onClick={() => setIsShow(!isShow)}
			>
				<CgProfile />
			</button>
			{isShow && (
				<form
					className={styles.authform__body}
					onSubmit={handleSubmit(onSubmit)}
				>
					<Field
						{...register('email', {
							pattern: {
								value: validateEmail,
								message: 'Введите корректный email'
							}
						})}
						placeholder='email'
						type='email'
					/>
					<Field
						{...register('password', {
							minLength: {
								value: 6,
								message: 'Пароль должен быть не менее 6 символов'
							}
						})}
						placeholder='password'
						type='password'
					/>
					<div className={styles.authform__buttons}>
						<Button
							className={styles.authform__button}
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Войти
						</Button>
						<Button
							className={styles.authform__button}
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Регистрация
						</Button>
					</div>
				</form>
			)}
		</div>
	)
}
export default AuthForm
