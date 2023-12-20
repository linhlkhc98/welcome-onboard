import React, { useState } from 'react'
import Web3 from 'web3'
import contractABI from '../assets/contractABI.json'

const web3 = new Web3("https://mainnet.infura.io/v3/c9beb7caa77b4873b8eb177b106a8770")
const contractAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"


const Exercise2 = () => {
    const [balance, setBalance] = useState('')
    const getBlanceUSDC = async () => {
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const balanceOf = await contract.methods.balanceOf("0x89f58d9C04dd3d27D864CB79AFE70bb69890Ff3c").call()
        setBalance(balanceOf)
    }

    return <>
        <h3>Exercise 2</h3>
        <button onClick={getBlanceUSDC}>Get Wallet Balance</button>
        <div><span><b>Balance: </b>{balance}</span></div>
    </>
}

export default Exercise2