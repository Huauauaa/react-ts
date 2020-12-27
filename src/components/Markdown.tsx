import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function Highlight() {
  const codeString1 = `
  ~~~js
  const str = 'hello';
  function f() {
    return str;
  }
  ~~~
  `;

  const codeString2 = `
  _a_

  - unorder Lists
  - [ ] todo
  - [x] done

  ### order list
  1. [Huauauaa](https://github.com/Huauauaa)
  2. [x] done
  

  |  表头   | 表头  |
  |  ----  | ----  |
  | 单元格  | 单元格 |
  | 单元格  | 单元格 |
  `;

  const renderers = {
    code: ({ language, value }: { language: any; value: any }) => {
      return <SyntaxHighlighter language={language} children={value} />;
    },
  };
  return (
    <fieldset>
      <legend>react-markdown</legend>
      <ReactMarkdown># Hello `world`</ReactMarkdown>
      <ReactMarkdown>## title 2</ReactMarkdown>
      <ReactMarkdown plugins={[gfm]} children={codeString2}></ReactMarkdown>
      <ReactMarkdown
        renderers={renderers}
        children={codeString1}></ReactMarkdown>
    </fieldset>
  );
}
