import './app.style.css';
import '../styles/index.css';
import Landing from '../components/landing';
import Cards from '../components/cards';
import SecondaryCard from '../components/secondaryCard/secondaryCard';
import { DefaultCards, SecondaryCards } from '../utils/jsonsToBeExported';

function App() {
	return (
		<>
			<section className='header-section'>
				<Landing />
			</section>
			<section className='content-section'>
				<div className='content-cards-holder'>
					<h1>Visualize what Mind the Graph can do for you</h1>
					<div className='content-cards-item-holder'>
						{DefaultCards.map((cardItem) => {
							return <Cards props={cardItem} />;
						})}
					</div>
				</div>
				<div className='content-cards-holder-purple'>
					<h1>Create effective science figures in minutes</h1>
					<span className='content-cards-text-purple'>
						We built Mind the Graph for simplicity. The
						platform is easy to use and just about anybody can
						use it to create great infographics and
						presentations - from beginners to professionals,
						individuals to groups and small labs to large
						organisations
					</span>
					<div className='secondary-content-cards-item-holder'>
						{SecondaryCards.map((cardItem) => {
							return <SecondaryCard props={cardItem} />;
						})}
					</div>
					<div className='content-cards-button-holder-purple'>
						<button className='button transparent-style'>
							EXPLORE MIND THE GRAPH
						</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
