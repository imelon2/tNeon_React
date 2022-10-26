import neonIcon from "../../img/Neon.png";
import { erc20MetaData, getTokenContract } from "../../helper/erc20Contract";

function PrivateSale(props) {
    const {chainId} = props;
    const OPTIONS = [
        {name : "USDC"},
        {name : "USDT"}
    ]
    const handleChange = (e) => {
		// event handler
		console.log(e.target.value);
	};
  return (
    <>
      <div className="buyneon">
        <div className="buy_text">BUY $NEON</div>
        <div className="outter_box">
          <div className="buy_box">
            <div className="neon_buy_text">
              Private{" "}
              <span className="buy_neon">
                <img className="neon_icon" src={neonIcon} />
                NEON
              </span>{" "}
              Token
              <div style={{ marginTop: "20px" }}>Sales</div>
            </div>
            <div className="price_box">
              <div className="neon_price">
                Price<div className="neon_price_sub">$0.2</div>
              </div>
              <div className="neon_price">
                Date<div className="neon_price_sub">16 November 2022</div>
              </div>
              <div className="neon_price" style={{ marginTop: "20px" }}>
                total volume
                <div className="neon_price_sub">$100K ≈ 5,000,000 NEON</div>
              </div>
            </div>
            <div className="buy_button">BUY</div>
          </div>
        </div>
      </div>
      <div className="exampleComponent">
        exampleComponent
        <select onChange={handleChange}>
          {OPTIONS.map((data,index)=> (
              <option key={index} value={data.name}>{data.name}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default PrivateSale;
