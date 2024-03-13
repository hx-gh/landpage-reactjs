import './secondaryCard.style.css';

export default function SecondaryCard({props}) {
	return (
		<div className='seconday-cards-item-container'>
			<img src={props.imagePath} alt='' />
			<h3>{props.title}</h3>
			<span>{props.content}</span>
		</div>
	);
}
