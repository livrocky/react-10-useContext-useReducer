import css from './Counter.module.css';
import { useReducer, useState } from 'react';
import Card from '../Card/Card';

const ACTIONS = {
  INCR: 'INCR',
  DECR: 'DECR',
  DOWN5: 'DOWN5',
  UPBY: 'UPBY',
};

const initCounterValue = { count: 0 };

function counterReducer(state, action) {
  console.log('state ===', state);
  console.log('action ===', action);

  switch (action.type) {
    case ACTIONS.INCR:
      if (state.count === 7) {
        const stateCopy1 = { ...state };
        stateCopy1.error = 'Negalima didinti daugiau nei 7';
        return stateCopy1;
      }
      return { count: state.count + 1 };
    case 'UPBY':
      return { count: state.count + action.payload };
    case 'DECR':
      if (state.count === 0) {
        const stateCopy = { ...state };
        stateCopy.error = 'Negalima neigiama reiksme';
        return stateCopy;
      }
      // console.log('state===', state);
      return { count: state.count - 1 };
    case 'DOWN5':
      return { count: state.count - 5 };
    default:
      throw new Error('neatpazintas type');
  }
}
// state.count++ === state.count = state.count + 1
function Counter() {
  // const [state, setValue] = useState({ count: 0 });

  const [state, dispatch] = useReducer(counterReducer, initCounterValue);

  function handleInc() {
    // setValue((prevValue) => prevValue + 1);
    dispatch({ type: ACTIONS.INCR });
  }
  function handleDec() {
    // setValue((prevValue) => prevValue - 1);
    dispatch({ type: 'DECR' });
  }

  // TODO: padaryti reset

  // TODO: padaryti kad negalima didinti daugiau negu 7. Atvaizduoti klaida ir paslepti myktuka UP

  return (
    <div>
      <h2 className={css.count}>{state.count}</h2>
      {/* patikrinti ar yra klaida, jeigu yra - atvaizduoti */}
      {state.error && <h3>{state.error}</h3>}
      {/* <button onClick={() => dispatch({ type: 'UPBY', payload: 7 })}>Up by 7</button> */}

      {state.count < 7 && <button onClick={handleInc}>Increase</button>}
      <button onClick={handleDec}>Down</button>
      {/* <button onClick={() => dispatch({ type: 'DOWN5' })}>down 5</button> */}
      <Card />
    </div>
  );
}
export default Counter;
