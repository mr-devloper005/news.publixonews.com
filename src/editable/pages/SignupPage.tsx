import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, UserPlus } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return <EditableSiteShell><main className="bg-[#fffaf3] px-5 py-10 text-[#173f67] sm:px-8 sm:py-14 lg:py-16"><section className="mx-auto grid max-w-[960px] overflow-hidden rounded-[2rem] border border-[#173f67]/10 bg-white shadow-[0_22px_65px_rgba(23,63,103,.12)] lg:grid-cols-[1.1fr_.9fr]">
    <div className="p-6 sm:p-8 lg:p-10"><div className="grid h-10 w-10 place-items-center rounded-full bg-[#ffd150]"><UserPlus className="h-4 w-4"/></div><p className="mt-5 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#f26076]">Create account</p><h1 className="editorial-serif mt-2 text-3xl font-bold">{pagesContent.auth.signup.formTitle}</h1><EditableLocalSignupForm/><p className="mt-5 border-t border-[#173f67]/10 pt-4 text-xs text-[#173f67]/60">Already have an account? <Link href="/login" className="font-extrabold text-[#458b73] hover:underline">{pagesContent.auth.signup.loginCta}</Link></p></div>
    <div className="relative flex flex-col justify-center overflow-hidden bg-[#173f67] p-7 text-white sm:p-9"><div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#f26076]"/><div className="absolute -bottom-14 -left-12 h-32 w-32 rounded-full bg-[#ffd150]"/><p className="relative inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.16em] text-[#ffd150]"><Sparkles className="h-3.5 w-3.5"/> {pagesContent.auth.signup.badge}</p><h2 className="editorial-serif relative mt-5 max-w-sm text-3xl font-bold leading-[1.02] sm:text-4xl">A clearer place to publish.</h2><p className="relative mt-4 max-w-sm text-sm leading-7 text-white/65">Create your account to manage details and prepare content for publication.</p></div>
  </section></main></EditableSiteShell>
}
