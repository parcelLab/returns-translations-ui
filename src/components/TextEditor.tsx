import React, { ChangeEvent } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

interface TextEditorProps {
  placeholder?: string
  title?: string
  value: string
  onChange: (value: string) => void
}

const TextEditor = ({
  title,
  placeholder = '',
  value,
  onChange
}: TextEditorProps) => {
  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    evt.preventDefault()
    onChange(evt.target.value)
  }
  return (
    <Form.Group className='mb-3'>
      {title && <Form.Label>{title}</Form.Label>}
      <Form.Control
        as='textarea'
        rows={3}
        role='textbox'
        aria-multiline='true'
        aria-placeholder={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />

      <Button variant='primary'>Primary</Button>
    </Form.Group>
  )
}

export default TextEditor
