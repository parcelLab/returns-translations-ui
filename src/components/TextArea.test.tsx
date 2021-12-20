import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TextArea from './TextArea'

describe('TextArea', () => {
  it('allows changes', () => {
    const spyOnchange = jest.fn()
    const { getByPlaceholderText } = render(
      <TextArea
        value='my value'
        placeholder='placeholder'
        onChange={spyOnchange}
      />
    )
    const editor = getByPlaceholderText('placeholder')
    fireEvent.change(editor, { target: { value: 'value' } })
    expect(spyOnchange).toHaveBeenCalledWith('value')
  })

  it('render title', () => {
    const spyOnchange = jest.fn()
    const { getByText } = render(
      <TextArea
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
      <TextArea
        description='description'
        value='my value'
        placeholder='placeholder'
        onChange={spyOnchange}
      />
    )
    expect(getByText(/description/)).toBeInTheDocument()
  })
})
