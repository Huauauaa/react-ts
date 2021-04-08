import { DOMParser } from 'xmldom';
const doc = new DOMParser().parseFromString(
  `
    <xml xmlns="a" xmlns:c="./lite">
      <child>test</child>
      <child></child>
      <child/>
    </xml>
  `,
  'text/xml',
);
doc.documentElement.setAttribute('x', 'y');
doc.documentElement.setAttributeNS('./lite', 'c:x', 'y2');
console.info({ doc });

const nsAttr = doc.documentElement.getAttributeNS('./lite', 'x');
console.info(nsAttr);

function XMLDOM() {
  return (
    <fieldset>
      <legend>xmldom</legend>
    </fieldset>
  );
}

export default XMLDOM;
