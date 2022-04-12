import { useEffect, useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi, contractAddress } from '../constants/contract';
import isAuth from "../hoc/isAuth";
const Mint = () => {
    const [amount, setAmount] = useState(0);
    const { runContractFunction, isFetching, isLoading } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: 'store',
        params: {
            _favoriteNumber: 6
        }
    });
    useEffect(() => {
        setAmount(x => x++)
    }, [])
     console.log(amount);
    return (
        <section className="mint-wrapper" >
            <div className="description" >
                <h2>WeirdNeckz consists of 10,000 Weird collectibles</h2>
                <p className="info" > The initial collection will not only include cool art, but also work as a membership allowing access to future projects incl.game development, 3d art, experiences and more…</p >
                <div className="actions-wrapper" >
                    <a href="#" className="btn btn-green">Mint</a >
                    <div className="input-wrapper" >
                        <img src="/images/minus.png" onClick={() => setAmount(x => x-1)} />
                        <input value={amount} type="number" className="input" onChange={(x) => setAmount(x.target.value)} />
                        <img src="/images/plus.png" onClick={() => setAmount(x => x+1)} />
                    </div >

                </div >
            </div >
        </section >)
}

export default isAuth(Mint);