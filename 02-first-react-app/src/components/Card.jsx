import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <img src="" alt="Employee image" />
      <p>{props.role}</p>
    </div>
  );
}

export default Card;
