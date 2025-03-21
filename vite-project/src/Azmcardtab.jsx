import Azmcards from "./Amzcards";
export default function Azmcardtab(){
    return(
        <div style={{border:'2px solid black', borderRadius:'10px',width:"100%", display:'flex', flexDirection:'column', alignItems:"center",justifyContent:'center'}}>
            {/* <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>             */}
                <h2 className="azmcardtab__title" style={{}}>Card Tab</h2>
            {/* </div> */}

            <div style={{display:'flex',flexDirection:"row"}}>
                <Azmcards price={300000} title={"   Iphone 15pro"} subtitle={"    Apple"}/>
                <Azmcards price={400000} title={"   Iphone 15pro max"} subtitle={"jjjjj"}/>
                <Azmcards price={50000} title={"jksd"} subtitle={"kndaldkfklb"}/>
            </div>
        </div>
     );

}