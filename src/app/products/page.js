'use client'
import axios from 'axios'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'

// export default function ProductPage () {
//   return <h1>This is the ProductPage</h1>
// }

export default function ProductPage () {
  const { data: session } = useSession()
  useEffect(() => {
    async function getProfile () {
      axios.defaults.headers.Authorization = `Bearer ${session.user.accessToken}`
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/profile`)
      console.log(response.data)
    }
    try {
      getProfile()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return <h1>This is the ProductPage</h1>
}
