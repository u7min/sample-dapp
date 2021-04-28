import React, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import {zombieContract} from './SmartContract';

const Header = styled.header`
	margin-bottom: 30px;
`;
const MessageBox = styled.div`
	width: 90%;
	height: 30px;
	background-color: aquamarine;
	border: 1px solid cadetblue;
	margin-top: 10px;
`;

export default () => {
	const [message, setMessage] = useState('');
	return (
		<Header>
			<Link to={`/zombies`}>My</Link>&nbsp;
			<Link to={`/create-zombie`}>Create Zombie</Link>
			{message ? <MessageBox>Message</MessageBox> : <></>}
		</Header>
	);
};
