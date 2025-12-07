'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const sendMagic = async () => {
    await supabase.auth.signInWithOtp({ email })
    alert('Magic link gönderildi!')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Yeminx Admin</h1>
        <input
          className="w-full border px-3 py-2 mb-4"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={sendMagic}
          className="w-full bg-indigo-600 text-white py-2 rounded"
        >
          Giriş linki gönder
        </button>
      </div>
    </div>
  )
}