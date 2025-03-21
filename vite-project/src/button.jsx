function something(){
    return(
      console.log("button is clicked")
    );
}

export default function button (){

    return (
        <div>
            <button onClick={something}>Click me</button>
            </div>
            );
}