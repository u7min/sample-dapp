import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CharacterBox = styled.div``;

const Zombie = ({id, getZombieDetails}) => {
	const [zombie, setZombie] = useState({});
	useEffect(() => {
		getZombieDetails(id).then((zombie) => {
			setZombie(zombie);
		});
	}, []);
	return (
		<CharacterBox>
			<ul>
				<li>
					name: <Link to={`/zombies/${id}`}>{zombie.name}</Link>
				</li>
				<li>level: {zombie.level}</li>
				<li>dna: {zombie.dna}</li>
				<li>win: {zombie.winCount}</li>
				<li>loss: {zombie.lossCount}</li>
				<li>readyTime: {zombie.readyTime}</li>
			</ul>
		</CharacterBox>
	);
};

export default Zombie;
