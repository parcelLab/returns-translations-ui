import React from 'react'
import TextEditor from './components/TextEditor'

interface ApplicationProps {
  lang: string
  country: string
  user: string
}

export const Application = ({ lang, country, user }: ApplicationProps) => (
  <>
    <h1>
      Application {lang}, {country}, {user}
    </h1>
    <TextEditor
      value='<b>hola</b>'
      onChange={(content: string) => {
        console.log(content)
      }}
    />
  </>
)
