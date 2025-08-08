import { PropsWithChildren } from 'react'

export default function Section({ id, title, children }: PropsWithChildren<{ id?: string; title?: string }>) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {title ? (
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  )
}
