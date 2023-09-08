import { FC } from 'react'
import styles from './Header.module.scss'
import IconRight from './icon-right/IconRight'
import Search from './search/Search'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={`${styles.header__container}`}>
				<Search />
				<IconRight />
				{/* <ProfileMenu />
				<UploadVideo /> */}
			</div>
		</div>
	)
}
export default Header
