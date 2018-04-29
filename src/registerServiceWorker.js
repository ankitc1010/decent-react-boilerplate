const init = () => {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			navigator.serviceWorker
				.register('/sw.js')
				.then(registration => {
					console.log('SW registered: ', registration)
					// if (process.env.NODE_ENV === 'development') {
					// 	registration.unregister().then(function(boolean) {
					// 		console.log('Service Worker unregistered')
					// 	})
					// }
				})
				.catch(registrationError => {
					console.log('SW registration failed: ', registrationError)
				})
		})
	}
}

export default init
