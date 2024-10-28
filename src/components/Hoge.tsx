'use client'

import { useEffect } from 'react'

export default function Hoge({ name }: { name: string }) {
  const count: number = 1

  useEffect(() => {
    console.log(name)
  }, [])

  return (
    <div className="flex items-center justify-center text-wrap">
      <img src="/images/hoge.png" alt="hoge" />
    </div>
  )
}
