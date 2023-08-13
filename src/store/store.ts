import { api } from '@/services/api/api'
import { rtkQueryErrorLogger } from '@/services/middlewares/error.moddlewares'
import { configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	REGISTER,
	REHYDRATE
} from 'redux-persist'
import { PURGE } from 'redux-persist/lib/constants'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { rootReducers } from './root-reducers'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
			.concat(rtkQueryErrorLogger)
			.concat(api.middleware)
})

export const persistor = persistStore(store)

export type TypeRootStore = ReturnType<typeof rootReducers>
