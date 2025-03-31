'use client' // Required only in App Router.

import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor, Essentials, Paragraph, Bold, Italic, List, Underline, Strikethrough,
  BlockQuote, Heading, Link, Alignment, CodeBlock, Font, MediaEmbed
} from 'ckeditor5';

import '../../../public/sass/pages/custom_editor.scss'
import 'ckeditor5/ckeditor5.css';
import { useRef, useState } from 'react';

function CustomEditor({ name, placeholder, defaultValue }) {
  const [textData, setTextData] = useState('');

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={defaultValue}
        config={{
          placeholder: placeholder,
          licenseKey: 'GPL', // Or 'GPL'.
          plugins: [Essentials, Paragraph, Bold, Italic, List, Underline, Strikethrough, BlockQuote,
            Heading, Link, Image, Alignment, CodeBlock,  Font, MediaEmbed],
          toolbar: ["undo", "redo", "|", "bold", "italic", "underline", "strikethrough", "|",
            "heading", "blockQuote", "|", "numberedList", "bulletedList", "|", "link", "imageUpload", "|",
            "alignment", "fontSize", "fontColor", "|", "codeBlock", "mediaEmbed"],
          initialData: ''
        }}
        onChange={(event, editor) => {
          setTextData(editor.getData())
        }}
        defaultValue={textData}
      />
      <textarea name={name} defaultValue={textData} className='d-none' ></textarea>
    </>
  );
}
export default CustomEditor;