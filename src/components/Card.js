import React from 'react';

export default function Card(props) {
	return (
		<div className="card" onClick={props.handleClick}>
			<img src={require(`../assets/${props.value}.png`)} alt="artwork" />
		</div>
	);
}
