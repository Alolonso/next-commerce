'use client'
import { useSession } from 'next-auth/react'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

export default function ButtonAuth () {
  const { data: session } = useSession()
  console.log({ session })

  return (
    <Menu.Item>
      {
        session
          ? (
            <Link
              className='block px-4 py-2 text-sm text-gray-700'
              href='/login'
            >
              Log Out
            </Link>
            )
          : (
            <Link
              className='block px-4 py-2 text-sm text-gray-700'
              href='/login'
            >
              Log In
            </Link>
            )
      }
    </Menu.Item>
  )
}
