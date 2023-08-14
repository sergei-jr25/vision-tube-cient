import Video from '@/components/screens/video/Video'
import axios from 'axios'

type Props = {
	params: {
		id: number
	}
}
async function getData(id: number) {
	const { data } = await axios.get(`${process.env.APP_URL}/video/${Number(id)}`)

	return data
}

const page = ({ params: { id } }: Props) => {
	return (
		<div>
			<Video id={id} />
		</div>
	)
}
export default page
