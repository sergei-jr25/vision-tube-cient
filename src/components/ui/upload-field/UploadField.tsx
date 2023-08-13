import { FC } from 'react'
import styles from './UploadField.module.scss'
import { IUploadField } from './upload-field.interface'
import { useUploadFile } from './useUploadFile'

const UploadField: FC<IUploadField> = ({
	isSetChosen,
	onChange,
	setValue,
	folder,
	title,
	className
}) => {
	const { uploadForm } = useUploadFile(onChange, folder, setValue, isSetChosen)
	return (
		<div className={styles.uploadFiled}>
			{title && <div className={className}>{title}</div>}
			<label className={styles.uploadFiled__label}>
				<span>Browse...</span>
				<input type='file' onChange={uploadForm} />
				{/* {!isSetChosen && (
					<div className={styles.uploadFiled__info}>No file selected</div>
				)} */}
			</label>
		</div>
	)
}
export default UploadField
