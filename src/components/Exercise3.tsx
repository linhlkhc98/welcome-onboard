import React from 'react'
import Web3 from 'web3'
import contractABI_BSC from '../assets/contractABI_BSC.json'

const web3BSC = new Web3("https://bsc-testnet.blockpi.network/v1/rpc/public")
const contractAddressBSC = "0xc06fdEbA4F7Fa673aCe5E5440ab3d495133EcE7a"
const PRIVATE_KEY = "0xc16216370ca6f0c9396eadbd417fa5a02fb390e9aeb17255dbc0b96d82978790"

const Exercise3 = () => {

    const setBlockchainTest = async () => {
        web3BSC.eth.accounts.wallet.add(PRIVATE_KEY)
        const account = web3BSC.eth.accounts.wallet[0].address
        const contract = new web3BSC.eth.Contract(contractABI_BSC, contractAddressBSC);
        try {
            await contract.methods.set("Hau Linh").send({
                from: account,
                gas: 30000,
                gasPrice: web3BSC.utils.toWei('10', 'gwei'),
            })
        } catch (error) {
            console.log({ error })
        }
    }

    return (
        <div>
            <h3>
                Exercise 3
            </h3>
            <button onClick={setBlockchainTest}>setBlockchainTest</button>
        </div>
    )
}

export default Exercise3