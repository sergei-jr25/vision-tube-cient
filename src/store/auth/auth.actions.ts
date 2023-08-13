import { toastError } from '@/api/api.helper'
import { IAuthField } from '@/components/layout/header/auth-form/auth.interface'
import { IAuth } from '@/services/auth/auth.helper'
import { AuthServer } from '@/services/auth/auth.server'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

export const register = createAsyncThunk<IAuth, IAuthField>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthServer.register(email, password)
			toastr.success('Регистрация', 'Успешно выполнена')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuth, IAuthField>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthServer.login(email, password)
			toastr.success('Вход', 'Успешно выполнен')
			return response
		} catch (error) {
			toastError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', () => {
	toastr.success('Вы вышли ', 'из аккаунта')
})
