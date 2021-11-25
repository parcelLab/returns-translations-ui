import React, { useState } from 'react'
import TextEditor from './components/TextEditor'

interface ApplicationProps {
  lang: string
  countries: string
  user: string
}

export const Application = ({ lang, countries, user }: ApplicationProps) => {
  const [value, setValue] = useState('<b>hola</b>')
  return (
    <>
      <h1>
        Application {lang}, {countries}, {user}
      </h1>
      <TextEditor
        title='My title'
        description='My description'
        placeholder='Please write here'
        value={value}
        onChange={(content: string) => {
          console.log(content)
          setValue(content)
        }}
      />
    </>
  )
}
