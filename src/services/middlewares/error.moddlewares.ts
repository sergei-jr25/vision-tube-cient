import { toastError } from '@/api/api.helper'
import {
	isRejectedWithValue,
	Middleware,
	MiddlewareAPI
} from '@reduxjs/toolkit'

// export const rtqQueryErrorLoader: Middleware = (api:MiddlewareAPI) => next => action => {
// 	if(isRejectedWithValue(action)) {
// 		toastError(action.error, 'RTK error')
// 	}

// 	return next(action)
// }

export const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => next => action => {
		// RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
		if (isRejectedWithValue(action)) {
			toastError(action.payload.data, 'RTK error')
		}

		return next(action)
	}
