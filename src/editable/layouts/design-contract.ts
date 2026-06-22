import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#fffaf3',
  '--slot4-page-text': '#173f67',
  '--slot4-panel-bg': '#dff5f3',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#526475',
  '--slot4-soft-muted-text': '#768391',
  '--slot4-accent': '#f26076',
  '--slot4-accent-fill': '#f26076',
  '--slot4-accent-soft': '#ffd8de',
  '--slot4-dark-bg': '#173f67',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#dff5f3',
  '--slot4-cream': '#fffaf3',
  '--slot4-warm': '#ff9760',
  '--slot4-lavender': '#f26076',
  '--slot4-gray': '#edf4f5',
  '--slot4-body-gradient': 'linear-gradient(180deg,#fffaf3 0%,#fff 50%,#e7f7f4 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]', pageText: 'text-[var(--slot4-page-text)]', panelBg: 'bg-[var(--slot4-panel-bg)]', panelText: 'text-[var(--slot4-page-text)]', surfaceBg: 'bg-[var(--slot4-surface-bg)]', surfaceText: 'text-[var(--slot4-page-text)]', mutedText: 'text-[var(--slot4-muted-text)]', softMutedText: 'text-[var(--slot4-soft-muted-text)]', accentText: 'text-[var(--slot4-accent)]', accentBg: 'bg-[var(--slot4-accent-fill)]', accentSoftBg: 'bg-[var(--slot4-accent-soft)]', accentSoftText: 'text-[var(--slot4-accent-soft)]', darkBg: 'bg-[var(--slot4-dark-bg)]', darkText: 'text-white', mediaBg: 'bg-[var(--slot4-media-bg)]', creamBg: 'bg-[var(--slot4-cream)]', warmBg: 'bg-[var(--slot4-warm)]', lavenderBg: 'bg-[var(--slot4-lavender)]', grayBg: 'bg-[var(--slot4-gray)]', border: 'border-[#173f67]/15', darkBorder: 'border-white/20', shadow: 'shadow-[0_12px_34px_rgba(23,63,103,.10)]', shadowStrong: 'shadow-[0_28px_70px_rgba(23,63,103,.18)]', overlay: 'bg-[linear-gradient(180deg,rgba(23,63,103,.02),rgba(23,63,103,.9))]',
} as const

export const editableDesignContract = {
  shell: { page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`, section: 'mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12', sectionY: 'py-14 sm:py-20 lg:py-24' },
  layout: { safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3', featureGrid: 'grid gap-8 lg:grid-cols-[1.15fr_.85fr]', rail: 'flex snap-x gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden', minRailCard: 'w-[250px] shrink-0 snap-start sm:w-[300px]' },
  type: { eyebrow: 'text-[11px] font-extrabold uppercase tracking-[.2em]', heroTitle: 'font-serif text-5xl font-bold leading-[.95] tracking-[-.055em] sm:text-7xl lg:text-[5.8rem]', sectionTitle: 'font-serif text-4xl font-bold leading-none tracking-[-.045em] sm:text-5xl', body: 'text-base leading-8' },
  surface: { card: 'border border-[#173f67]/12 bg-white', soft: 'border border-[#173f67]/12 bg-white', dark: 'bg-[#173f67] text-white' },
  button: { primary: 'inline-flex items-center justify-center gap-2 rounded-lg bg-[#173f67] px-7 py-3.5 text-xs font-extrabold uppercase tracking-[.12em] text-white transition hover:-translate-y-0.5 hover:bg-[#458b73]', secondary: 'inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#173f67] px-7 py-3 text-xs font-extrabold uppercase tracking-[.12em] transition hover:bg-[#173f67] hover:text-white', accent: 'inline-flex items-center justify-center gap-2 rounded-lg bg-[#458b73] px-7 py-3.5 text-xs font-extrabold uppercase tracking-[.12em] text-white transition hover:-translate-y-0.5 hover:bg-[#f26076]' },
  media: { frame: 'relative overflow-hidden bg-[#dff5f3]', ratio: 'aspect-[4/3]' },
  motion: { lift: 'transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(23,63,103,.14)]', fade: 'transition duration-300 hover:opacity-75' },
} as const

export const aiLayoutRules = ['Keep all visible layout changes in src/editable.', 'Use dynamic post data and safe fallbacks.', 'Maintain task routes and detail links.', 'Use a navy, coral, citrus and teal visual system.', 'Build responsive editorial variety.'] as const
