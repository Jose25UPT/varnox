import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import AboutSection from '@/components/AboutSection'
import ProcessSection from '@/components/ProcessSection'
import ContactForm from '@/components/ContactForm'
import FooterSection from '@/components/FooterSection'

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ProcessSection />
      <ContactForm />
      <FooterSection />
    </div>
  )
}
