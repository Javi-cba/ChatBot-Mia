import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../../styles/markdown.css';

const Markdown = ({ msj }) => {
  return (
    <div className="markdown-container">
      <ReactMarkdown children={msj} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default Markdown;
