'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  return (
    <header className="sticky top-0 z-50 bg-[#173f67] text-white shadow-[0_2px_0_rgba(0,0,0,.08)]">
      <div className="mx-auto flex min-h-[82px] max-w-[1420px] items-center gap-7 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="editorial-brand mr-auto max-w-[260px] truncate text-2xl font-bold sm:text-3xl">{SITE_CONFIG.name}</Link>
        <nav className="hidden items-center gap-7 lg:flex">
          <Link href="/about" className="text-sm font-bold transition hover:text-[#ffd150]">About</Link>
          <Link href="/contact" className="text-sm font-bold transition hover:text-[#ffd150]">Contact</Link>
          <Link href="/login" className="text-sm font-bold transition hover:text-[#ffd150]">Publisher access</Link>
        </nav>
        <div className="hidden items-center gap-5 sm:flex">
          <Link href="/search" aria-label="Search" className="transition hover:text-[#ffd150]"><Search className="h-5 w-5" /></Link>
          {session ? <button type="button" onClick={logout} className="text-sm font-bold">Log out</button> : null}
          <Link href={session ? '/create' : '/contact'} className="rounded-lg bg-[#458b73] px-6 py-3 text-sm font-extrabold shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f26076]">{session ? 'Publish' : 'Submit News'}</Link>
        </div>
        <button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-lg border border-white/25 lg:hidden" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>
      {open ? <div className="border-t border-white/15 px-5 py-5 lg:hidden"><nav className="mx-auto grid max-w-[1420px] gap-1"><Link href="/search" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-bold hover:bg-white/10">Search</Link><Link href="/about" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-bold hover:bg-white/10">About</Link><Link href="/contact" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-bold hover:bg-white/10">Contact</Link>{session ? <button onClick={logout} className="px-4 py-3 text-left text-sm font-bold">Log out</button> : <Link href="/login" className="rounded-lg px-4 py-3 text-sm font-bold hover:bg-white/10">Publisher access</Link>}</nav></div> : null}
    </header>
  )
}
