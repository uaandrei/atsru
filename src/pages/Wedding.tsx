< !DOCTYPE html >

    <html lang="en"><head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&amp;family=Playfair+Display:ital,wght@0,400..900;1,400..900&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script id="tailwind-config">
            tailwind.config = {
                darkMode: "class",
            theme: {
                extend: {
                colors: {
                "primary": "#e6b319",
            "background-light": "#f8f7f6",
            "background-dark": "#211d11",
            "accent-gold": "#d4af37",
            "rustic-wood": "#4a3728",
                    },
            fontFamily: {
                "display": ["Work Sans", "sans-serif"],
            "serif": ["Playfair Display", "serif"]
                    },
            borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
        </script>
        <style>
            .cream-texture {
                background - color: #f8f7f6;
            background-image: radial-gradient(#e6e1d6 0.5px, transparent 0.5px);
            background-size: 20px 20px;
        }
        </style>
    </head>
        <body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <div class="relative flex h-auto min-h-screen w-full flex-col cream-texture dark:bg-none">
                <div class="layout-container flex h-full grow flex-col items-center">
                    <header class="w-full max-w-[960px] flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-6 py-6 md:px-10">
                        <div class="flex items-center gap-4 text-rustic-wood dark:text-primary">
                            <div class="size-8 flex items-center justify-center">
                                <span class="material-symbols-outlined text-3xl">fluid</span>
                            </div>
                            <h2 class="font-serif text-2xl md:text-3xl font-bold leading-tight tracking-tight">The Registry</h2>
                        </div>
                        <button class="flex items-center justify-center rounded-full size-12 bg-primary/10 hover:bg-primary/20 text-primary transition-all">
                            <span class="material-symbols-outlined">favorite</span>
                        </button>
                    </header>
                    <main class="layout-content-container flex flex-col max-w-[800px] w-full flex-1 px-4 md:px-0 py-10">
                        <div class="mb-10 text-center">
                            <div class="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8 shadow-xl border-4 border-white dark:border-rustic-wood">
                                <div class="w-full h-full bg-center bg-no-repeat bg-cover" data-alt="Elegant wedding reception with warm lighting and cream drapes" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB57uob_Nzx8EEVwON2fHEvgibZqrI96HDbXSD1q3259lW9hHX_wIg060dvZ6JF2SK9O-hS61SUgtJ26UUKiAHo8iD9vTQbmbw0rGN0-MyfCwaUg_hyA09wkya6M54qbNoMoEjlltlrDee_cTLYhYhydouKsgzx2PbgxwyCzrYSmiU1s5L1escF7oc0Ny6pokIOki8HgFd8pebaaQmHWtRsOqrmnEptnFMKAXdqnBAz6oGH78RlveFQK5xyXgZwvHvzKGsXTnVd_uk");'>
                                </div>
                            </div>
                            <h1 class="font-serif italic text-5xl md:text-6xl text-rustic-wood dark:text-primary mb-4">Stay in Touch</h1>
                            <div class="w-24 h-1 bg-primary mx-auto mb-6"></div>
                            <p class="text-slate-600 dark:text-slate-400 text-lg max-w-lg mx-auto leading-relaxed">
                                We'd love to keep you updated on our journey and future celebrations. Please share your details with us.
                            </p>
                        </div>
                        <form class="bg-white/50 dark:bg-background-dark/50 backdrop-blur-sm p-6 md:p-12 rounded-xl shadow-sm border border-primary/10 space-y-8">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div class="col-span-1 md:col-span-2">
                                    <label class="flex flex-col gap-2">
                                        <span class="font-serif text-xl text-rustic-wood dark:text-slate-200">Guest Names</span>
                                        <input class="form-input w-full rounded-lg border-primary/20 bg-white/80 dark:bg-background-dark focus:border-primary focus:ring-primary h-14 px-4 text-lg placeholder:text-slate-400" placeholder="Full names of all guests attending" type="text" />
                                    </label>
                                </div>
                                <div class="col-span-1 md:col-span-2">
                                    <label class="flex flex-col gap-2">
                                        <span class="font-serif text-xl text-rustic-wood dark:text-slate-200">Mailing Address</span>
                                        <textarea class="form-input w-full rounded-lg border-primary/20 bg-white/80 dark:bg-background-dark focus:border-primary focus:ring-primary min-h-[120px] p-4 text-lg placeholder:text-slate-400" placeholder="Street Address, Apartment, City, State, ZIP"></textarea>
                                    </label>
                                </div>
                                <div>
                                    <label class="flex flex-col gap-2">
                                        <span class="font-serif text-xl text-rustic-wood dark:text-slate-200">Email Address</span>
                                        <div class="relative">
                                            <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">mail</span>
                                            <input class="form-input w-full rounded-lg border-primary/20 bg-white/80 dark:bg-background-dark focus:border-primary focus:ring-primary h-14 pl-12 pr-4 text-lg placeholder:text-slate-400" placeholder="hello@example.com" type="email" />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label class="flex flex-col gap-2">
                                        <span class="font-serif text-xl text-rustic-wood dark:text-slate-200">Phone Number</span>
                                        <div class="relative">
                                            <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">call</span>
                                            <input class="form-input w-full rounded-lg border-primary/20 bg-white/80 dark:bg-background-dark focus:border-primary focus:ring-primary h-14 pl-12 pr-4 text-lg placeholder:text-slate-400" placeholder="(555) 000-0000" type="tel" />
                                        </div>
                                    </label>
                                </div>
                                <div class="col-span-1 md:col-span-2">
                                    <label class="flex flex-col gap-2">
                                        <span class="font-serif text-xl text-rustic-wood dark:text-slate-200">Special Notes</span>
                                        <textarea class="form-input w-full rounded-lg border-primary/20 bg-white/80 dark:bg-background-dark focus:border-primary focus:ring-primary min-h-[100px] p-4 text-lg placeholder:text-slate-400" placeholder="Dietary restrictions, song requests, or just a sweet message..."></textarea>
                                    </label>
                                </div>
                            </div>
                            <div class="pt-6">
                                <button class="w-full h-16 bg-primary hover:bg-accent-gold text-rustic-wood font-bold text-xl rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-3" type="submit">
                                    <span class="material-symbols-outlined">send</span>
                                    Save Contact Details
                                </button>
                            </div>
                        </form>
                        <footer class="mt-20 mb-10 text-center">
                            <div class="flex justify-center gap-6 text-rustic-wood/60 dark:text-slate-500 mb-4">
                                <span class="material-symbols-outlined cursor-pointer hover:text-primary">share</span>
                                <span class="material-symbols-outlined cursor-pointer hover:text-primary">print</span>
                                <span class="material-symbols-outlined cursor-pointer hover:text-primary">calendar_today</span>
                            </div>
                            <p class="text-sm font-medium uppercase tracking-widest text-rustic-wood/40 dark:text-slate-600">
                                Est. 2024 • Made with Love
                            </p>
                        </footer>
                    </main>
                </div>
            </div>
        </body></html>