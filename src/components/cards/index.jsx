import './cards.style.css';

export default function Cards({ props }) {
	return (
		<div className='content-cards-item-container'>
			<img src={props.imagePath} alt='' />
			<h3>{props.title}</h3>
			<span>{props.content}</span>
			<a href={props.url}>> Learn More</a>
		</div>
	);
}
