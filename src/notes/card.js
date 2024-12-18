import React from "react";

const Card = (props) => {
  return (
    <div
      className="card"
      onClick={props.click}
    >
      <div className="card-content">
        <h2 className="name">{props.itemName}</h2>
        <p className="passport">{props.passport}</p>
        <small>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae sunt
          suscipit quisquam amet molestiae. Dolorem, tenetur deserunt. Tenetur
          esse, quos iste, rerum voluptatibus exercitationem alias libero ex aut
          deserunt enim.
        </small>
        <br />
        <>{props.children}</>
      </div>
    </div>
  );
};

export default Card;
