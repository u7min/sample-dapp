import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {zombieContract} from '../Components/SmartContract';
import Loader from '../Components/Loader';

const CreateZombie = () => {
	const history = useHistory();
	const [name, setName] = useState('');
	const [loading, setLoading] = useState(false);
	const handleChange = ({target: {value}}) => setName(value);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		await zombieContract.createRandomZombie(
			name,
			(receipt) => history.push('/zombies'),
			(error) => console.log('Failure', error),
		);
	};

	return loading ? (
		<Loader text='Processing...' />
	) : (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='name'
				placeholder='name'
				onChange={handleChange}
			/>
			<button>Create</button>
		</form>
	);
};

export default CreateZombie;
