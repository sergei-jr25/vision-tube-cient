import Heading from '@/components/ui/heading/Heading'
import VideoItem from '@/components/ui/video-item/VideoItem'
import { IVideo } from '@/types/video.interface'
import { FC } from 'react'
import styles from './Catalog.module.scss'

interface ICatalog {
	newVideos: IVideo[]
	removeHandler?: (videoId: number) => void
	isUpdateLink?: boolean
}
const Catalog: FC<ICatalog> = ({ newVideos, isUpdateLink, removeHandler }) => {
	return (
		<div className={styles.catalog__catalog}>
			<div className={styles.catalog__title}>
				<Heading title={removeHandler ? 'Мои видео' : 'Рекомендации'} />
			</div>

			<div className={styles.catalog__items}>
				{newVideos.map(video => (
					<VideoItem
						video={video}
						key={video.id}
						removeHandler={removeHandler}
						isUpdateLink={isUpdateLink}
					/>
				))}
			</div>
		</div>
	)
}
export default Catalog
