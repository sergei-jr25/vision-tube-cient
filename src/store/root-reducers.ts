import { api } from '@/services/api/api'
import { combineReducers } from '@reduxjs/toolkit'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { authSlice } from './auth/auth.slice'

export const rootReducers = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authSlice.reducer,
	toastr: toastrReducer
})
