import "./Card.css";

function Card(props) {
  /*below we set a class variable that contains the class "card" and the class the component receives as a prop "expense-item" */
  const classes = "card " + props.className;
  /*{props.children} allows the Card component to display other components and html elements inside itself*/
  return <div className={classes}>{props.children}</div>;
}

export default Card;
