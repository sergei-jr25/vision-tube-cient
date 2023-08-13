import { API_UPLOAD_IMG } from '@/api/http'
import { IUser } from '@/types/user.interface'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import styles from './UserAvatar.module.scss'

const UserAvatar: FC<{ user: IUser; isWhite?: boolean }> = ({
	user,
	isWhite
}) => {
	return (
		<div>
			<div className={cn(styles.avatar, { [styles.white]: isWhite })}>
				<Link href={`/c/${user.id}`}>
					<Image
						fill
						alt={user.name}
						src={`${API_UPLOAD_IMG}/default/${user.avatarPath}`}
						className={styles.avatar__image}
					/>
				</Link>
				{user.isVerified && (
					<span>
						<IoIosAddCircle />
					</span>
				)}
			</div>
		</div>
	)
}
export default UserAvatar
