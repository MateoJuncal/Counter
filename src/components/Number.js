import "../stylesheets/Number.css";

function Number({ number }) {
  return (
    <div className="NumberContainer">
      <p className="Number">{number}</p>
    </div>
  );
}

export default Number;
