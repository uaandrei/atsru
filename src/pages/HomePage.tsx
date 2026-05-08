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
