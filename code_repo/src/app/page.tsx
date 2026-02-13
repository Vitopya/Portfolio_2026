import { HeroSection }    from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AboutSection }    from '@/components/sections/AboutSection';
import { ArticlesSection } from '@/components/sections/ArticlesSection';
import { ClientsSection }  from '@/components/sections/ClientsSection';
import { CTABanner }       from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <div className="flex flex-col pt-20">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ArticlesSection />
      <ClientsSection />
      <CTABanner />
    </div>
  );
}
