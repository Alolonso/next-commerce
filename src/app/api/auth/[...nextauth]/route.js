import NextAuth from 'next-auth/next'
import axios from 'axios'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize (credentials, req) {
        const options = {
          headers: {
            accept: '*/*',
            'Content-Type': 'application/json'
          }
        }

        const body = {
          email: credentials?.email,
          password: credentials?.password
        }

        const { data: accessToken } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, body, options)

        if (accessToken) {
          const token = accessToken.access_token
          axios.defaults.headers.Authorization = `Bearer ${token}`
          const { data: user } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/profile`)
          if (user) {
            const loggedUser = {
              email: user.email,
              name: user.name,
              role: user.role,
              avatar: user.avatar,
              accessToken: token
            }
            return (loggedUser)
          }
        }
      }
    })
  ],
  callbacks: {
    async jwt ({ token, user }) {
      return { ...token, ...user }
    },
    async session ({ session, token }) {
      const { email, name, role, avatar, accessToken } = token
      session.user = { email, name, role, avatar, accessToken }
      return session
    }
  }
})

export { handler as GET, handler as POST }
