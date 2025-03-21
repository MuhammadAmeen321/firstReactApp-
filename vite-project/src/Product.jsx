
function product({title,price,features}){
    const list=features.map((f)=><li>{f}</li>)
    let styles={};
    if(price>3000){
         styles={backgroundColor:"yellow",  margin:'10px',  border:"3px solid black" ,borderRadius:'10px'};
    }
    else{
        styles={backgroundColor:"blue",  margin:'10px',  border:"3px solid black"};
    }
    return(
        <div className="product" style={styles}>
        <h1>{title} </h1>
        <h4>{price}</h4>
        {/* <h4>{features}</h4> */}
        <p>{list}</p>
        {price>3000 && <p>Discount is 5%</p>}
        </div>
    );
}
export default product;
