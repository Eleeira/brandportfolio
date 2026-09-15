export const bobinaPages = [
    /* ==========================================================
       02.01 - PROJECT COVER
       ========================================================== */

    {
        id: "bobina-cover",

        number: "02.01",

        type: "project-cover",

        title: {
            it: "Bobina Criminale",
            en: "Bobina Criminale",
        },

        subtitle: {
            it: "Editorial Identity · Cinema · Digital Product",
            en: "Editorial Identity · Cinema · Digital Product",
        },

        body: {
            it:
                "Identità editoriale e piattaforma digitale dedicate al cinema d'autore. Un progetto che unisce cultura cinematografica, direzione visiva, esperienza di lettura e strumenti per costruire una pubblicazione indipendente viva e partecipata.",

            en:
                "An editorial identity and digital platform dedicated to auteur cinema. A project combining film culture, visual direction, reading experience and the tools required to build a living, participatory independent publication.",
        },

        image:
            "/images/bobina/cover.jpg",
    },


    /* ==========================================================
       02.02 - THE PROBLEM
       ========================================================== */

    {
        id: "bobina-problem",

        number: "02.02",

        type: "text",

        title: {
            it: "Non un altro blog di cinema.",
            en: "Not another film blog.",
        },

        subtitle: {
            it: "Problema · Posizionamento · Voce",
            en: "Problem · Positioning · Voice",
        },

        body: {
            it:
                "La comunicazione cinematografica online oscilla spesso tra portali di informazione molto densi, recensioni standardizzate e contenuti costruiti per il consumo rapido. Bobina Criminale nasce dalla necessità opposta: creare uno spazio riconoscibile, autoriale e indipendente, in cui il cinema venga trattato come cultura prima ancora che come contenuto. La sfida era quindi costruire una pubblicazione digitale con una voce propria, capace di distinguersi senza imitare né una testata tradizionale né un semplice blog personale.",

            en:
                "Online film communication often moves between dense information portals, standardised reviews and content designed for rapid consumption. Bobina Criminale begins from the opposite need: to create a recognisable, independent and author-driven space where cinema is approached as culture before content. The challenge was therefore to build a digital publication with its own voice, without imitating either a traditional magazine or a personal blog.",
        },
    },


    /* ==========================================================
       02.03 - CONCEPT / POSITIONING
       ========================================================== */

    {
        id: "bobina-concept",

        number: "02.03",

        type: "text",

        title: {
            it: "Il cinema come materia editoriale.",
            en: "Cinema as editorial material.",
        },

        subtitle: {
            it: "Concept · Cultura · Direzione",
            en: "Concept · Culture · Direction",
        },

        body: {
            it:
                "Il progetto prende in prestito dal cinema non la sua iconografia più ovvia, ma il suo linguaggio: ritmo, sequenza, contrasto, attesa e costruzione dello sguardo. Bobina Criminale viene così pensata come una rivista digitale contemporanea, con un carattere colto ma non istituzionale, capace di alternare analisi, opinione e partecipazione. L'identità deve accompagnare la lettura, non competere con ciò che viene raccontato.",

            en:
                "Rather than borrowing cinema's most obvious iconography, the project draws from its language: rhythm, sequence, contrast, anticipation and the construction of the gaze. Bobina Criminale is conceived as a contemporary digital magazine with a cultured but non-institutional character, able to move between analysis, opinion and participation. The identity is designed to support reading rather than compete with the stories being told.",
        },
    },


    /* ==========================================================
       02.04 - VISUAL LANGUAGE
       ========================================================== */

    {
        id: "bobina-language",

        number: "02.04",

        type: "system",

        title: {
            it: "Una voce editoriale riconoscibile",
            en: "A recognisable editorial voice",
        },

        subtitle: {
            it: "Tipografia · Colore · Contrasto",
            en: "Typography · Colour · Contrast",
        },

        body: {
            it:
                "Il sistema visivo utilizza forti gerarchie tipografiche, ampie superfici scure, toni caldi e un accento bordeaux per costruire un'atmosfera vicina alla rivista cinematografica senza diventare nostalgica. Il contrasto tra immagini, testo e spazio negativo dà ritmo alle pagine e permette agli articoli di mantenere una presenza forte anche all'interno di un'interfaccia complessa.",

            en:
                "The visual system uses strong typographic hierarchies, dark surfaces, warm tones and a burgundy accent to evoke the atmosphere of a film publication without becoming nostalgic. Contrast between imagery, text and negative space creates rhythm across the pages and gives articles a strong presence even within a complex interface.",
        },

        typography: [
            {
                name: "Nome font display Bobina",
                family: '"Nome Font", serif',

                role: {
                    it: "Titoli editoriali",
                    en: "Editorial headlines",
                },

                sample: "Aa",
            },

            {
                name: "Nome font testo Bobina",
                family: '"Nome Font Testo", sans-serif',

                role: {
                    it: "Articoli e interfaccia",
                    en: "Articles and interface",
                },

                sample: "Aa",
            },
        ],

        palette: [
            {
                name: "Paper",
                value: "#EFE2CF",
            },
            {
                name: "Ink",
                value: "#2F231D",
            },
            {
                name: "Bordeaux",
                value: "#8B3A2E",
            },
        ],
    },



    {
        id: "bobina-logo",
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
                src: "/images/bobina/logo-primary.png",
                alt: {
                    it: "Logo principale Bobina Criminale",
                    en: "Bobina Criminale primary logo",
                },
            },

            {
                src: "/images/bobina/logo-secondary.png",
                alt: {
                    it: "Variante del logo Bobina Criminale",
                    en: "Bobina Criminale logo variation",
                },
            },
        ],
    },

    /* ==========================================================
       02.05 - EDITORIAL SYSTEM
       ========================================================== */

    {
        id: "bobina-editorial",

        number: "02.05",

        type: "image",

        title: {
            it: "Progettare per la lettura",
            en: "Designing for reading",
        },

        subtitle: {
            it: "Articoli · Gerarchie · Ritmo",
            en: "Articles · Hierarchy · Rhythm",
        },

        body: {
            it:
                "Titoli, immagini, firma dell'autore, metadata e corpo del testo sono organizzati come parti di un unico sistema editoriale. La gerarchia permette di orientarsi rapidamente senza sacrificare il ritmo della lettura, mentre ogni articolo mantiene abbastanza spazio per costruire una propria atmosfera attraverso fotografia e contenuto.",

            en:
                "Headlines, imagery, author signatures, metadata and body copy are organised as parts of one editorial system. The hierarchy provides orientation without sacrificing reading rhythm, while every article retains enough space to develop its own atmosphere through imagery and content.",
        },

        image:
            "/images/bobina/editorial.png",
    },


    /* ==========================================================
       02.06 - DIGITAL PRODUCT
       ========================================================== */

    {
        id: "bobina-interface",

        number: "02.06",

        type: "image",

        title: {
            it: "Una rivista che funziona",
            en: "A magazine that works",
        },

        subtitle: {
            it: "Community · Redazione · Piattaforma",
            en: "Community · Editorial team · Platform",
        },

        body: {
            it:
                "L'identità è stata tradotta in un prodotto digitale reale. Lettori e autori possono avere un profilo, salvare articoli, partecipare ai commenti e interagire con la pubblicazione, mentre la redazione dispone di strumenti dedicati alla scrittura, moderazione e pubblicazione. Il sistema tecnico rimane volutamente invisibile: il suo compito è sostenere l'identità editoriale e rendere possibile una relazione continua tra rivista, autori e lettori.",

            en:
                "The identity was translated into a functioning digital product. Readers and authors can create profiles, save articles, participate in discussions and interact with the publication, while the editorial team has dedicated tools for writing, moderation and publishing. The technical system deliberately remains invisible: its purpose is to support the editorial identity and enable an ongoing relationship between magazine, authors and readers.",
        },

        image:
            "/images/bobina/interface.png",
    },


    /* ==========================================================
       02.07 - OUTCOME
       ========================================================== */

    {
        id: "bobina-closing",

        number: "02.07",

        type: "closing",

        title: {
            it: "Dall'identità alla pubblicazione.",
            en: "From identity to publication.",
        },

        subtitle: {
            it: "Sistema · Esperienza · Comunità",
            en: "System · Experience · Community",
        },

        body: {
            it:
                "Bobina Criminale supera il concetto di sito editoriale statico e diventa un sistema capace di produrre, organizzare e condividere contenuti mantenendo una voce coerente. Identità visiva, esperienza di lettura e infrastruttura digitale partecipano allo stesso progetto: costruire uno spazio riconoscibile in cui parlare di cinema e creare una comunità attorno alla pubblicazione.",

            en:
                "Bobina Criminale moves beyond the idea of a static editorial website and becomes a system capable of producing, organising and sharing content while maintaining a coherent voice. Visual identity, reading experience and digital infrastructure belong to the same project: building a recognisable space for discussing cinema and creating a community around the publication.",
        },
    },
];