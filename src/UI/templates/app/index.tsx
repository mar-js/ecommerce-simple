import { PropsWithChildren } from 'react'

import { Header } from 'UI'

export const TemplateApp: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    { children }
  </>
)
