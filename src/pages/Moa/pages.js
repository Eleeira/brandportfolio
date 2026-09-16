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
                "MOA è un progetto personale nato per raccogliere in un unico spazio attività, scadenze, dati e piccoli strumenti di uso quotidiano. L'obiettivo era creare un'interfaccia semplice da consultare, ma con un'identità visiva più personale rispetto ai tradizionali software gestionali.",

            en:
                "MOA is a personal project created to bring everyday activities, deadlines, data and small tools into one place. The aim was to design an interface that was easy to use while giving it a more personal visual identity than a traditional management tool.",
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
                "Man mano che aggiungevo nuove funzioni, MOA rischiava di diventare troppo affollato. Informazioni molto diverse dovevano convivere nella stessa interfaccia senza avere tutte lo stesso peso. Il problema principale è stato quindi capire come organizzarle e renderle facili da trovare senza appesantire la navigazione.",

            en:
                "As I added new features, MOA risked becoming too crowded. Very different kinds of information had to coexist in the same interface without all having the same visual weight. The main challenge was finding a way to organise them and make them easy to find without making navigation feel heavy.",
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
                "Ho scelto di allontanarmi dall'aspetto più rigido dei gestionali tradizionali. Forme arrotondate, superfici traslucide e colori pastello rendono l'interfaccia più leggera, mentre una gerarchia semplice aiuta a distinguere dati, azioni e contenuti. L'idea era far percepire MOA più come uno spazio personale che come uno strumento tecnico.",

            en:
                "I chose to move away from the rigid look often associated with traditional management tools. Rounded shapes, translucent surfaces and pastel colours make the interface feel lighter, while a simple hierarchy helps separate data, actions and content. The idea was for MOA to feel more like a personal space than a technical tool.",
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
                "La palette di MOA parte da rosa, lavanda e tonalità neutre. Nella modalità chiara i colori rimangono luminosi e delicati; nella modalità scura diventano più profondi, con toni berry e plum. Ho mantenuto gli stessi accenti e la stessa struttura per far riconoscere l'identità di MOA in entrambe le versioni.",

            en:
                "MOA's palette is built around pink, lavender and neutral tones. In light mode the colours remain bright and soft; in dark mode they become deeper, shifting towards berry and plum tones. I kept the same accents and overall structure so that MOA would remain recognisable in both versions.",
        },

        typography: [
            {
                name: "Gowun Batang",

                family:
                    '"Gowun Batang", serif',

                role: {
                    it: "Titoli",
                    en: "Titles",
                },

                sample: "Aa",
            },

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
                    "/images/moa/smartphones.png",

                alt: {
                    it:
                        "Area attività di MOA",
                    en:
                        "MOA tasks interface",
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
                "MOA dimostra come un prodotto ricco di funzioni possa mantenere una forte identità senza sacrificare chiarezza e usabilità. Il risultato è un sistema visivo flessibile e capace di adattarsi a contenuti, strumenti e modalità differenti.",

            en:
                "MOA demonstrates how a feature-rich product can maintain a strong identity without sacrificing clarity and usability. The result is a flexible and capable of adapting to different content, tools and modes.",
        },
    },
];