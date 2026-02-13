import { HeroSection }    from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AboutSection }    from '@/components/sections/AboutSection';
import { ArticlesSection } from '@/components/sections/ArticlesSection';
import { ClientsSection }  from '@/components/sections/ClientsSection';
import { CTABanner }       from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Hero — pinned in place while sections scroll over it */}
      <div className="sticky top-20 z-0 bg-[#F9F4EF]">
        <HeroSection />
      </div>

      {/* Sections — slide over the hero as the user scrolls down */}
      <div className="relative z-10 bg-[#F9F4EF]">
        <ProjectsSection />
        <AboutSection />
        <ArticlesSection />
        <ClientsSection />
        <CTABanner />
      </div>
    </>
  );
}
