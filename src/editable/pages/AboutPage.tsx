import Link from 'next/link'
import { ArrowRight, BookOpen, Compass, ShieldCheck, Sparkles } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const icons = [BookOpen, Compass, ShieldCheck]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#fffaf3] text-[#173f67]">
        <section className="relative overflow-hidden bg-[#bfeaf0]">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#ffd150]/80" />
          <div className="absolute -bottom-20 right-[28%] h-40 w-40 rounded-full bg-[#f26076]/75" />
          <div className="relative mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/65 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.18em]"><Sparkles className="h-3.5 w-3.5 text-[#f26076]" /> {pagesContent.about.badge}</p>
            <div className="mt-6 grid gap-7 lg:grid-cols-[1.1fr_.7fr] lg:items-end">
              <h1 className="editorial-serif max-w-3xl text-4xl font-bold leading-[.98] tracking-[-.045em] sm:text-5xl lg:text-6xl">Independent media, thoughtfully presented.</h1>
              <p className="border-l-4 border-[#458b73] pl-5 text-sm font-medium leading-7 text-[#173f67]/70">A focused publishing experience designed around clear stories, useful context, and easy discovery.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <article className="rounded-[1.75rem] border border-[#173f67]/10 bg-white p-6 shadow-[0_16px_48px_rgba(23,63,103,.08)] sm:p-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#f26076]">About {SITE_CONFIG.name}</p>
              <p className="editorial-serif mt-4 text-2xl font-bold leading-[1.28] sm:text-3xl">{pagesContent.about.description}</p>
              <div className="mt-7 grid gap-4 text-sm leading-7 text-[#173f67]/68">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#458b73] px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em] text-white transition hover:bg-[#f26076]">Talk to us <ArrowRight className="h-4 w-4" /></Link>
            </article>

            <aside className="grid gap-3">
              {pagesContent.about.values.map((value, index) => {
                const Icon = icons[index] || Sparkles
                return <div key={value.title} className="rounded-[1.25rem] border border-[#173f67]/10 bg-white p-5 shadow-[0_8px_25px_rgba(23,63,103,.05)]">
                  <div className="flex items-center gap-3"><span className={`grid h-9 w-9 place-items-center rounded-full ${index === 0 ? 'bg-[#f26076]' : index === 1 ? 'bg-[#ff9760]' : 'bg-[#ffd150]'}`}><Icon className="h-4 w-4" /></span><span className="text-[10px] font-extrabold text-[#173f67]/35">0{index + 1}</span></div>
                  <h2 className="editorial-serif mt-3 text-xl font-bold">{value.title}</h2>
                  <p className="mt-2 text-xs leading-6 text-[#173f67]/62">{value.description}</p>
                </div>
              })}
            </aside>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
