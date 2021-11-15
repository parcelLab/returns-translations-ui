import React from 'react'
import { render } from '@testing-library/react'
import { Application } from './App'

test('App', () => {
  const { getByText } = render(
    <Application lang='es' country='es' user='12324' />
  )

  expect(getByText(/Application/)).toBeInTheDocument()
})
