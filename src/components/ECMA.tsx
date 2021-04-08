import Child from './Child';
import '../assets/styles/ecma.less';
import { useState } from 'react';

function ECMA() {
  const info = {
    id: 1,
  };
  const [visible, setVisible] = useState(true);
  return (
    <fieldset className="ecma">
      <legend>ECMA</legend>
      <button onClick={() => setVisible(true)}>open</button>
      {visible && <Child name="hi" info={info} onclose={() => setVisible(false)}></Child>}
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </fieldset>
  );
}

export default ECMA;
