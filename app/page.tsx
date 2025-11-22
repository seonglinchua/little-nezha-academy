import {
  Navigation,
  Hero,
  Features,
  Modules,
  Benefits,
  Testimonials,
  CTA,
  Footer,
} from '@/components/sections'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Modules />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
