import dallasbarn from "./dallasbarn.png";

const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2759.6208135581232!2d24.72590607738046!3d46.23788488148441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474b9fd669657fe9%3A0x2477d062b435dfc0!2sThe%20Dallas%20Barn!5e0!3m2!1sen!2sro!4v1774013725472!5m2!1sen!2sro'

export function WeddingPage() {
  return (
    <div className="wedding-page bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap');

        .wedding-page {
          --primary: #e6b319;
          --background-light: #f8f7f6;
          --background-dark: #211d11;
          --accent-gold: #d4af37;
          --rustic-wood: #4a3728;
          min-height: 100vh;
        }

        .wedding-page,
        .wedding-page * {
          text-transform: none;
        }

        .wedding-page.font-display,
        .wedding-page .font-display {
          font-family: 'Work Sans', sans-serif;
        }

        .wedding-page .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .wedding-page .bg-background-light {
          background-color: var(--background-light);
        }

        .wedding-page .bg-background-dark {
          background-color: var(--background-dark);
        }

        .wedding-page .text-primary {
          color: var(--primary);
        }

        .wedding-page .text-rustic-wood {
          color: var(--rustic-wood);
        }

        .wedding-page .text-rustic-wood\\/60 {
          color: rgba(74, 55, 40, 0.6);
        }

        .wedding-page .text-rustic-wood\\/40 {
          color: rgba(74, 55, 40, 0.4);
        }

        .wedding-page .bg-primary {
          background-color: var(--primary);
        }

        .wedding-page .bg-primary\\/10 {
          background-color: rgba(230, 179, 25, 0.1);
        }

        .wedding-page .bg-primary\\/20 {
          background-color: rgba(230, 179, 25, 0.2);
        }

        .wedding-page .border-primary\\/20 {
          border-color: rgba(230, 179, 25, 0.2);
        }

        .wedding-page .border-primary\\/10 {
          border-color: rgba(230, 179, 25, 0.1);
        }

        .wedding-page .hover\\:bg-primary\\/20:hover {
          background-color: rgba(230, 179, 25, 0.2);
        }

        .wedding-page .hover\\:bg-accent-gold:hover {
          background-color: var(--accent-gold);
        }

        .wedding-page .focus\\:border-primary:focus {
          border-color: var(--primary);
        }

        .wedding-page .focus\\:ring-primary:focus {
          box-shadow: 0 0 0 3px rgba(230, 179, 25, 0.25);
        }

        .wedding-page .cream-texture {
          background-color: #f8f7f6;
          background-image: radial-gradient(#e6e1d6 0.5px, transparent 0.5px);
          background-size: 20px 20px;
        }

        .wedding-page .material-symbols-outlined {
          display: inline-block;
          font-family: 'Material Symbols Outlined';
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          letter-spacing: normal;
          white-space: nowrap;
          direction: ltr;
          font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
          font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
        }

        .wedding-page .form-input {
          border-width: 1px;
          border-style: solid;
          outline: none;
        }

        .dark .wedding-page .dark\\:bg-background-dark {
          background-color: var(--background-dark);
        }

        .dark .wedding-page .dark\\:bg-background-dark\\/50 {
          background-color: rgba(33, 29, 17, 0.5);
        }

        .dark .wedding-page .dark\\:text-primary {
          color: var(--primary);
        }

        .dark .wedding-page .dark\\:border-rustic-wood {
          border-color: var(--rustic-wood);
        }

        .dark .wedding-page .dark\\:bg-none {
          background-image: none;
        }
      `}</style>

      <div className="relative flex h-auto min-h-screen w-full flex-col cream-texture dark:bg-none">
        <div className="layout-container flex h-full grow flex-col items-center">
          <header className="w-full max-w-[960px] flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-6 py-6 md:px-10">
            <div className="flex items-center gap-4 text-rustic-wood dark:text-primary">
              <div className="size-8 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">fluid</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                Confirmare invitație
              </h2>
            </div>
            <button
              type="button"
              className="flex items-center justify-center rounded-full size-12 bg-primary/10 hover:bg-primary/20 text-primary transition-all"
            >
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </header>

          <main className="layout-content-container flex flex-col max-w-[800px] w-full flex-1 px-4 md:px-0 py-10">
            <div className="mb-10 text-center">
              <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8 shadow-xl border-4 border-white dark:border-rustic-wood">
                <img src={dallasbarn} alt="The Dallas Barn" className="w-full h-full object-cover" />
              </div>

              <h1 className="font-serif italic text-5xl md:text-6xl text-rustic-wood dark:text-primary mb-4">
                Ne vedem la nuntă
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg mx-auto leading-relaxed">
                Vă rugăm să ne confirmați participarea și să ne trimiteți
                detaliile de care avem nevoie pentru organizare.
              </p>
            </div>

            <section className="mb-10 rounded-xl border border-primary/10 bg-white/55 p-6 shadow-sm backdrop-blur-sm">
              <p className="font-serif text-2xl text-rustic-wood dark:text-slate-200">
                Locația evenimentului
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-800 dark:text-slate-100">
                The Dallas Barn, Sighisoara
              </p>
              <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                Mai jos găsiți harta locației, pentru a ajunge ușor la
                eveniment.
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-primary/10 shadow-sm">
                <iframe
                  allowFullScreen
                  className="block h-[320px] w-full md:h-[450px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapEmbedUrl}
                  title="Harta locației The Dallas Barn, Sighisoara"
                />
              </div>
            </section>

            <form
              className="bg-white/50 dark:bg-background-dark/50 backdrop-blur-sm p-6 md:p-12 rounded-xl shadow-sm border border-primary/10 space-y-8"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-rustic-wood dark:text-slate-200">
                      Nume
                    </span>
                    <input
                      className="form-input w-full rounded-lg border-primary/20 bg-white/80 dark:bg-background-dark focus:border-primary focus:ring-primary h-14 px-4 text-lg placeholder:text-slate-400"
                      placeholder="Numele complet"
                      type="text"
                    />
                  </label>
                </div>

                <div>
                  <label className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-rustic-wood dark:text-slate-200">
                      Număr de invitați
                    </span>
                    <input
                      className="form-input w-full rounded-lg border-primary/20 bg-white/80 dark:bg-background-dark focus:border-primary focus:ring-primary h-14 px-4 text-lg placeholder:text-slate-400"
                      min="1"
                      placeholder="1"
                      type="number"
                    />
                  </label>
                </div>

                <div>
                  <label className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-rustic-wood dark:text-slate-200">
                      Telefon
                    </span>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
                        call
                      </span>
                      <input
                        className="form-input w-full rounded-lg border-primary/20 bg-white/80 dark:bg-background-dark focus:border-primary focus:ring-primary h-14 pl-12 pr-4 text-lg placeholder:text-slate-400"
                        placeholder="+40 7xx xxx xxx"
                        type="tel"
                      />
                    </div>
                  </label>
                </div>

                <div>
                  <label className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-rustic-wood dark:text-slate-200">
                      Email
                    </span>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
                        mail
                      </span>
                      <input
                        className="form-input w-full rounded-lg border-primary/20 bg-white/80 dark:bg-background-dark focus:border-primary focus:ring-primary h-14 pl-12 pr-4 text-lg placeholder:text-slate-400"
                        placeholder="nume@exemplu.ro"
                        type="email"
                      />
                    </div>
                  </label>
                </div>

                <fieldset className="col-span-1 md:col-span-2">
                  <legend className="font-serif text-xl text-rustic-wood dark:text-slate-200">
                    Vă ajutăm cu cazarea?
                  </legend>
                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <label className="flex items-start gap-3 rounded-lg border border-primary/20 bg-white/80 p-4 text-slate-700 dark:bg-background-dark dark:text-slate-200">
                      <input
                        className="mt-1 h-5 w-5 accent-[var(--primary)]"
                        type="checkbox"
                        value="Nu, ne ocupam"
                      />
                      <span className="text-lg leading-relaxed">
                        Nu, ne ocupăm
                      </span>
                    </label>

                    <label className="flex items-start gap-3 rounded-lg border border-primary/20 bg-white/80 p-4 text-slate-700 dark:bg-background-dark dark:text-slate-200">
                      <input
                        className="mt-1 h-5 w-5 accent-[var(--primary)]"
                        type="checkbox"
                        value="Da, am vrea"
                      />
                      <span className="text-lg leading-relaxed">
                        Da, am vrea
                      </span>
                    </label>
                  </div>
                </fieldset>

              </div>

              <div className="pt-6">
                <button
                  className="w-full h-16 bg-primary hover:bg-accent-gold text-rustic-wood font-bold text-xl rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                  type="submit"
                >
                  <span className="material-symbols-outlined">send</span>
                  Salvează datele de contact
                </button>
              </div>
            </form>

            <footer className="mt-20 mb-10 text-center">
              <div className="flex justify-center gap-6 text-rustic-wood/60 dark:text-slate-500 mb-4">
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">
                  share
                </span>
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">
                  print
                </span>
                <span className="material-symbols-outlined cursor-pointer hover:text-primary">
                  calendar_today
                </span>
              </div>
              <p className="text-sm font-medium uppercase tracking-widest text-rustic-wood/40 dark:text-slate-600">
                Din 2024 • Făcut cu drag
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}

export default WeddingPage
