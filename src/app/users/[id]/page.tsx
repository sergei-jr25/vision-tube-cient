import UserEdit from '@/components/screens/UserEdit/UserEdit'
import { IProfileDto } from '@/types/user.interface'
import axios from 'axios'

type Props = {
	params: {
		id: string
	}
}

export async function generateStaticParams() {
	const { data } = await axios.get(`${process.env.APP_URL}/users`)
	return data.map((user: IProfileDto) => ({
		id: user.id.toString()
	}))
}

async function getDate(id: number) {
	const { data } = await axios.get(`${process.env.APP_URL}/users/by-id/${id}`)
	return data
}

const PageUser = async ({ params: { id } }: Props) => {
	const user = await getDate(+id)

	return <UserEdit userId={user.id} />
}
export default PageUser
