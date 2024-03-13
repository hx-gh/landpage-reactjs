import React from 'react';

export function parseContent(content) {
	return content.split('\n').map((paragraph, index) => (
		<React.Fragment key={index}>
			{paragraph}
			<br /> {/* Insert <br> tag after each paragraph */}
		</React.Fragment>
	));
}
