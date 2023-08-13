import useDebounce from '@/hooks/useDebaunce'
import { videoApi } from '@/services/api/video.api'
import { ChangeEvent, useState } from 'react'

export const useSearch = () => {
	const [search, setSearch] = useState('')
	const debounce = useDebounce(search, 500)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	const { data, isSuccess } = videoApi.useGetVideosBySearchTermQuery(debounce, {
		skip: !debounce,
		selectFromResult: ({ data, ...rest }) => ({
			data: data?.slice(0, 4),
			...rest
		})
	})

	return { handleSearch, search, data, isSuccess }
}
