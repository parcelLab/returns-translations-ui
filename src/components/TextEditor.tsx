import React from 'react'
import Form from 'react-bootstrap/Form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './TextEditor.scss'

interface TextEditorProps {
  description?: string
  placeholder?: string
  title?: string
  value: string
  onChange: (value: string) => void
}

const TextEditor = ({
  description,
  title,
  placeholder = '',
  value,
  onChange
}: TextEditorProps) => {
  return (
    <Form.Group className='mb-3'>
      {title && <Form.Label style={{ fontWeight: 'bold' }}>{title}</Form.Label>}{' '}
      {description && (
        <Form.Text className='text-muted'> {description}</Form.Text>
      )}
      <ReactQuill
        theme='snow'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Form.Group>
  )
}

export default TextEditor
