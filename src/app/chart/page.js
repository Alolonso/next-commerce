'use client'
import { signIn } from 'next-auth/react'

export default function ChartPage () {
  return (
    <button
      onClick={() => signIn()}
    >
      try
    </button>
  )
  // return <h1>This is the ChartPage</h1>
}
