import { useState } from 'react';

function Child(props: any) {
  const [input, setInput] = useState('please input');
  const close = () => {
    props.onclose();
  };

  return (
    <div className="child">
      <input type="text" value={input} onInput={(e: any) => setInput(e.target.value)} />
      <button onClick={close}>close</button>
      {props?.info?.text}
      {props?.name}
    </div>
  );
}

export default Child;
