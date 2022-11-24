import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>
      <h1>NextJS pre-rendering</h1>
      <Link href='/users'>Users</Link>
      <Link href='/posts'>Posts</Link>
    </div>
  )
}
