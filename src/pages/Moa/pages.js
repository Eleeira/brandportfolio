export const moaPages = [
    /* ==========================================================
       03.01 - PROJECT COVER
       ========================================================== */

    {
        id: "moa-cover",

        number: "03.01",

        type: "project-cover",

        title: {
            it: "MOA",
            en: "MOA",
        },

        subtitle: {
            it: "Digital Product · UI System · Personal Finance",
            en: "Digital Product · UI System · Personal Finance",
        },

        body: {
            it:
                "Un prodotto digitale progettato per trasformare attività quotidiane, dati e strumenti personali in un'esperienza coerente, intuitiva e riconoscibile.",

            en:
                "A digital product designed to transform everyday activities, data and personal tools into a coherent, intuitive and recognisable experience.",
        },

        image:
            "/images/moa/cover.png",
    },


    /* ==========================================================
       03.02 - PROBLEM
       ========================================================== */

    {
        id: "moa-problem",

        number: "03.02",

        type: "text",

        title: {
            it: "Ridurre la complessità.",
            en: "Reducing complexity.",
        },

        subtitle: {
            it: "Problema · Organizzazione · Esperienza",
            en: "Problem · Organisation · Experience",
        },

        body: {
            it:
                "MOA nasce dall'esigenza di raccogliere funzioni, dati e attività differenti all'interno di un unico ambiente digitale. La sfida era evitare che la quantità di informazioni producesse un'interfaccia fredda o eccessivamente tecnica, costruendo invece un sistema capace di rendere leggibili anche flussi complessi.",

            en:
                "MOA was created from the need to bring different functions, data and activities into a single digital environment. The challenge was to prevent the amount of information from producing a cold or overly technical interface, instead building a system capable of making complex flows easy to understand.",
        },
    },


    /* ==========================================================
       03.03 - DESIGN RESPONSE
       ========================================================== */

    {
        id: "moa-concept",

        number: "03.03",

        type: "text",

        title: {
            it: "Tecnologia più morbida.",
            en: "Softer technology.",
        },

        subtitle: {
            it: "Concept · Personalità · Interazione",
            en: "Concept · Personality · Interaction",
        },

        body: {
            it:
                "La risposta progettuale combina struttura funzionale e un linguaggio visivo più morbido, personale e accessibile. Superfici traslucide, forme arrotondate, colori pastello e gerarchie semplici riducono la distanza tra utente e sistema, trasformando un'interfaccia gestionale in un ambiente più familiare e piacevole da utilizzare.",

            en:
                "The design response combines functional structure with a softer, more personal and accessible visual language. Translucent surfaces, rounded forms, pastel colours and clear hierarchies reduce the distance between user and system, turning a management interface into a more familiar and pleasant environment.",
        },
    },


    /* ==========================================================
       03.04 - VISUAL SYSTEM
       ========================================================== */

    {
        id: "moa-system",

        number: "03.04",

        type: "system",

        title: {
            it: "Un sistema, due atmosfere",
            en: "One system, two moods",
        },

        subtitle: {
            it: "Tipografia · Light mode · Dark mode",
            en: "Typography · Light mode · Dark mode",
        },

        body: {
            it:
                "MOA utilizza un sistema cromatico adattivo costruito su rosa, lavanda e tonalità naturali. La modalità chiara mantiene un carattere luminoso e morbido, mentre quella scura traduce gli stessi accenti in una palette berry e plum più profonda, mantenendo continuità visiva tra le due esperienze.",

            en:
                "MOA uses an adaptive colour system built around pink, lavender and natural tones. The light mode maintains a soft and luminous character, while the dark mode translates the same accents into a deeper berry and plum palette, preserving visual continuity between the two experiences.",
        },

        typography: [
            {
                name: "Montserrat",

                family:
                    '"Montserrat", sans-serif',

                role: {
                    it: "Testi, dati e interfaccia",
                    en: "Body copy, data and interface",
                },

                sample: "Aa",
            },
        ],

        palette: [
            /* LIGHT */

            {
                name: "Light · Background",
                value: "#F8EEF4",
            },

            {
                name: "Light · Pink",
                value: "#E9B8C9",
            },

            {
                name: "Light · Lavender",
                value: "#D8C8E9",
            },


            /* DARK */

            {
                name: "Dark · Background",
                value: "#160F16",
            },

            {
                name: "Dark · Pink",
                value: "#A85B78",
            },

            {
                name: "Dark · Lavender",
                value: "#78638F",
            },
        ],



    },



    {
        id: "moa-logo",
        number: "04",
        type: "logo",

        title: {
            it: "Logo",
            en: "Logo",
        },

        body: {
            it: "Il sistema del marchio e le sue principali varianti.",
            en: "The brand mark system and its main variations.",
        },

        images: [
            {
                src: "images/moa/logo-primary.png",
                alt: {
                    it: "Logo principale MOA",
                    en: "MOA primary logo",
                },
            },

        ],
    },


    /* ==========================================================
       03.05 - INTERFACE
       ========================================================== */

    {
        id: "moa-interface",

        number: "03.05",

        type: "image",

        title: {
            it: "Un'interfaccia quotidiana",
            en: "An everyday interface",
        },

        subtitle: {
            it: "Dashboard · Componenti · Navigazione",
            en: "Dashboard · Components · Navigation",
        },

        body: {
            it:
                "La struttura dell'interfaccia è costruita per rendere immediatamente leggibili informazioni, azioni e priorità. I componenti condividono proporzioni, superfici e comportamenti coerenti, permettendo al sistema di crescere senza perdere riconoscibilità.",

            en:
                "The interface structure is designed to make information, actions and priorities immediately readable. Components share consistent proportions, surfaces and behaviours, allowing the system to grow without losing recognisability.",
        },

        images: [
            {
                src:
                    "/images/moa/ui-moa-mobile.png",

                alt: {
                    it:
                        "MOA login mobile",
                    en:
                        "MOA login mobile",
                },
            },

            {
                src:
                    "/images/moa/ui-moa-desktop.png",

                alt: {
                    it:
                        "MOA desktop interfaccia",
                    en:
                        "MOA desktop interface",
                },
            },

            {
                src:
                    "/images/moa/ui-moa-mockup.png",

                alt: {
                    it:
                        "Area attività di MOA",
                    en:
                        "MOA tasks interface",
                },
            },
        ],
    },



    /* ==========================================================
       03.06 - LIGHT / DARK
       ========================================================== */

    {
        id: "moa-themes",

        number: "03.06",

        type: "image",

        title: {
            it: "Due modalità, stessa identità",
            en: "Two modes, one identity",
        },

        subtitle: {
            it: "Light · Dark · Adaptive system",
            en: "Light · Dark · Adaptive system",
        },

        body: {
            it:
                "Light e Dark Mode non sono due identità separate, ma due interpretazioni dello stesso sistema. Colori, contrasti, superfici e accenti vengono rimappati mantenendo invariati gerarchie, componenti e personalità del prodotto.",

            en:
                "Light and Dark Mode are not two separate identities, but two interpretations of the same system. Colours, contrast, surfaces and accents are remapped while keeping hierarchy, components and product personality consistent.",
        },




        lightImage:
            "/images/moa/ui-light.png",

        darkImage:
            "/images/moa/ui-dark.png",
    },




    /* ==========================================================
       03.07 - OUTCOME
       ========================================================== */

    {
        id: "moa-closing",

        number: "03.07",

        type: "closing",

        title: {
            it: "Complessità resa familiare.",
            en: "Complexity made familiar.",
        },

        subtitle: {
            it: "Sistema · Coerenza · Esperienza",
            en: "System · Consistency · Experience",
        },

        body: {
            it:
                "MOA dimostra come un prodotto ricco di funzioni possa mantenere una forte identità senza sacrificare chiarezza e usabilità. Il risultato è un sistema visivo flessibile, riconoscibile e capace di adattarsi a contenuti, strumenti e modalità differenti.",

            en:
                "MOA demonstrates how a feature-rich product can maintain a strong identity without sacrificing clarity and usability. The result is a flexible, recognisable visual system capable of adapting to different content, tools and modes.",
        },
    },
];