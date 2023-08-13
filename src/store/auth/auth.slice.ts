import { IAuth } from '@/services/auth/auth.helper'
import { createSlice } from '@reduxjs/toolkit'
import { login, logout, register } from './auth.actions'

const initialState: IAuth = {
	accessToken: '',
	user: null,
	isLoading: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(register.pending, (state, action) => {
			state.isLoading = true
		})
		builder.addCase(register.fulfilled, (state, action) => {
			state.isLoading = false
			state.accessToken = action.payload.accessToken
			state.user = action.payload.user
		})
		builder.addCase(register.rejected, (state, action) => {
			state.isLoading = false
			state.accessToken = ''
			state.user = null
		})
		builder.addCase(login.pending, (state, action) => {
			state.isLoading = true
		})
		builder.addCase(login.fulfilled, (state, action) => {
			state.isLoading = false
			state.accessToken = action.payload.accessToken
			state.user = action.payload.user
		})
		builder.addCase(login.rejected, (state, action) => {
			state.isLoading = false
			state.accessToken = ''
			state.user = null
		})
		builder.addCase(logout.fulfilled, (state, action) => {
			state.isLoading = false
			state.accessToken = ''
			state.user = null
		})
	}
})
