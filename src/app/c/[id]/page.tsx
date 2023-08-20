import Channel from '@/components/screens/Channel/Channel'

type Props = {
	params: {
		id: number
	}
}

async function getData(id: number) {
	const data = await fetch(`${process.env.APP_URL}/users/by-id/${Number(id)}`)

	return data.json()
}

const ChannelPage = async ({ params: { id } }: Props) => {
	const channel = await getData(id)

	return <Channel channel={channel} />
}

// export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
// 	try {
// 		const { data: users } = await UserServer.getAll()
// 		const paths = users.map(user => ({
// 			params: { id: String(user.id) }
// 		}))

// 		return {
// 			paths,
// 			fallback: 'blocking'
// 		}
// 	} catch (error) {
// 		return {
// 			paths: [],
// 			fallback: false
// 		}
// 	}
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	try {
// 		const { data: channel } = await UserServer.getById(Number(params?.id))

// 		return {
// 			props: {
// 				channel
// 			}
// 		}
// 	} catch (error) {
// 		return {
// 			props: {
// 				channel: {}
// 			}
// 		}
// 	}
// }

export default ChannelPage
