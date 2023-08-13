'use client'

import { IVideo } from '@/types/video.interface'
import { FC } from 'react'
import Catalog from '../Home/catalog/Catalog'

const Trending: FC<{ topVideos: IVideo[] }> = ({ topVideos }) => {
	return (
		<div>
			<Catalog newVideos={topVideos} />
		</div>
	)
}
export default Trending
