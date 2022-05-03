import { useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { Link } from "react-router-dom";
import { abi, contractAddress } from '../constants/contract';
import IsAuth from "../hoc/IsAuth";
const Mint = () => {
    const [amount, setAmount] = useState(0);

    const mint = () => {
        if (amount <= 0) {
            return;
        }
        runContractFunction();
    };

    const { runContractFunction } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: 'mint',
        params: {
            _mintAmount: amount,
        },

    });
    return (
        <section className="mint-wrapper" >
            <div className="description" >
                <h2>WeirdNeckz consists of 10,000 Weird collectibles</h2>
                <p className="info" > The initial collection will not only include cool art, but also work as a membership allowing access to future projects incl. game development, 3d art, experiences and more…</p >

                <div className="actions-wrapperr" >
                    <Link to={"/mint"} className="btn btn-green" onClick={() => mint()}>Mint</Link>
                    <div className="input-wrapper" >
                        <img src="/images/minus.png" onClick={() => setAmount(x => x === 0 ? x = 0 : x - 1)} />
                        <input value={amount} type="number" className="input" onChange={(x) => setAmount(x.target.value)} />
                        <img src="/images/plus.png" onClick={() => setAmount(x => x + 1)} />
                    </div >
                </div >
            </div >
        </section >
    );
}

export default IsAuth(Mint);