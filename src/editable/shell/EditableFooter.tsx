import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

const columns = [
  { title: 'Explore', links: [['Home','/'],['Search','/search']] },
  { title: 'Resources', links: [['About','/about'],['Contact','/contact'],['Publisher access','/login']] },
]

export function EditableFooter() {
  return <footer className="bg-[#173f67] text-white">
    <div className="mx-auto max-w-[1420px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="grid gap-12 border-b border-white/20 pb-14 lg:grid-cols-[1.25fr_1fr]">
        <div><Link href="/" className="editorial-brand text-4xl font-bold sm:text-5xl">{SITE_CONFIG.name}</Link><p className="mt-5 max-w-lg text-base leading-8 text-white/68">Clear, connected media coverage for people who publish, distribute, and follow the stories shaping their world.</p></div>
        <form action="/signup" className="self-end"><label className="text-xs font-extrabold uppercase tracking-[.2em] text-[#ffd150]">The daily briefing</label><div className="mt-3 flex overflow-hidden rounded-lg bg-white"><Mail className="ml-4 mt-4 h-5 w-5 text-[#173f67]"/><input name="email" type="email" placeholder="Your email address" className="min-w-0 flex-1 px-3 py-4 text-sm text-[#173f67] outline-none"/><button className="bg-[#458b73] px-5 text-sm font-bold">Subscribe</button></div></form>
      </div>
      <div className="grid gap-10 py-14 sm:grid-cols-3">{columns.map((column) => <div key={column.title}><h3 className="text-xs font-extrabold uppercase tracking-[.18em] text-[#ffd150]">{column.title}</h3><div className="mt-5 grid gap-3">{column.links.map(([label,href]) => <Link key={label} href={href} className="text-sm text-white/72 transition hover:text-white">{label}</Link>)}</div></div>)}<div><h3 className="text-xs font-extrabold uppercase tracking-[.18em] text-[#ffd150]">Connect</h3><Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Start a conversation <ArrowUpRight className="h-4 w-4"/></Link></div></div>
      <div className="flex flex-col gap-3 border-t border-white/20 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p><p>Independent media distribution, thoughtfully presented.</p></div>
    </div>
  </footer>
}
