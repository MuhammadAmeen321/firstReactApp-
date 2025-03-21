import Product from './Product.jsx';

function productTab(){
    let options = ["Hi-tech","durable",'fast'];
    return (
        <div style={{border:'10px solid black', margin:'10px'}}>
            <Product title='Mobile ' price={30000}  features={options}/>
            <Product title='Pen' price={20}  features={options}/>
            <Product title='book' price={10}  features={options}/>
        </div>
    );  
}
export default productTab;