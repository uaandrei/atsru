const heroImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB57uob_Nzx8EEVwON2fHEvgibZqrI96HDbXSD1q3259lW9hHX_wIg060dvZ6JF2SK9O-hS61SUgtJ26UUKiAHo8iD9vTQbmbw0rGN0-MyfCwaUg_hyA09wkya6M54qbNoMoEjlltlrDee_cTLYhYhydouKsgzx2PbgxwyCzrYSmiU1s5L1escF7oc0Ny6pokIOki8HgFd8pebaaQmHWtRsOqrmnEptnFMKAXdqnBAz6oGH78RlveFQK5xyXgZwvHvzKGsXTnVd_uk'

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
                Lista de cadouri
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
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover"
                  data-alt="Recepție elegantă de nuntă, cu lumini calde și drapaje crem"
                  style={{ backgroundImage: `url("${heroImageUrl}")` }}
                />
              </div>

              <h1 className="font-serif italic text-5xl md:text-6xl text-rustic-wood dark:text-primary mb-4">
                Rămânem în legătură
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg mx-auto leading-relaxed">
                Ne-ar plăcea să rămânem aproape și să vă ținem la curent cu
                drumul nostru și cu viitoarele bucurii. Vă rugăm să ne lăsați
                datele voastre.
              </p>
            </div>

            <form
              className="bg-white/50 dark:bg-background-dark/50 backdrop-blur-sm p-6 md:p-12 rounded-xl shadow-sm border border-primary/10 space-y-8"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-rustic-wood dark:text-slate-200">
                      Numele invitaților
                    </span>
                    <input
                      className="form-input w-full rounded-lg border-primary/20 bg-white/80 dark:bg-background-dark focus:border-primary focus:ring-primary h-14 px-4 text-lg placeholder:text-slate-400"
                      placeholder="Numele complete ale tuturor invitaților care participă"
                      type="text"
                    />
                  </label>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-rustic-wood dark:text-slate-200">
                      Adresa poștală
                    </span>
                    <textarea
                      className="form-input w-full rounded-lg border-primary/20 bg-white/80 dark:bg-background-dark focus:border-primary focus:ring-primary min-h-[120px] p-4 text-lg placeholder:text-slate-400"
                      placeholder="Stradă, număr, apartament, oraș, județ, cod poștal"
                    />
                  </label>
                </div>

                <div>
                  <label className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-rustic-wood dark:text-slate-200">
                      Adresă de email
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

                <div>
                  <label className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-rustic-wood dark:text-slate-200">
                      Număr de telefon
                    </span>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
                        call
                      </span>
                      <input
                        className="form-input w-full rounded-lg border-primary/20 bg-white/80 dark:bg-background-dark focus:border-primary focus:ring-primary h-14 pl-12 pr-4 text-lg placeholder:text-slate-400"
                        placeholder="(555) 000-0000"
                        type="tel"
                      />
                    </div>
                  </label>
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-serif text-xl text-rustic-wood dark:text-slate-200">
                      Note speciale
                    </span>
                    <textarea
                      className="form-input w-full rounded-lg border-primary/20 bg-white/80 dark:bg-background-dark focus:border-primary focus:ring-primary min-h-[100px] p-4 text-lg placeholder:text-slate-400"
                      placeholder="Restricții alimentare, preferințe muzicale sau un mesaj drag pentru noi..."
                    />
                  </label>
                </div>
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
