import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { StatsSection } from "../components/sections/StatsSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ContactSection } from "../components/sections/ContactSection";
import { useLanguage } from "../i18n/useLanguage";
import { siteTheme } from "../theme/siteTheme";

export function HomePage() {
  // const { locale, setLocale, t } = useLanguage()

  return (
    <div className={siteTheme.classes.page}>
      <h1>Under construction</h1>
      {/* <Header
        nav={t.nav}
        locale={locale}
        onLocaleChange={setLocale}
        languageLabel={t.languageToggle.label}
      />

      <main>
        <HeroSection hero={t.hero} />
        <StatsSection stats={t.stats} />
        <ServicesSection
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
          items={t.services.items}
        />
        <ProjectsSection
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
          items={t.projects.items}
        />
        <ContactSection contact={t.contact} />
      </main>

      <Footer madeWith={t.footer.madeWith} /> */}
    </div>
  );
}
