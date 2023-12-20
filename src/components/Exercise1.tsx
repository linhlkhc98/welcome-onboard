import React, { useState } from 'react'
import Web3 from 'web3'

const rpcURL = "https://rpc.sepolia.org"

const web3 = new Web3(rpcURL)

const accountFrom = {
    privateKey: '4ecd1deae74c7928deb5c068d390dc34443633a552e713fdd99ca38edb0731e8',
    address: '0x0E6C59Dbe75762Ff8b127bB813BdE5aDDCba6cf3',
};
const addressTo = '0xCb2fe76a68f57a4723b694D1e898e5aaDfDB86eC';


const Exercise1 = () => {
    const [balance, setBalance] = useState("")

    const getWalletBalance = async () => {
        const balance = await web3.eth.getBalance("0x0E6C59Dbe75762Ff8b127bB813BdE5aDDCba6cf3")
        setBalance(balance)
    }

    const transferWithWeb3AndPrivateKey = async () => {

        // 4. Sign transaction with PK
        const createTransaction = await web3.eth.accounts.signTransaction(
            {
                gas: 21000,
                to: addressTo,
                value: web3.utils.toWei('0.01', 'ether'),
                gasPrice: await web3.eth.getGasPrice(),
                nonce: await web3.eth.getTransactionCount(accountFrom.address),
            },
            accountFrom.privateKey
        );

        // 5. Send transaction and wait for receipt
        const createReceipt = await web3.eth.sendSignedTransaction(
            createTransaction.rawTransaction as string
        );

        if (createReceipt.transactionHash) {
            alert('transfer success')
        }
    };

    const transferWithCoin98Ex = async () => {
        const signature = await window.ethereum.request({
            method: 'eth_signTransaction',
            params: [{
                from: "0xF38825145AE74f7A58a0d382de01B1DD349FfaA3",
                to: "0x41b6455dadb18D750899963d0429137350130cCA",
                gas: 21000,
                value: web3.utils.toWei('0.01', 'ether'),
                gasPrice: await web3.eth.getGasPrice(),
                nonce: await web3.eth.getTransactionCount("0xF38825145AE74f7A58a0d382de01B1DD349FfaA3"),
            }
            ]
        });

        await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [{
                from: "0xF38825145AE74f7A58a0d382de01B1DD349FfaA3",
                to: "0x41b6455dadb18D750899963d0429137350130cCA",
                gas: 21000,
                value: web3.utils.toWei('0.01', 'ether'),
                gasPrice: await web3.eth.getGasPrice(),
                nonce: await web3.eth.getTransactionCount("0xF38825145AE74f7A58a0d382de01B1DD349FfaA3"),
            }
            ]
        })
    }

    return <>
        <h3>Exercise 1</h3>
        <button onClick={getWalletBalance}>Get Wallet Balance</button>
        <div><span><b>Balance: </b>{balance}</span></div>
        <button onClick={transferWithWeb3AndPrivateKey}>Transfer using Web3.js and Wallet Private Key</button>
        <button onClick={transferWithCoin98Ex}>Transfer using Coin98 Extension</button>
    </>
}

export default Exercise1