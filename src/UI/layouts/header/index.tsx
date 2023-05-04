import { Title } from 'UI/components'
import Link from 'next/link'

export const Header: React.FC = () => (
  <header className="flex justify-between items-center py-2 px-3 border border-t-2˝">
    <Link href="/">
      <Title />
    </Link>
  </header>
)
