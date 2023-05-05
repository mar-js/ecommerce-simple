import Link from 'next/link'

import { Nav } from 'UI/layouts'

import { Title } from 'UI/components'

export const Header: React.FC = () => (
  <header className="flex justify-between items-center py-2 px-3 border border-t-2˝">
    <Link href="/">
      <Title />
    </Link>
    <Nav />
  </header>
)
