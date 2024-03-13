import React, { useState } from 'react';
import './sidebar.style.css';

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className='toggle-btn' onClick={toggleSidebar}>
				<span>
					<svg viewBox='0 0 100 80' width='30' height='30'>
						<rect width='100' height='10'></rect>
						<rect y='30' width='100' height='10'></rect>
						<rect y='60' width='100' height='10'></rect>
					</svg>
				</span>
			</div>
			<div className={isOpen ? 'sidebar open' : 'sidebar'}>
				<div className='sidebar-content'>
					<div
						onClick={toggleSidebar}
						className='sidebar-toggle-btn'
					>
						<span>
							<svg
								viewBox='0 0 100 80'
								width='30'
								height='30'
							>
								<rect width='100' height='10'></rect>
								<rect
									y='30'
									width='100'
									height='10'
								></rect>
								<rect
									y='60'
									width='100'
									height='10'
								></rect>
							</svg>
						</span>
						<img src='/mtg-logo-red.svg' alt='' />
					</div>
					<div className='sidebar-item'>
						<a href=''>Templates</a>
					</div>
					<div className='sidebar-item'>
						<a href=''>Pricing</a>
					</div>
					<div className='sidebar-item'>
						<a href=''>Blog</a>
					</div>
					<div className='sidebar-item'>
						<a href=''>Jobs</a>
					</div>
					<div className='sidebar-item'>
						<a>Login</a>
					</div>
					<div className='sidebar-item'>
						<a>Sign up free</a>
					</div>
				</div>
			</div>
		</>
	);
}
