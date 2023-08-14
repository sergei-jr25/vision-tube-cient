import { Switch } from '@headlessui/react'
import cn from 'clsx'
import { FC } from 'react'
import styles from './TogglePublic.module.scss'

interface ITogglePublic {
	isEnabled: boolean
	clickHandler: () => void
}
const TogglePublic: FC<ITogglePublic> = ({ clickHandler, isEnabled }) => {
	return (
		<div className={styles.toggle}>
			<Switch onChange={clickHandler} checked={isEnabled}>
				<span
					className={cn(styles.point, {
						[styles.bold]: isEnabled,
						[styles.normal]: !isEnabled
					})}
				></span>
			</Switch>

			<span className={styles.value} onClick={clickHandler}>
				Публичное видео
			</span>
		</div>
	)
}
export default TogglePublic
