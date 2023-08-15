import Trending from '@/components/screens/Trednding/Trending'
import { IVideo } from '@/types/video.interface'
import axios from 'axios'

async function getData() {
	const { data } = await axios.get<IVideo[]>(`${process.env.APP_URL}/comments`)
	return data
}

export default async function Page() {
	const res = await getData()

	return <Trending topVideos={res} />
}
