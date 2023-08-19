import { useAction } from '@/hooks/useAction'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOtside'
import { api } from '@/services/api/api'
import cn from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import styles from './ProfileMenu.module.scss'

const ProfileMenu: FC = () => {
	const { user } = useAuth()
	const { replace, push } = useRouter()

	const { logout } = useAction()

	const hadnleLogout = () => {
		logout()
		window.location.reload()
		push('/')
	}

	const { isShow, ref, setIsShow } = useOutside(false)

	const { isError, isLoading, data } = api.useGetProfileQuery(null, {
		skip: !user
	})

	return (
		<div
			className={cn(styles.profile, { [styles.profile_open]: isShow })}
			onClick={() => setIsShow(!isShow)}
		>
			<div className={styles.profile__head}>
				{data?.avatarPath ? (
					<Image
						className={styles.profile__image}
						width={40}
						height={40}
						alt={data.name || ''}
						src={data.avatarPath}
					/>
				) : (
					<span className={styles.profile__icon}>
						{user?.email.slice(0, 1)}
					</span>
				)}

				<span className={styles.profile__name}>{data?.name}</span>
				<div className={styles.profile__arrow}></div>
				{isShow ? <GoChevronUp /> : <GoChevronDown />}
			</div>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: isShow ? 1 : 0, y: isShow ? 0 : -20 }}
				transition={{ duration: 0.3 }}
			>
				{isShow && (
					<div className={styles.profile__body} ref={ref}>
						<ul className={styles.profile__list}>
							<li className={styles.profile__item}>
								<Link href={`/users/${data?.id}`}>Профиль</Link>
							</li>
							<li className={styles.profile__item}>
								<Link href={`/c/${data?.id}`}>Мой канал</Link>
							</li>
							<li className={styles.profile__item}>
								<Link href={`/studio`}>В студию</Link>
							</li>

							<li className={styles.profile__item}>
								<div onClick={hadnleLogout}>Выйти</div>
							</li>
						</ul>
					</div>
				)}
			</motion.div>
		</div>
	)
}
export default ProfileMenu
