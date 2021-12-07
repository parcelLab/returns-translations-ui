import React, { HTMLAttributes } from 'react'
import { render, fireEvent } from '@testing-library/react'
import TextEditor from './TextEditor'

jest.mock('react-quill', () => {
  const ComponentToMock = (props: HTMLAttributes<HTMLInputElement>) => (
    <input {...props} />
  )
  return ComponentToMock
})

describe('TextEdit', () => {
  it('allows changes', () => {
    const spyOnchange = jest.fn()
    const { getByPlaceholderText } = render(
      <TextEditor
        value='my value'
        placeholder='placeholder'
        onChange={spyOnchange}
      />
    )
    const editor = getByPlaceholderText('placeholder')
    fireEvent.change(editor, { target: { value: 'value' } })
    expect(spyOnchange).toHaveBeenCalled()
  })

  it('render title', () => {
    const spyOnchange = jest.fn()
    const { getByText } = render(
      <TextEditor
        title='title'
        value='my value'
        placeholder='placeholder'
        onChange={spyOnchange}
      />
    )
    expect(getByText(/title/)).toBeInTheDocument()
  })

  it('render description', () => {
    const spyOnchange = jest.fn()
    const { getByText } = render(
      <TextEditor
        description='description'
        value='my value'
        placeholder='placeholder'
        onChange={spyOnchange}
      />
    )
    expect(getByText(/description/)).toBeInTheDocument()
  })
})
