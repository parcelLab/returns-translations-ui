import React from 'react'

interface ApplicationProps {
  lang: string
  country: string
  user: string
}

export const Application = ({ lang, country, user }: ApplicationProps) => (
  <h1>
    Application {lang}, {country}, {user}
  </h1>
)
