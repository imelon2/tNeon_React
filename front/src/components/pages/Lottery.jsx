const { ethers,Contract } = require("ethers");
const vrfABI = require('../../abi/vrfTestABI.json')
function Lottery(props) {
    const callLotterResult = async () => {
        const provider = new ethers.providers.WebSocketProvider("wss://ws-mumbai.matic.today/");
        const vrfAddress = "0x8E1AF799194AbEaac0ABC1753D45f70d189dCd61";
        const _contract = new Contract(vrfAddress,vrfABI,provider);

        // requestRandomWords : VRF에 랜덤번호 요청(=로또 결과)
        const result =  await _contract.connect(props.signer).requestRandomWords();
        console.log(result);
        const deployed =  await result.wait()
        console.log(deployed);
        if(result) {
            // event listener
            _contract.once("Result",(_1,_2,_3,_4,event) => {
                console.log(Number(_1),Number(_2),Number(_3),Number(_4));
                
                // console.log(event);
                alert(Number(_1) + Number(_2) + Number(_3) + Number(_4));

                // back에서 결과 호출 기능 구현 시, api 트리거 
                // axious.post("url")
                
            })

        }
    }
    return(
        <div>
            Lottery
            <button onClick={callLotterResult}> 로또 번호 추첨 </button>
        </div>
    )
}

export default Lottery;
