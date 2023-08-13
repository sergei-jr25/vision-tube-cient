import VideoEdit from '@/components/screens/video-edit/VideoEdit'

type Props = {
	params: { id: number }
}

const EditPage = ({ params: { id } }: Props) => {
	return <VideoEdit id={id} />
}
export default EditPage
