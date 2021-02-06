import TsxDemo from '../components/TsxDemo';
import JsxDemo from '../components/JsxDemo';
import JsDemo from '../components/JsDemo';
import TsFeat from '../components/TsFeat';
import MdnDemo from '../components/MdnDemo';
import Highlight from '../components/Highlight';
import Markdown from '../components/Markdown';
import CssGround from '../components/CssGround';

function Tool() {
  return (
    <div className="tool">
      <CssGround></CssGround>
      <TsxDemo />
      <JsxDemo />
      <JsDemo />
      <TsFeat />
      <MdnDemo />
      <Highlight />
      <Markdown />
    </div>
  );
}

export default Tool;
