'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSelectedLayoutSegment } from 'next/navigation'
import ButtonAuth from '@components/ButtonAuth'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', targetSegment: null },
  { name: 'Products', href: '/products', targetSegment: 'products' },
  { name: 'Dashboard', href: '/dashboard', targetSegment: 'dashboard' },
  { name: 'Chart', href: '/chart', targetSegment: 'chart' }
]

export default function NewNavbar () {
  const segment = useSelectedLayoutSegment()

  return (
    <Disclosure as='nav' className=' bg-blue-400'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
              <div className='sm:hidden'>
                <Disclosure.Button className='p-2 text-white hover:text-white rounded-md hover:bg-blue-300'>
                  {open
                    ? (
                      <XMarkIcon className='h-6 w-6' />
                      )
                    : (
                      <Bars3Icon className='h-6 w-6' />
                      )}
                </Disclosure.Button>
              </div>

              <div className='flex items-center justify-center'>
                <div>
                  <span className='font-agbalumo text-white font-normal text-xl'>NEXT-commerce</span>
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex gap-4'>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`rounded-md text-white px-3 py-2 text-sm font-medium ${segment === item.targetSegment ? 'bg-blue-500' : 'hover:bg-blue-300'}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className='pr-2 sm:pr-0'>
                <Menu as='div' className='relative'>
                  <Menu.Button className='rounded-full hover:ring-2 hover:ring-white'>
                    <img
                      className=' h-9 w-9 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        <Link
                          className='block px-4 py-2 text-sm text-gray-700'
                          href='/profile'
                        >
                          Profile
                        </Link>
                      </Menu.Item>
                      <ButtonAuth />
                      {/* <Menu.Item>
                        <Link
                          className='block px-4 py-2 text-sm text-gray-700'
                          href='/login'
                        >
                          Log In
                        </Link>
                      </Menu.Item> */}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md text-base font-medium text-white ${segment === item.targetSegment ? 'bg-blue-500' : 'hover:bg-blue-300'}`}
                >
                  <Disclosure.Button
                    className='flex w-full h-full px-3 py-2'
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
