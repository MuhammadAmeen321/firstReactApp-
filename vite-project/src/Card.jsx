import ProfilePic from "./assets/profilePic.jpg";
// import './index.css'

function Card() {
  return (
    <div style={{width:"100%", display: "flex", flexDirection:"column", alignItems:"center", margin:"20px", border: "5px solid black"}}>
      <img
        src={ProfilePic}
        alt="Ameen's Photo"
        style={{ width: "500px", height: "500px" }}
      />
      <h2>Muhammaad Ameen</h2>
      <p>My Name is Ameen</p>
    </div>
  );
}
export default Card;
