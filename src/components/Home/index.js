import { h, Component } from 'preact'
import './styles.scss'
class Home extends Component {
	render() {
		return (
			<div>
				Home Route<a href="/notfound">Not Found</a>
			</div>
		)
	}
}

export default Home
