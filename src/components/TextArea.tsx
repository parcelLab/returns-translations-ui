import React from 'react'
import Form from 'react-bootstrap/Form'
import ReactQuill from 'react-quill'
interface TextEditorProps {
  description?: string
  placeholder?: string
  title?: string
  value: string
  onChange: (value: string) => void
}

const TextArea = ({
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
      <Form.Control
        as='textarea'
        rows={2}
        placeholder={placeholder}
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </Form.Group>
  )
}

export default TextArea
