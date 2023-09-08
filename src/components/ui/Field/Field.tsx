import { forwardRef, useEffect } from 'react'
import { IField } from './Field.interface'
import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, placeholder, type = 'text', ...rest }, ref) => {
		console.log(error)
		useEffect(() => {
			const input: HTMLElement | null = document.getElementById('myInput') // Замените 'myInput' на id вашего инпута
			console.log(input)

			input?.addEventListener('focus', () => {
				input?.setAttribute('autoComplete', 'off')
			})
		}, [])
		return (
			<>
				<label className={styles.field}>
					<span></span>
					<input
						id='myInput'
						autoComplete=''
						placeholder={placeholder}
						type={type}
						ref={ref}
						{...rest}
					/>
				</label>
				{error && <div className={styles.error}>{error?.message}</div>}
			</>
		)
	}
)
export default Field
