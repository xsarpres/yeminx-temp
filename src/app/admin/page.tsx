'use client'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'

export default function Admin() {
  const [cats, setCats] = useState<any[]>([])
  useEffect(() => {
    supabase.from('categories').select('*').then(({ data }) => setCats(data || []))
  }, [])
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hekimoğlu – Admin</h1>
      <pre>{JSON.stringify(cats, null, 2)}</pre>
    </div>
  )
}