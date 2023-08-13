import Trending from '@/components/screens/Trednding/Trending'
import axios from 'axios'

async function getData() {
	const { data } = await axios.get(
		'http://localhost:5000/api/video/most-popular'
	)

	return data
}

const TrendingPage = async () => {
	const topVideos = await getData()

	return (
		<div>
			<Trending topVideos={topVideos} />
		</div>
	)
}
export default TrendingPage
