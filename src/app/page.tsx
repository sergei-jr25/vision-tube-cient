import Home from '@/components/screens/Home/Home'

async function getData() {
	// const newVideos = await axios.get<IVideo[]>(`${process.env.APP_URL}/video`)
	const resNewVideos = await fetch(`${process.env.APP_URL}/video`, {
		next: { revalidate: 60 }
	})
	const resPopluarVideo = await fetch(
		`${process.env.APP_URL}/video/most-popular`,
		{
			next: { revalidate: 60 }
		}
	)
	return {
		newVideos: await resNewVideos.json(),
		popluarVideo: await resPopluarVideo.json()
	}
}

export default async function Page() {
	const { newVideos, popluarVideo } = await getData()

	return (
		<main>
			<Home newVideos={newVideos || []} topVideo={popluarVideo || []} />
		</main>
	)
}
