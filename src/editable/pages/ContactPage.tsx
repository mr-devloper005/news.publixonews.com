'use client'

import { ArrowRight, FileText, Mail, Megaphone, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Story ideas, corrections, source material, and publication questions.', color: '#f26076' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Distribution, syndication, collaborations, and campaign enquiries.', color: '#ff9760' },
  { icon: Mail, title: 'General support', body: 'Account, publishing, or general site-related assistance.', color: '#ffd150' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#fffaf3] text-[#173f67]">
        <section className="relative overflow-hidden bg-[#bfeaf0]">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#ffd150]/75" />
          <div className="absolute -bottom-24 right-[24%] h-44 w-44 rounded-full bg-[#f26076]/80" />
          <div className="relative mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/65 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.18em]"><Sparkles className="h-3.5 w-3.5 text-[#f26076]" /> {pagesContent.contact.eyebrow}</p>
            <div className="mt-6 grid gap-7 lg:grid-cols-[1.05fr_.75fr] lg:items-end">
              <h1 className="editorial-serif max-w-3xl text-4xl font-bold leading-[.98] tracking-[-.045em] sm:text-5xl lg:text-6xl">Let&apos;s start a conversation.</h1>
              <p className="max-w-xl border-l-4 border-[#458b73] pl-5 text-sm font-medium leading-7 text-[#173f67]/72">{pagesContent.contact.description}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
            <aside className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {desks.map((desk, index) => (
                <div key={desk.title} className="rounded-[1.25rem] border border-[#173f67]/10 bg-white p-5 shadow-[0_8px_28px_rgba(23,63,103,.06)]">
                  <div className="flex items-center justify-between"><span className="grid h-9 w-9 place-items-center rounded-full" style={{ backgroundColor: desk.color }}><desk.icon className="h-4 w-4" /></span><span className="text-[10px] font-extrabold text-[#173f67]/35">0{index + 1}</span></div>
                  <h2 className="editorial-serif mt-4 text-xl font-bold">{desk.title}</h2>
                  <p className="mt-2 text-xs leading-6 text-[#173f67]/62">{desk.body}</p>
                </div>
              ))}
              <a href="mailto:hello@news.publixonews.com" className="group flex items-center justify-between rounded-[1.25rem] bg-[#173f67] p-5 text-white transition hover:bg-[#458b73]">
                <div><p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#ffd150]">Prefer email?</p><p className="mt-1 text-sm font-bold">Write to our team</p></div><ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </aside>

            <div className="rounded-[1.75rem] border border-[#173f67]/10 bg-white p-5 shadow-[0_18px_55px_rgba(23,63,103,.09)] sm:p-7 lg:p-9">
              <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#f26076]">Send a message</p>
              <h2 className="editorial-serif mt-2 text-3xl font-bold">{pagesContent.contact.formTitle}</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[#173f67]/58">Share a few details and we&apos;ll direct your message to the right place.</p>
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
