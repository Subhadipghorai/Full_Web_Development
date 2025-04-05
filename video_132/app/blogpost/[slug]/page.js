"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const Page = () => {
    const params= useParams();
    const router= useRouter();
  return (
    <div>
      {params.slug}
      <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
    </div>
  )
}

export default Page
// export default function Page({ params }) {