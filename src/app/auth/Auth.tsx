'use client'
import Button from '@/components/ui/Button/Button'
import { useAction } from '@/hooks/useAction'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { FC, FormEvent, useState } from 'react'
import styles from './Auth.module.scss'

const Auth: FC = () => {
	const [value, setValue] = useState({ email: '', password: '' })
	const [type, setType] = useState<'login' | 'register'>('login')

	const { user } = useAuth()
	const { push } = useRouter()

	const { isLoading } = useAuth()
	const { login, logout, register: registerAction } = useAction()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('email', value.email)
		formData.append('password', value.password)
		if (type === 'login') login(value)
		if (type === 'register') registerAction(value)
		// console.log(formData)
	}

	const handleLogout = () => {
		logout()
		push('/')
	}

	return (
		<>
			{!user ? (
				<form className={styles.form} onSubmit={e => handleSubmit(e)}>
					<input
						type='email'
						value={value.email}
						onChange={e => setValue({ ...value, email: e.target.value })}
					/>
					<input
						type='password'
						value={value.password}
						onChange={e => setValue({ ...value, password: e.target.value })}
					/>

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
				</form>
			) : (
				<Button onClick={handleLogout}>Выйти</Button>
			)}
		</>
	)
}
export default Auth
