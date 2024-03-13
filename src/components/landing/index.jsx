import Sidebar from '../sidebar';
import Header from '../header';
import './landing.style.css';

export default function Landing() {
	return (
		<>
			<div>
				<Header />
			</div>

			<div>
				<Sidebar />
			</div>
			<div className='landing-body-holder'>
				<div className='landing-body-items-container'>
					<p>
						Discover all possibilities of using this powerfull
						tool and create science figures, posters and
						infographics.
					</p>
					<button className='button purple-style'>
						Start creating now
					</button>
				</div>
				<div className='landing-body-image-container'>
					<img src='/head-02.png' alt='Application example' />
				</div>
			</div>
		</>
	);
}
