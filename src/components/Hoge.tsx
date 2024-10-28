'use client'

import { useEffect } from 'react'

export default function Hoge({ name }: { name: string }) {
  useEffect(() => {
    console.log(name)
  }, [])

  return <div>Hoge</div>
}
