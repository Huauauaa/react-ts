import Child from './Child';
import '../assets/styles/ecma.less';

function ECMA() {
  const info = {
    id: 1,
  };
  return (
    <fieldset className="ecma">
      <legend>ECMA</legend>
      <Child name="hi" info={info}></Child>
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
