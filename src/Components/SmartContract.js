import Web3 from 'web3';
import cryptoZombiesABI from '../Abi/CryptoZombies_Abi';

const contractAddress = '0x64f18f7c62D0a9c816Ba2d2636F5e34E031BFAc3';
let contract;
let web3;

if (typeof window['web3'] != 'undefined') {
	web3 = new Web3(window['web3'].currentProvider);
	contract = new web3.eth.Contract(cryptoZombiesABI, contractAddress);
}

export const zombieContract = {
	getZombiesByOwner: async (zombieOwner) => {
		let owner = zombieOwner;
		if (!owner) {
			const accounts = await web3.eth.getAccounts();
			owner = accounts[0];
		}
		return contract.methods.getZombiesByOwner(owner).call();
	},
	getZombieDetails: (id) => {
		return contract.methods.zombies(id).call();
	},
	createRandomZombie: async (name, callback, error) => {
		const accounts = await web3.eth.getAccounts();
		return contract.methods
			.createRandomZombie(name)
			.send({from: accounts[0]})
			.on('receipt', callback)
			.on('error', error);
	},
	zombieToOwner: (id) => {
		return contract.methods.zombieToOwner(id).call();
	},
	ownerZombieCount: (owner) => {
		return contract.methods.ownerZombieCount(owner).call();
	},
	getZombies: () => {
		return contract.methods.zombies().call();
	},
	transfer: async (toName, id, callback, error) => {
		const accounts = await web3.eth.getAccounts();
		return contract.methods
			.transfer(toName, id)
			.send({from: accounts[0]})
			.on('receipt', callback)
			.on('error', error);
	},
};
