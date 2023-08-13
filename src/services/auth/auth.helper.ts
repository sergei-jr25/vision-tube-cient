export interface IAuth {
	user: {
		email: string
		id: number
	} | null

	accessToken: string
	isLoading?: boolean
}
