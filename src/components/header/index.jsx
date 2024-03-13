import Logo from '../../assets/logo.svg';
import './header.style.css';

export default function Header() {
	return (
		<div className='header'>
			<div className='header-container'>
				<div className='header-image-holder'>
					<div className='header-image-container'>
						<img src={Logo} alt='Landpage logo' />
					</div>
				</div>
				<div className='header-navigation-holder'>
					<div className='header-navigation-item'>
						<a href=''>Templates</a>
					</div>
					<div className='header-navigation-item'>
						<a href=''>Pricing</a>
					</div>
					<div className='header-navigation-item'>
						<a href=''>Blog</a>
					</div>
					<div className='header-navigation-item'>
						<a href=''>Jobs</a>
					</div>
					<div className='header-navigation-item'>
						<button className='button transparent-style'>
							Login
						</button>
					</div>
					<div className='header-navigation-item'>
						<button className='button purple-style'>
							Sign up free
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
