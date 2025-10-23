import SidebarNavigation from '@/components/SidebarNavigation'
import CompanyPresentation from '@/components/CompanyPresentation'
import ServicesGrid from '@/components/ServicesGrid'
import WebPagesSection from '@/components/WebPagesSection'
import ProjectsSection from '@/components/ProjectsSection'
import AboutSection from '@/components/AboutSection'
import MissionVisionSection from '@/components/MissionVisionSection'
import TeamSection from '@/components/TeamSection'
import ProcessSection from '@/components/ProcessSection'
import FooterSection from '@/components/FooterSection'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Page() {
  return (
    <div className="relative min-h-screen w-full">
      <SidebarNavigation />
      <main className="pt-20 transition-all duration-300 ease-in-out">
        <div className="px-4 md:px-8 lg:px-12 py-10 bg-background-dark bg-[radial-gradient(circle_at_top_right,_rgba(19,164,236,0.1),_transparent_40%)]">
          <div id="presentation"><CompanyPresentation /></div>
          <div id="services"><ServicesGrid /></div>
          <div id="webpages"><WebPagesSection /></div>
          <div id="projects"><ProjectsSection /></div>
          <div id="about"><AboutSection /></div>
          <div id="mission-vision"><MissionVisionSection /></div>
          <div id="team"><TeamSection /></div>
          <div id="process"><ProcessSection /></div>
          <div id="footer"><FooterSection /></div>
        </div>
      </main>
      <WhatsAppFloat />
    </div>
  )
}
