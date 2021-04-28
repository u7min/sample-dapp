import React, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import {zombieContract} from './SmartContract';

const Header = styled.header`
	margin-bottom: 30px;
`;
const MessageBox = styled.div`
	width: 90%;
	background-color: khaki;
	border: 0px;
	margin-top: 10px;
	padding: 10px 0px 7px 10px;
`;

export default () => {
	const [message, setMessage] = useState();
	useEffect(() => {
		zombieContract
			.getAccount()
			.then((account) => window.localStorage.setItem('account', account));
		zombieContract.transferEvent(
			(event) =>
				setMessage(
					`Received '${event.returnValues['_tokenId']}' Zombies.`,
				),
			(error) => console.error(error),
		);
	}, []);
	return (
		<Header>
			<Link to={`/zombies`}>My</Link>&nbsp;
			<Link to={`/create-zombie`}>Create Zombie</Link>
			{message ? <MessageBox>{message}</MessageBox> : <></>}
		</Header>
	);
};
