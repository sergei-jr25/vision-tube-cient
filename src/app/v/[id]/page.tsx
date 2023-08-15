import Video from '@/components/screens/video/Video'

type Props = {
	params: {
		id: number
	}
}

const page = ({ params: { id } }: Props) => {
	return (
		<div>
			<Video id={id} />
		</div>
	)
}
export default page
