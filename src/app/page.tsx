import Home from '@/components/screens/Home/Home'
import { IVideo } from '@/types/video.interface'
import axios from 'axios'

async function getData() {
	const newVideos = await axios.get<IVideo[]>(`${process.env.APP_URL}/video`)
	const popluarVideo = await axios.get<IVideo[]>(
		`${process.env.APP_URL}/video/most-popular`
	)
	return {
		newVideos,
		popluarVideo
	}
}

export default async function Page() {
	const { newVideos, popluarVideo } = await getData()

	return (
		<main>
			<Home
				newVideos={newVideos.data || []}
				topVideo={popluarVideo.data || []}
			/>
		</main>
	)
}
