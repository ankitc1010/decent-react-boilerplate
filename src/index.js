import { h, render } from 'preact'
import init from './registerServiceWorker'
import 'preact/debug'
import './style.scss'

init()
const App = () => <div>Hello from Preact, Lets start Yeap yoo!</div>

render(<App />, document.body)
