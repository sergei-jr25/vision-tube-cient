'use client'

import { IVideo } from '@/types/video.interface'
import { FC } from 'react'
import Catalog from './catalog/Catalog'
import Discover from './discover/Discover'
import { IHome } from './home.inreface'

const Home: FC<IHome> = ({ newVideos, topVideo }) => {
	const randomVideo: IVideo[] = newVideos.filter(
		video => video.id !== topVideo[0].id || []
	)
	return (
		<div>
			<Discover topVideo={topVideo[0]} randomVideo={randomVideo[0]} />
			<Catalog newVideos={newVideos} />
		</div>
	)
}
export default Home
