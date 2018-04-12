import { h, render } from 'preact'
import './style.scss'
import image from './image.png'
const App = () => (
	<div>
		Hello
		<div>
			<img src={image} />
		</div>
	</div>
)

render(<App />, document.body)
