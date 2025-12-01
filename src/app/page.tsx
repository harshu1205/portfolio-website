import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeaturedWork from "@/components/featured-work"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedWork />
      <Contact />
      <Footer />
    </div>
  )
}
