import { forwardRef } from 'react'
import styles from './Textarea.module.scss'
import { ITextarea } from './textarea.interface'

const TextArea = forwardRef<HTMLTextAreaElement, ITextarea>(
	({ placeholder, type = 'text', error, ...rest }, ref) => {
		return (
			<>
				<label className={styles.label}>
					<span> </span>
					<textarea placeholder={placeholder} ref={ref} {...rest} />
				</label>
				{error && <div>{error?.message}</div>}
			</>
		)
	}
)
export default TextArea
