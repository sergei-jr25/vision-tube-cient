'use client'
import { persistor, store } from '@/store/store'
import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import { PersistGate } from 'redux-persist/integration/react'

const MainProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
	const queryClient = new QueryClient()

	return (
		<div>
			<PersistGate loading={null} persistor={persistor}>
				<Provider store={store}>
					<QueryClientProvider client={queryClient}>
						<ReduxToastr
							timeOut={4000}
							newestOnTop={false}
							preventDuplicates
							position='top-right'
							transitionIn='fadeIn'
							transitionOut='fadeOut'
							progressBar
							closeOnToastrClick
						/>
						{children}
					</QueryClientProvider>
				</Provider>
			</PersistGate>
		</div>
	)
}
export default MainProvider
