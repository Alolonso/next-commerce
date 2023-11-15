export default function NewLogin () {
  return (
    <div className='flex flex-col justify-center gap-9 py-16 px-6 lg:px-8'>
      <div className='flex flex-col gap-10 sm:max-w-sm sm:w-full sm:mx-auto'>
        <h1 className='font-agbalumo text-blue-400 text-4xl text-center'>NEXT-commerce</h1>
        <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Log in to your account</h2>
      </div>
      <div className='sm:max-w-sm sm:w-full sm:mx-auto'>
        <form className='space-y-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
              Email address
            </label>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
              Password
            </label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6'
            />
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-300'
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
