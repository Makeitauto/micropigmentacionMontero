import Hero from '@/components/sections/Hero'
import Differentiation from '@/components/sections/Differentiation'
import Treatments from '@/components/sections/Treatments'
import BeforeAfter from '@/components/sections/BeforeAfter'
import Team from '@/components/sections/Team'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Certifications from '@/components/sections/Certifications'
import ContactForm from '@/components/sections/ContactForm'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Differentiation />
      <Treatments />
      <BeforeAfter />
      <Team />
      <Process />
      <Testimonials />
      <Certifications />
      <ContactForm />
    </div>
  )
}

