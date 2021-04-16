import { useState } from 'react';
import css from '../assets/styles/child.module.css';

function Child(props: any) {
  const [input, setInput] = useState('please input');
  const close = () => {
    props.onclose();
  };

  return (
    <div className={css.child}>
      <h1 className={css.title}>child</h1>
      <input type="text" value={input} onInput={(e: any) => setInput(e.target.value)} />
      <button onClick={close}>close</button>
      {props?.info?.text}
      {props?.name}
    </div>
  );
}

export default Child;
