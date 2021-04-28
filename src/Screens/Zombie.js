import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {zombieContract as contract} from '../Components/SmartContract';
import {Link, useHistory} from 'react-router-dom';
import Loader from '../Components/Loader';

const Content = styled.div``;
const Title = styled.div`
	font-size: 30px;
	margin-bottom: 30px;
`;
const H1 = styled.div`
	font-size: 20px;
`;

const Zombie = (props) => {
	const history = useHistory();
	const {
		match: {
			params: {id},
		},
	} = props;
	const [zombie, setZombie] = useState([]);
	const [zombieOwner, setZombieOwner] = useState('');
	const [toName, setToName] = useState('');
	const [loading, setLoading] = useState(false);

	const handleChange = ({target: {value}}) => setToName(value);
	const handleTransferSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		await contract.transfer(
			toName,
			id,
			(receipt) => history.push('/zombies'),
			(error) => console.log('Failure', error),
		);
	};
	useEffect(() => {
		contract.getZombieDetails(id).then((zombie) => {
			setZombie(zombie);
		});
		contract.zombieToOwner(id).then((owner) => {
			setZombieOwner(owner);
		});
	}, []);
	return (
		<Content>
			<Title>Zombie: {zombie.name}</Title>
			<ul>
				<li>name: {zombie.name}</li>
				<li>level: {zombie.level}</li>
				<li>dna: {zombie.dna}</li>
				<li>win: {zombie.winCount}</li>
				<li>loss: {zombie.lossCount}</li>
				<li>readyTime: {zombie.readyTime}</li>
				<li>
					owner:
					<Link to={`/profile/${zombieOwner}`}>{zombieOwner}</Link>
				</li>
			</ul>
			<br />
			{loading ? (
				<Loader text='Processing...' />
			) : (
				<form onSubmit={handleTransferSubmit}>
					<input
						type='text'
						name='toName'
						placeholder='to'
						onChange={handleChange}
					/>
					<button>Transfer</button>
				</form>
			)}
		</Content>
	);
};

export default Zombie;
