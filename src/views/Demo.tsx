import TsxDemo from '../components/TsxDemo';
import JsxDemo from '../components/JsxDemo';
import JsDemo from '../components/JsDemo';
import TsFeat from '../components/TsFeat';
import MdnDemo from '../components/MdnDemo';
import Highlight from '../components/Highlight';
import Markdown from '../components/Markdown';
import CssGround from '../components/CssGround';
import MaterialUIDemo from '../components/MaterialUIDemo';
import OSInfo from '../components/OSInfo';
import Common from '../components/Common';
import ECMA from '../components/ECMA';
import LodashDemo from '../components/LodashDemo';
import XMLDOM from '../components/XMLDOM';

function Demo() {
  return (
    <>
      <XMLDOM></XMLDOM>
      <LodashDemo></LodashDemo>
      <ECMA></ECMA>
      <Common name="foo"></Common>
      <Common name="bar"></Common>
      <OSInfo></OSInfo>
      <MaterialUIDemo></MaterialUIDemo>
      <CssGround></CssGround>
      <TsxDemo />
      <JsxDemo />
      <JsDemo />
      <TsFeat />
      <MdnDemo />
      <Highlight />
      <Markdown />
    </>
  );
}

export default Demo;
