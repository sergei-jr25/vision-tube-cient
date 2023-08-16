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
console.log(newVideos);

	return (
		<main>
			<Home
				newVideos={newVideos.data || []}
				topVideo={popluarVideo.data || []}
			/>
		</main>
	)
}

// export const getStaticProps: GetStaticProps = async () => {
// 	try {
// 		const { data: newVideo } = await VideoServer.getAll()
// 		const { data: topVideos } = await VideoServer.getMostPopular()
// 		const randomVideo = newVideo.filter(
// 			video => video.id !== topVideos.id || []
// 		)
// 		return {
// 			props: {
// 				newVideo,
// 				topVideos: topVideos,
// 				randomVideo
// 			}
// 		}
// 	} catch (error) {
// 		return {
// 			props: {
// 				newVideo: [],
// 				topVideos: {},
// 				randomVideo: {}
// 			}
// 		}
// 	}
// }
// async function getData() {
// 	const res = await fetch('https://api.example.com/...')
// 	// The return value is *not* serialized
// 	// You can return Date, Map, Set, etc.
// 	return res.json()
// }

// This is an async Server Component
