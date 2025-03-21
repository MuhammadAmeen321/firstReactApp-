export default function Azmcards({ title, subtitle, price }) {
  return (
    <div
      style={{
        border: "3px solid grey",
        width: "400px",
        height: "250px",
        borderRadius: "10px",
        margin: "5px",
        padding: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 className="azm-card-title" style={{ alignItems: "center" }}>
        Card Title:{title}
      </h2>
      <h3 className="azm-card-subtitle" style={{ alignContent: "center" }}>
        Card Subtitle:{subtitle}
      </h3>
      <h2 style={{ backgroundColor: "yellow", margin: "0px", padding: "10px", border:'1px solid yellow', borderRadius:'15px' }}>
        Price:{price}
      </h2>
    </div>
  );
}
