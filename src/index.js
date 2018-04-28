import { h, render } from 'preact'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Router from 'preact-router'
import AsyncRoute from 'preact-async-route'
import init from './registerServiceWorker'
import 'preact/debug'
import './style.scss'

init()
const App = () => (
	<Router>
		<Home path="/" />
		<NotFound default />
	</Router>
)

render(<App />, document.body)
