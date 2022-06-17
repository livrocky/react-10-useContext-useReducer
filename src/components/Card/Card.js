import css from './Card.module.css';

function Card(props) {
  return (
    <div className={css.card}>
      {props.children}
      <h3>I am a card</h3>
      <button>Logout</button>
    </div>
  );
}

export default Card;
