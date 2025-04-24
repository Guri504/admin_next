'use client'
import '../../../public/sass/pages/custom_editor.scss'
import 'ckeditor5/ckeditor5.css';
import { useEffect, useRef, useState } from 'react';



function CustomEditor({ name, placeholder, defaultValue }) {
  const editorRef = useRef()
  const { CKEditor, ClassicEditor } = editorRef.current || {}
  const [textData, setTextData] = useState(defaultValue || '');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setIsClient(true);
  }, [])
  return (
    <>
      {isClient ?
        <CKEditor
          editor={ClassicEditor}
          config={{
            placeholder: placeholder,
            licenseKey: 'GPL', // Or 'GPL'.
            toolbar: ["undo", "redo", "|", "bold", "italic", "underline", "strikethrough", "|",
              "heading", "blockQuote", "|", "numberedList", "bulletedList", "|", "link", "|",
              "alignment", "fontSize", "fontColor", "|", "codeBlock", "mediaEmbed"
            ],
            initialData: ''
          }}
          onChange={(event, editor) => {
            setTextData(editor.getData())
          }}
          data={defaultValue}
          defaultValue={textData}
        /> : ""
      }
      <textarea name={name} defaultValue={textData} className='d-none' ></textarea>
    </>
  );
}
export default CustomEditor;