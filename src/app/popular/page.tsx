import Trending from '@/components/screens/Trednding/Trending'

async function getData() {
	const resPopluarVideo = await fetch(
		`${process.env.APP_URL}/video/most-popular`,
		{
			next: { revalidate: 60 }
		}
	)
	return resPopluarVideo.json()
}

export default async function Page() {
	const res = await getData()

	return <Trending topVideos={res} />
}
