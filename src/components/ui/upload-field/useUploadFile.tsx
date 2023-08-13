import { toastError } from '@/api/api.helper'
import { MediaServer } from '@/services/media/media.service'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useMutation } from 'react-query'

export const useUploadFile = (
	onChange: (...event: any) => void,
	folder?: string,
	setValue?: (val: number) => void,
	setIsChosen?: Dispatch<SetStateAction<boolean>>
) => {
	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => MediaServer.upload(data, folder, setValue),
		{
			onSuccess: ({ data }) => {
				onChange(data)
			},
			onError: (error: any) => {
				alert(toastError(error))
			}
		}
	)

	const uploadForm = async (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files

		if (!file?.length) return null

		setIsChosen && setIsChosen(true)

		const formData = new FormData()
		formData.append('file', file[0])
		await mutateAsync(formData)
	}

	return { uploadForm }
}
