import { FC } from 'react'
import { MdCheckCircle, MdUpload } from 'react-icons/md'
import styles from './FooterForm.module.scss'

const FooterForm: FC<{ percent: number; isUploaded: boolean }> = ({
	isUploaded,
	percent
}) => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__body}>
				<div className={styles.footer__icon}>
					{isUploaded ? <MdCheckCircle /> : <MdUpload />}
				</div>

				<span className={styles.footer__text}>
					{isUploaded ? 'Video is uploaded' : `Uploading ${percent}%...`}
				</span>
			</div>
			<div className={styles.footer__button}>
				<button>Save</button>
			</div>
		</div>
	)
}
export default FooterForm
