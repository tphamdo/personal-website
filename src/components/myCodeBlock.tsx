import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  code: string;
  language: string;
}
const MyCodeBlock: React.FC<Props> = (props) => {
  const { code, language } = props;

  const customStyle = {
    fontSize: '18px',
  };

  return (
    <SyntaxHighlighter language={language} style={coy} customStyle={customStyle}>
      {code}
    </SyntaxHighlighter>
  )
}

export default MyCodeBlock;
