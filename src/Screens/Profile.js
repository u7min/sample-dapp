import React, {useState, useEffect} from 'react';
import {zombieContract as contract} from '../Components/SmartContract';
import styled from 'styled-components';
import Zombie from '../Components/Zombie';

const Content = styled.div``;
const Title = styled.div`
	font-size: 30px;
	margin-top: 30px;
`;
const Grid = styled.div`
	margin-top: 25px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 220px);
	grid-gap: 25px;
`;

const Profile = (props) => {
	const {
		match: {
			params: {owner},
		},
	} = props;
	console.log(owner);
	const [zombies, setZombies] = useState([]);
	const [zombieCount, setZombieCount] = useState(0);

	const getZombieDetails = (id) => {
		return contract.getZombieDetails(id);
	};
	useEffect(() => {
		contract
			.getZombiesByOwner(owner)
			.then((zombies) => setZombies(zombies));
		// contract.ownerZombieCount(owner).then((count) => setZombieCount(count));
	}, []);

	return (
		<Content>
			<Title>Profile: {owner}</Title>
			<Grid>
				{zombies.map((zombie) => (
					<Zombie
						key={zombie}
						id={zombie}
						getZombieDetails={getZombieDetails}
					/>
				))}
			</Grid>
		</Content>
	);
};

export default Profile;
