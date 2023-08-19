import { forwardRef } from 'react'
import { IField } from './Field.interface'
import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, placeholder, type = 'text', ...rest }, ref) => {
		console.log(error)

		return (
			<>
				<label className={styles.field}>
					<span></span>
					<input placeholder={placeholder} type={type} ref={ref} {...rest} />
				</label>
				{error && <div>{error?.message}</div>}
			</>
		)
	}
)
export default Field
