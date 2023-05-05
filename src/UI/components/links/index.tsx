import Link from 'next/link'

import { DATA_LINKS } from 'utils'

export const Links: React.FC = () => (
  <ul className="flex justify-end items-center">
    { DATA_LINKS.map(({
      id,
      text,
      url
    }) => (
      <li key={ id } className="ml-2">
        <Link href={ url } className="hover:text-green-600">{ text }</Link>
      </li>
    )) }
  </ul>
)
