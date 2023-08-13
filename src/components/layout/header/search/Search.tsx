import VideoItem from '@/components/ui/video-item/VideoItem'
import { FC } from 'react'
import styles from './Search.module.scss'
import { useSearch } from './useSearch'

const Search: FC = () => {
	const { data, isSuccess, handleSearch, search } = useSearch()
	console.log('data', isSuccess)

	return (
		<div className={styles.search}>
			<label className={styles.search__label}>
				<input
					value={search}
					onChange={handleSearch}
					className={styles.search__input}
					placeholder='Поиск видео'
					type='text'
				/>
			</label>
			{isSuccess &&
				(data ? (
					<div>
						{data?.map(video => (
							<VideoItem key={video.id} video={video} />
						))}
					</div>
				) : (
					<div className={styles.search__text}>Видео не найдено</div>
				))}
		</div>
	)
}
export default Search
