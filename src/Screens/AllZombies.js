import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {zombieContract as contract} from '../Components/SmartContract';
import Zombie from '../Components/Zombie';

const Title = styled.div`
	font-size: 30px;
	margin-bottom: 30px;
`;

const Grid = styled.div`
	margin-top: 25px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 220px);
	grid-gap: 25px;
`;

const AllZombies = () => {
	const [zombies, setZombies] = useState([]);
	useEffect(() => {
		contract.getZombies().then((zombies) => {
			setZombies(zombies);
		});
	}, []);
	const getZombieDetails = (id) => {
		return contract.getZombieDetails(id);
	};
	return (
		<>
			<Title>My Zombies</Title>
			{zombies.length > 0 ? (
				<Grid>
					{zombies.map((zombie) => (
						<Zombie
							key={zombie}
							id={zombie}
							getZombieDetails={getZombieDetails}
						/>
					))}
				</Grid>
			) : (
				<div>Nothing found. </div>
			)}
		</>
	);
};

export default AllZombies;
