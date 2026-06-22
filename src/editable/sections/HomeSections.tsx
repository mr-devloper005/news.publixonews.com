import Link from 'next/link'
import { ArrowRight, BarChart3, FileText, Search, Send, Sparkles } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableExcerpt, getEditablePostImage, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = { primaryTask: TaskKey; primaryRoute: string; posts: SitePost[]; timeSections: HomeTimeSection[] }

export function EditableHomeHero(_props: HomeSectionProps) {
  const title = pagesContent.home.hero.title.join(' ')
  return <section className="brand-wave bg-[#bfeaf0] pb-24">
    <div className={`${dc.shell.section} flex min-h-[510px] items-center py-16 lg:py-20`}>
      <div className="relative z-10 max-w-4xl"><p className="inline-flex items-center gap-2 rounded-full bg-white/65 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.18em]"><Sparkles className="h-4 w-4 text-[#f26076]"/> {pagesContent.home.hero.badge}</p><h1 className={`${dc.type.heroTitle} mt-7 max-w-4xl`}>{title || 'Media that moves at the speed of the story.'}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#173f67]/78">A focused destination for public updates, distributed media, announcements, and the stories people need to see.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className={dc.button.secondary}>Submit an update</Link></div></div>
    </div>
  </section>
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const items = posts.slice(1,9)
  if (!items.length) return null
  return <section className="bg-[#fffaf3]"><div className={`${dc.shell.section} ${dc.shell.sectionY}`}><div><p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-[#458b73]">Latest distribution</p><h2 className={`${dc.type.sectionTitle} mt-3`}>News moving now</h2></div><div className={`${dc.layout.rail} mt-8`}>{items.map((post,index)=><RailPostCard key={post.id || post.slug} post={post} href={postHref(primaryTask,post,primaryRoute)} index={index}/>)}</div></div></section>
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature=posts[8]||posts[0]; const list=posts.slice(9,14).length?posts.slice(9,14):posts.slice(1,6); if(!feature)return null
  return <section className="bg-white"><div className={`${dc.shell.section} ${dc.shell.sectionY}`}><div className="mb-9 text-center"><p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-[#f26076]">Clarity across every channel</p><h2 className={`${dc.type.sectionTitle} mx-auto mt-3 max-w-3xl`}>Stories built to be found, read, and shared</h2></div><div className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
    <Link href={postHref(primaryTask,feature,primaryRoute)} className="group grid overflow-hidden rounded-[2rem] bg-[#173f67] text-white sm:grid-cols-[1.08fr_.92fr]"><div className="relative min-h-[360px] overflow-hidden"><img src={getEditablePostImage(feature)} alt={feature.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"/></div><div className="flex flex-col justify-center p-7 sm:p-10"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#ffd150]">Editor’s selection</p><h3 className="editorial-serif mt-4 text-4xl font-bold leading-[1.02]">{feature.title}</h3><p className="mt-5 text-sm leading-7 text-white/68">{getEditableExcerpt(feature,180)}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-bold">Read the story <ArrowRight className="h-4 w-4"/></span></div></Link>
    <aside className="rounded-[2rem] bg-[#e1f4f1] p-7"><div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-full bg-[#ffd150]"><BarChart3 className="h-5 w-5"/></div><h3 className="text-2xl font-extrabold">The briefing</h3></div><div className="mt-4">{list.map((post,index)=><CompactIndexCard key={post.id || post.slug} post={post} href={postHref(primaryTask,post,primaryRoute)} index={index}/>)}</div></aside>
  </div></div></section>
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const source=timeSections.flatMap(s=>s.posts); const items=(source.length?source:posts).slice(0,6); if(!items.length)return null
  return <section className="brand-wave bg-[#bfeaf0] pb-24"><div className={`${dc.shell.section} ${dc.shell.sectionY}`}><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div className="lg:sticky lg:top-28 lg:self-start"><div className="grid h-20 w-20 place-items-center rounded-[1.6rem] bg-[#ffd150] shadow-lg"><Send className="h-9 w-9"/></div><p className="mt-8 text-[11px] font-extrabold uppercase tracking-[.2em] text-[#458b73]">Across the media landscape</p><h2 className={`${dc.type.sectionTitle} mt-3`}>Discover what matters, without the noise.</h2><p className="mt-5 max-w-md text-base leading-8 text-[#173f67]/70">Follow new announcements and perspectives in one calm, searchable editorial stream.</p></div><div className="grid gap-5 sm:grid-cols-2">{items.map((post,index)=><Link key={post.id || post.slug} href={postHref(primaryTask,post,primaryRoute)} className={`group overflow-hidden rounded-[1.5rem] bg-white shadow-sm transition hover:-translate-y-1 ${index===0?'sm:col-span-2 sm:grid sm:grid-cols-2':''}`}><div className={`overflow-hidden ${index===0?'min-h-[270px]':'aspect-[16/9]'}`}><img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/></div><div className="p-6"><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#f26076]">{index===0?'Featured insight':'Media update'}</p><h3 className={`editorial-serif mt-3 font-bold leading-tight ${index===0?'text-3xl':'text-2xl'}`}>{post.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-6 text-[#173f67]/62">{getEditableExcerpt(post,130)}</p></div></Link>)}</div></div>
    <form action="/search" className="mx-auto mt-16 flex max-w-3xl overflow-hidden rounded-xl bg-white p-2 shadow-[0_16px_50px_rgba(23,63,103,.13)]"><Search className="ml-4 mt-3 h-5 w-5"/><input name="q" placeholder={`Search ${SITE_CONFIG.name}`} className="min-w-0 flex-1 px-3 py-3 text-sm outline-none"/><button className="rounded-lg bg-[#458b73] px-6 text-sm font-bold text-white">Search</button></form></div></section>
}

export function EditableHomeCta(){return <section className="bg-[#fffaf3]"><div className={`${dc.shell.section} py-20`}><div className="soft-grid relative overflow-hidden rounded-[2.5rem] bg-[#173f67] px-6 py-16 text-center text-white sm:px-12"><div className="absolute -left-12 -top-12 h-44 w-44 rounded-full bg-[#f26076]"/><div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-[#ffd150]"/><FileText className="relative mx-auto h-12 w-12 text-[#ffd150]"/><h2 className="editorial-serif relative mx-auto mt-5 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">Put your next story where people can find it.</h2><p className="relative mx-auto mt-5 max-w-xl text-white/68">Share public updates, media releases, and important announcements through a polished, connected publication.</p><div className="relative mt-8 flex flex-wrap justify-center gap-3"><Link href="/contact" className={dc.button.accent}>Submit your news</Link><Link href="/signup" className="rounded-lg border border-white/35 px-7 py-3.5 text-xs font-extrabold uppercase tracking-[.12em] hover:bg-white hover:text-[#173f67]">Create account</Link></div></div></div></section>}
