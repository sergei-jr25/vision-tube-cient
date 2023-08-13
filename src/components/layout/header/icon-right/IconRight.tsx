import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import AuthForm from '../auth-form/AuthForm'
import ProfileMenu from '../porfile-menu/ProfileMenu'
import UploadVideo from '../upload-video/UploadVideo'
import styles from './IconRight.module.scss'

const IconRight: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<div className={styles.iconright}>
					<ProfileMenu />
					<UploadVideo />
				</div>
			) : (
				<AuthForm />
			)}
		</>
	)
}
export default IconRight
