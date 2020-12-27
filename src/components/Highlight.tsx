// import SyntaxHighlighter from 'react-syntax-highlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Highlight() {
  const codeString = ` // enum Level
  enum Level {
    DEBUG,
    LOG,
    INFO,
    ERROR,
  }`;
  return (
    <fieldset>
      <legend>react-syntax-highlighter</legend>
      <SyntaxHighlighter
        language="typescript"
        style={dark}
        showLineNumbers
        wrapLines>
        {codeString}
      </SyntaxHighlighter>
    </fieldset>
  );
}
