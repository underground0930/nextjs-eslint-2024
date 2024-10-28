'use client'

import { useEffect } from 'react'

export default function Hoge({ name }: { name: string }) {
  useEffect(() => {
    console.log(name)
  }, [])

  return (
    <div>
      <img src="/images/hoge.png" alt="hoge" />
    </div>
  )
}
