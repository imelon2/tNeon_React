import { Link } from "react-router-dom";
import ConnectButton from "../ConnectButton";

function Nav(props) {

  const { isConnected,isSupported, connectWallet, currentBalance, walletAddress, chainId } = props;

  return (
    <nav className="nav">
      <div className="leftNav">
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/PrivateSale"}>PrivateSale</Link>
        <br/>
        <Link to={"/Lottery"}>Lottery</Link>
      </div>
      <div className="rightNav">
        <div className="connectButtonContainer">
          <ConnectButton
          isConnected={isConnected}
          isSupported={isSupported}
          connectWallet={connectWallet}
          walletAddress={walletAddress}
          currentBalance={currentBalance}
          chainId={chainId}
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
