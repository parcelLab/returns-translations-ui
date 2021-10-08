import React from 'react'
import { render } from '@testing-library/react'
import { Application } from './App'

test('App', () => {
  const { getByText } = render(<Application />)

  expect(getByText('Application')).toBeInTheDocument()
})
