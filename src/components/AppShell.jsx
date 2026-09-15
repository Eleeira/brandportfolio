import {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

import Notebook from "./Notebook";


/* ==========================================================
   HEADER
   ========================================================== */

function Header() {
    return (
        <header
            className="
                relative
                mx-auto
                w-full
                max-w-[920px]

                px-5
                pb-3
                pt-7

                min-[640px]:px-8
                min-[640px]:pb-[0.85rem]

                min-[701px]:pt-8

                max-[700px]:pt-[1.35rem]
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-[680px]
                    flex-col
                    items-center
                    text-center
                "
            >
                {/* TITLE */}

                <h1
                    className="
                        m-0
                        flex
                        flex-wrap
                        items-baseline
                        justify-center
                        gap-x-[0.32em]

                        [font-family:var(--font-display)]
                        [font-size:var(--type-site-title)]
                        font-[550]
                        leading-[0.95]
                        tracking-[-0.025em]

                        [color:var(--cartoon-ink)]
                    "
                >
                    <span>
                        Portfolio
                    </span>

                    <span
                        className="
                            [color:var(--cartoon-pink)]
                        "
                    >
                        2026
                    </span>
                </h1>

                {/* DECORATIVE MARK */}

                <div
                    className="
                        mt-[0.7rem]
                        flex
                        items-center
                        justify-center
                        gap-[0.35rem]
                    "
                    aria-hidden="true"
                >
                    <span
                        className="
                            size-[5px]
                            rounded-full
                            bg-[var(--cartoon-pink)]
                        "
                    />

                    <span
                        className="
                            h-[3px]
                            w-8
                            rounded-full
                            bg-[var(--cartoon-yellow)]
                        "
                    />

                    <span
                        className="
                            size-[5px]
                            rounded-full
                            bg-[var(--cartoon-mint)]
                        "
                    />
                </div>

                {/* NAME */}

                <p
                    className="
                        mb-0
                        mt-[0.55rem]

                        [font-family:var(--font-hand)]
                        text-[1.05rem]
                        font-normal
                        leading-none

                        [color:var(--cartoon-muted)]
                    "
                >
                    Adina G. Catucci
                </p>
            </div>
        </header>
    );
}


/* ==========================================================
   LANGUAGE SWITCH
   ========================================================== */

function LanguageSwitch({
    language,
    onChange,
}) {
    const languages = [
        {
            id: "it",
            label: "IT",
            active:
                "bg-[var(--cartoon-pink-soft)] [border-color:var(--cartoon-pink)]",
        },
        {
            id: "en",
            label: "EN",
            active:
                "bg-[var(--cartoon-mint-soft)] [border-color:var(--cartoon-mint-deep)]",
        },
    ];

    return (
        <div
            className="
                flex
                items-center
                gap-[0.2rem]

                rounded-full
                border
                [border-color:var(--cartoon-line)]

                bg-[var(--cartoon-paper-soft)]
                p-[0.2rem]

                shadow-[var(--cartoon-shadow-sm)]

                [font-family:var(--font-sans)]
            "
            role="group"
            aria-label={
                language === "it"
                    ? "Seleziona lingua"
                    : "Select language"
            }
        >
            {languages.map(
                (item) => {
                    const active =
                        language ===
                        item.id;

                    return (
                        <button
                            key={
                                item.id
                            }
                            type="button"
                            onClick={() =>
                                onChange(
                                    item.id
                                )
                            }
                            aria-pressed={
                                active
                            }
                            className={`
                                relative
                                flex
                                h-8
                                min-w-[2.65rem]
                                cursor-pointer
                                items-center
                                justify-center

                                rounded-full
                                border

                                px-[0.7rem]

                                [font-size:var(--type-ui)]
                                font-bold
                                uppercase
                                tracking-[0.08em]

                                transition-[background,border-color,color,transform,box-shadow]
                                duration-[200ms]
                                ease-out

                                ${active
                                    ? `
                                            ${item.active}

                                            [color:var(--cartoon-ink)]

                                            shadow-[0_3px_10px_rgba(64,55,64,0.08)]
                                        `
                                    : `
                                            border-transparent
                                            bg-transparent
                                            [color:var(--cartoon-muted)]

                                            hover:bg-[var(--cartoon-yellow-soft)]
                                            hover:[color:var(--cartoon-ink)]

                                            active:scale-[0.96]
                                        `
                                }

                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-[var(--cartoon-pink)]
                                focus-visible:ring-offset-2
                            `}
                        >
                            {item.label}

                            {active && (
                                <span
                                    className="
                                        absolute
                                        -bottom-[2px]
                                        left-1/2
                                        size-[4px]
                                        -translate-x-1/2
                                        rounded-full
                                        bg-[var(--cartoon-ink)]
                                    "
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    );
                }
            )}
        </div>
    );
}





/* ==========================================================
   CONTROL BUTTON
   ========================================================== */

function ControlButton({
    direction,
    disabled,
    onClick,
}) {
    const previous =
        direction ===
        "previous";

    const Icon =
        previous
            ? ArrowLeft
            : ArrowRight;

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={
                previous
                    ? "Previous page"
                    : "Next page"
            }
            className="
                group
                flex
                size-10
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                [border-color:var(--cartoon-line)]
                [background:rgba(255,250,244,0.55)]
                [color:var(--cartoon-ink)]
                shadow-[0_5px_16px_rgba(42,36,31,0.03)]
                transition-[transform,color,background,border-color]
                duration-[220ms]

                enabled:hover:[border-color:var(--cartoon-cinerous)]
                enabled:hover:[background:var(--cartoon-concerto)]

                enabled:active:scale-95

                disabled:pointer-events-none
                disabled:border-transparent
                disabled:bg-transparent
                disabled:[color:var(--cartoon-cloudy)]
                disabled:opacity-50
            "
        >
            <Icon
                size={17}
                strokeWidth={1.45}
                className={`
                    transition-transform
                    duration-[220ms]

                    ${previous
                        ? "group-hover:-translate-x-[2px]"
                        : "group-hover:translate-x-[2px]"
                    }
                `}
            />
        </button>
    );
}


/* ==========================================================
   BOOK CONTROLS
   ========================================================== */

function BookControls({
    current,
    total,
    canPrevious,
    canNext,
    onPrevious,
    onNext,
}) {
    return (
        <div
            className="
                mx-auto
                grid
                w-full
                max-w-[220px]
                grid-cols-[40px_1fr_40px]
                items-center
                gap-3
            "
        >
            <div className="justify-self-start">
                <ControlButton
                    direction="previous"
                    disabled={
                        !canPrevious
                    }
                    onClick={
                        onPrevious
                    }
                />
            </div>

            <div
                className="
                    flex
                    items-center
                    justify-center
                    whitespace-nowrap
                    [font-size:var(--type-ui)]
                    font-medium
                    tabular-nums
                    tracking-[0.08em]
                    [font-family:var(--font-sans)]
                "
                aria-label={`Page ${current} of ${total}`}
            >
                <span
                    className="
                        min-w-[1.8rem]
                        text-right
                        [color:var(--cartoon-ink)]
                    "
                >
                    {String(
                        current
                    ).padStart(
                        2,
                        "0"
                    )}
                </span>

                <span
                    className="
                        mx-[0.55rem]
                        h-px
                        w-[1.3rem]
                        [background:var(--cartoon-cloudy)]
                    "
                    aria-hidden="true"
                />

                <span
                    className="
                        min-w-[1.8rem]
                        text-left
                        [color:var(--cartoon-muted)]
                    "
                >
                    {String(
                        total
                    ).padStart(
                        2,
                        "0"
                    )}
                </span>
            </div>

            <div className="justify-self-end">
                <ControlButton
                    direction="next"
                    disabled={
                        !canNext
                    }
                    onClick={
                        onNext
                    }
                />
            </div>
        </div>
    );
}


/* ==========================================================
   FOOTER
   ========================================================== */

const footerLinks = [
    {
        label: "stellacatucci.com",
        href: "https://stellacatucci.com",
    },

    {
        label: "info@stellacatucci.com",
        href: "mailto:info@stellacatucci.com",
    },

    {
        label: "@stellacatucciweb / @stellananabianca",
        href: "https://www.instagram.com/stellacatucciweb",
    },

    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/stellacatucci",
    },
];

const footerCopy = {
    it: {
        note: "contatti",
        ariaLabel:
            "Contatti e social",
    },

    en: {
        note: "you can find me here too",
        ariaLabel:
            "Contacts and social links",
    },
};

function Footer({
    language = "it",
}) {
    const copy =
        footerCopy[language] ??
        footerCopy.it;

    const accentClasses = [
        `
            hover:bg-[var(--cartoon-pink-soft)]
            hover:[border-color:var(--cartoon-pink)]
        `,
        `
            hover:bg-[var(--cartoon-yellow-soft)]
            hover:[border-color:var(--cartoon-yellow-deep)]
        `,
        `
            hover:bg-[var(--cartoon-mint-soft)]
            hover:[border-color:var(--cartoon-mint-deep)]
        `,
        `
            hover:bg-[var(--cartoon-peach)]
            hover:[border-color:var(--cartoon-cinerous)]
        `,
    ];

    return (
        <footer
            className="
                relative
                mx-auto
                w-full
                max-w-[760px]

                -translate-y-[2rem]

                [font-family:var(--font-sans)]

                max-[700px]:translate-y-0
            "
        >
            <div
                className="
                    flex
                    flex-col
                    items-center
                    gap-[0.7rem]

                    pt-[0.9rem]
                "
            >
                <span
                    className="
                        [font-family:var(--font-hand)]
                        text-[0.95rem]
                        font-normal
                        [color:var(--cartoon-cinerous)]
                    "
                >
                    {copy.note}
                </span>

                <nav
                    className="
                        flex
                        flex-wrap
                        items-center
                        justify-center
                        gap-[0.45rem]
                    "
                    aria-label={
                        copy.ariaLabel
                    }
                >
                    {footerLinks.map(
                        (
                            link,
                            index
                        ) => {
                            const external =
                                link.href.startsWith(
                                    "http"
                                );

                            const accent =
                                accentClasses[
                                index %
                                accentClasses.length
                                ];

                            return (
                                <a
                                    key={
                                        link.label
                                    }
                                    href={
                                        link.href
                                    }
                                    target={
                                        external
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className={`
                                        inline-flex
                                        min-h-9
                                        items-center
                                        justify-center

                                        rounded-full
                                        border
                                        [border-color:var(--cartoon-line)]

                                        bg-[var(--cartoon-paper-soft)]

                                        px-[0.8rem]
                                        py-[0.35rem]

                                        [font-size:var(--type-ui)]
                                        font-semibold
                                        leading-none
                                        tracking-[0.025em]

                                        [color:var(--cartoon-muted)]

                                        no-underline

                                        shadow-[0_4px_14px_rgba(64,55,64,0.025)]

                                        transition-[background,border-color,color,transform,box-shadow]
                                        duration-[180ms]
                                        ease-out

                                        hover:-translate-y-px
                                        hover:[color:var(--cartoon-ink)]
                                        hover:shadow-[0_6px_18px_rgba(64,55,64,0.07)]

                                        active:translate-y-0

                                        focus-visible:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-[var(--cartoon-pink)]
                                        focus-visible:ring-offset-2

                                        ${accent}
                                    `}
                                >
                                    {link.label}
                                </a>
                            );
                        }
                    )}
                </nav>
            </div>
        </footer>
    );
}


/* ==========================================================
   APP SHELL
   ========================================================== */

export default function AppShell({
    language,
    onLanguageChange,
}) {
    const notebookRef =
        useRef(null);

    const [
        bookState,
        setBookState,
    ] = useState({
        current: 1,
        total: 1,
        canPrevious: false,
        canNext: false,
    });


    /* ======================================================
       NOTEBOOK CONTROLS
       ====================================================== */

    const previousPage =
        () => {
            notebookRef.current
                ?.previousPage();
        };


    const nextPage =
        () => {
            notebookRef.current
                ?.nextPage();
        };


    /* ======================================================
       KEYBOARD NAVIGATION
       ====================================================== */

    useEffect(() => {
        const handleKeyDown =
            (event) => {
                const target =
                    event.target;

                const isEditable =
                    target instanceof
                    HTMLElement &&
                    (
                        target.tagName ===
                        "INPUT" ||
                        target.tagName ===
                        "TEXTAREA" ||
                        target.tagName ===
                        "SELECT" ||
                        target.isContentEditable
                    );

                if (
                    isEditable ||
                    event.metaKey ||
                    event.ctrlKey ||
                    event.altKey
                ) {
                    return;
                }

                if (
                    event.repeat
                ) {
                    return;
                }

                if (
                    event.key ===
                    "ArrowLeft" &&
                    bookState.canPrevious
                ) {
                    event.preventDefault();

                    notebookRef.current
                        ?.previousPage();
                }

                if (
                    event.key ===
                    "ArrowRight" &&
                    bookState.canNext
                ) {
                    event.preventDefault();

                    notebookRef.current
                        ?.nextPage();
                }
            };


        window.addEventListener(
            "keydown",
            handleKeyDown
        );


        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [
        bookState.canPrevious,
        bookState.canNext,
    ]);


    return (
        <div
            className="
        relative
        min-h-dvh
        w-full
        overflow-x-hidden

        min-[701px]:h-dvh
        min-[701px]:min-h-0
        min-[701px]:overflow-hidden

        [background:var(--cartoon-paper)]
        [color:var(--cartoon-ink)]
    "
        >
            {/* PAPER LIGHT */}

            <div
                className="
            pointer-events-none
            fixed inset-0 z-0
            opacity-[0.7]
            [background:radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.92),transparent_48%)]
        "
                aria-hidden="true"
            />


            {/* PINK FIELD */}

            <div
                className="
            pointer-events-none
            fixed
            left-[-10rem]
            top-[12%]
            z-0
            h-[26rem]
            w-[26rem]
            rounded-full
            bg-[var(--cartoon-pink-soft)]
            opacity-[0.52]
            blur-[90px]
        "
                aria-hidden="true"
            />


            {/* BLUE FIELD */}

            <div
                className="
            pointer-events-none
            fixed
            right-[-11rem]
            top-[30%]
            z-0
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-[var(--cartoon-mint-soft)]
            opacity-[0.56]
            blur-[100px]
        "
                aria-hidden="true"
            />


            {/* YELLOW FIELD */}

            <div
                className="
            pointer-events-none
            fixed
            bottom-[-11rem]
            left-[18%]
            z-0
            h-[26rem]
            w-[26rem]
            rounded-full
            bg-[var(--cartoon-yellow-soft)]
            opacity-[0.58]
            blur-[100px]
        "
                aria-hidden="true"
            />


            {/* SMALL PINK ACCENT */}

            <div
                className="
            pointer-events-none
            fixed
            bottom-[12%]
            right-[10%]
            z-0
            size-40
            rounded-full
            bg-[var(--cartoon-pink)]
            opacity-[0.08]
            blur-[55px]
        "
                aria-hidden="true"
            />


            {/* SUBTLE DOT TEXTURE */}

            <div
                className="
            pointer-events-none
            fixed inset-0 z-0
            opacity-[0.16]
            [background-image:radial-gradient(var(--cartoon-ink)_0.55px,transparent_0.55px)]
            [background-size:18px_18px]
        "
                aria-hidden="true"
            />


            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    w-full
                    max-w-[2280px]
                    flex-col
                "
            >
                <div
                    className="
                        relative
                        mx-auto
                        w-full
                        max-w-[920px]
                    "
                >
                    <Header />

                    <div
                        className="
                            relative
                            z-30
                            mt-1
                            flex
                            justify-center
                            pb-1

                            min-[640px]:absolute
                            min-[640px]:right-6
                            min-[640px]:top-[1.8rem]
                            min-[640px]:mt-0
                            min-[640px]:pb-0
                        "
                    >
                        <LanguageSwitch
                            language={
                                language
                            }
                            onChange={
                                onLanguageChange
                            }
                        />

                    </div>
                </div>


                <main
                    className="
                        relative
                        z-10
                        mx-auto
                        flex
                        w-full
                        flex-col
                        items-center
                        px-3
                        pt-3

                        min-[701px]:px-5
                        min-[701px]:pt-[0.9rem]

                        max-[700px]:px-[0.65rem]
                        max-[700px]:pt-[2.8rem]
                    "
                >
                    <Notebook
                        ref={
                            notebookRef
                        }
                        language={
                            language
                        }
                        onStateChange={
                            setBookState
                        }
                    />


                    <div
                        className="
                            relative
                            z-50
                            mx-auto
                            mt-[0.8rem]
                            w-full
                            max-w-[900px]
                            px-4
                            pb-6

                            max-[700px]:mt-[0.65rem]
                        "
                    >
                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                gap-[0.9rem]
                            "
                        >
                            <BookControls
                                current={
                                    bookState.current
                                }
                                total={
                                    bookState.total
                                }
                                canPrevious={
                                    bookState.canPrevious
                                }
                                canNext={
                                    bookState.canNext
                                }
                                onPrevious={
                                    previousPage
                                }
                                onNext={
                                    nextPage
                                }
                            />

                            <Footer
                                language={language}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}