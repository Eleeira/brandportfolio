import {
    portfolioPages,
} from "../data/portfolio";

import {
    Page,
} from "./Notebook";


export default function PrintPortfolio({
    language = "it",
    onLanguageChange,
}) {
    const handlePrint = () => {
        window.print();
    };


    return (
        <>
            {/* PRINT CONFIGURATION */}

            <style>
                {`
                    @page {
                        size: 8in 10in;
                        margin: 0;
                    }

                    @media print {
                        html,
                        body,
                        #root {
                            width: 100%;
                            margin: 0 !important;
                            padding: 0 !important;
                            background: white !important;
                        }

                        body {
                            -webkit-print-color-adjust: exact;
                            print-color-adjust: exact;
                        }

                        .portfolio-print-page {
                            width: 8in !important;
                            height: 10in !important;
                            max-width: none !important;
                            aspect-ratio: auto !important;

                            margin: 0 !important;

                            break-after: page;
                            page-break-after: always;
                        }

                        .portfolio-print-page:last-child {
                            break-after: auto;
                            page-break-after: auto;
                        }
                    }
                `}
            </style>


            <div
                className="
                    min-h-screen
                    overflow-x-hidden

                    bg-[var(--cartoon-concerto)]
                    text-[var(--cartoon-ink)]

                    print:bg-white
                "
            >
                {/* ==================================================
                    CONTROLS
                    ================================================== */}

                <div
                    className="
                        sticky
                        top-0
                        z-50

                        border-b
                        [border-color:var(--cartoon-line)]

                        bg-[rgba(255,250,251,0.92)]

                        px-3
                        py-3

                        backdrop-blur-xl

                        sm:px-5
                        sm:py-4

                        print:hidden
                    "
                >
                    <div
                        className="
                            mx-auto

                            flex
                            w-full
                            max-w-[8in]

                            flex-col
                            items-stretch
                            gap-2.5

                            sm:flex-row
                            sm:items-center
                            sm:justify-center
                            sm:gap-3
                        "
                    >
                        {/* LANGUAGE */}

                        <div
                            className="
                                mx-auto

                                flex
                                shrink-0
                                items-center
                                gap-1

                                rounded-full
                                border
                                [border-color:var(--cartoon-line)]

                                bg-[var(--cartoon-soft)]

                                p-1

                                sm:mx-0
                            "
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    onLanguageChange?.(
                                        "it"
                                    )
                                }
                                className={`
                                    flex
                                    h-9
                                    min-w-11
                                    items-center
                                    justify-center

                                    rounded-full
                                    border

                                    px-3

                                    [font-family:var(--font-sans)]
                                    text-xs
                                    font-semibold
                                    leading-none

                                    transition-all
                                    duration-200

                                    sm:h-10
                                    sm:min-w-12
                                    sm:text-sm

                                    ${language ===
                                        "it"
                                        ? `
                                                border-[var(--cartoon-cinerous)]
                                                bg-[var(--cartoon-cinerous-soft)]
                                                !text-[var(--cartoon-ink)]
                                                shadow-[0_3px_10px_rgba(64,55,64,0.08)]
                                            `
                                        : `
                                                border-transparent
                                                bg-transparent
                                                !text-[var(--cartoon-muted)]

                                                hover:bg-[var(--cartoon-paper)]
                                                hover:!text-[var(--cartoon-ink)]
                                            `
                                    }
                                `}
                            >
                                IT
                            </button>


                            <button
                                type="button"
                                onClick={() =>
                                    onLanguageChange?.(
                                        "en"
                                    )
                                }
                                className={`
                                    flex
                                    h-9
                                    min-w-11
                                    items-center
                                    justify-center

                                    rounded-full
                                    border

                                    px-3

                                    [font-family:var(--font-sans)]
                                    text-xs
                                    font-semibold
                                    leading-none

                                    transition-all
                                    duration-200

                                    sm:h-10
                                    sm:min-w-12
                                    sm:text-sm

                                    ${language ===
                                        "en"
                                        ? `
                                                border-[var(--cartoon-cinerous)]
                                                bg-[var(--cartoon-cinerous-soft)]
                                                !text-[var(--cartoon-ink)]
                                                shadow-[0_3px_10px_rgba(64,55,64,0.08)]
                                            `
                                        : `
                                                border-transparent
                                                bg-transparent
                                                !text-[var(--cartoon-muted)]

                                                hover:bg-[var(--cartoon-paper)]
                                                hover:!text-[var(--cartoon-ink)]
                                            `
                                    }
                                `}
                            >
                                EN
                            </button>
                        </div>


                        {/* ACTIONS */}

                        <div
                            className="
                                grid
                                grid-cols-2
                                gap-2

                                sm:flex
                                sm:items-center
                                sm:gap-3
                            "
                        >
                            {/* SAVE */}

                            <button
                                type="button"
                                onClick={
                                    handlePrint
                                }
                                className="
                                    inline-flex
                                    min-h-10
                                    items-center
                                    justify-center

                                    rounded-full
                                    border
                                    border-[var(--cartoon-cinerous)]

                                    bg-[var(--cartoon-cinerous-soft)]

                                    px-4

                                    [font-family:'Kalam',cursive]
                                    text-[0.95rem]
                                    font-normal
                                    leading-none

                                    !text-[var(--cartoon-ink)]

                                    shadow-[0_5px_16px_rgba(64,55,64,0.05)]

                                    transition-all
                                    duration-200

                                    hover:-translate-y-0.5
                                    hover:bg-[var(--cartoon-cinerous)]
                                    hover:!text-[var(--cartoon-soft)]

                                    sm:px-5
                                    sm:text-[1rem]
                                "
                            >
                                {language === "it"
                                    ? "Salva PDF"
                                    : "Save PDF"}
                            </button>


                            {/* BACK */}

                            <a
                                href={`/?lang=${language}`}
                                className="
                                    inline-flex
                                    min-h-10
                                    items-center
                                    justify-center

                                    rounded-full
                                    border
                                    [border-color:var(--cartoon-line)]

                                    bg-[var(--cartoon-soft)]

                                    px-4

                                    [font-family:var(--font-sans)]
                                    text-center
                                    text-[0.68rem]
                                    font-semibold
                                    leading-[1.2]

                                    !text-[var(--cartoon-ink)]
                                    no-underline

                                    transition-all
                                    duration-200

                                    hover:[border-color:var(--cartoon-cinerous)]
                                    hover:bg-[var(--cartoon-paper)]

                                    sm:px-5
                                    sm:text-xs
                                "
                            >
                                {language === "it"
                                    ? "Torna al portfolio"
                                    : "Back to portfolio"}
                            </a>
                        </div>
                    </div>
                </div>


                {/* ==================================================
                    DOCUMENT
                    ================================================== */}

                <main
                    className="
                        flex
                        flex-col
                        items-center

                        gap-5

                        px-3
                        py-6

                        sm:gap-7
                        sm:px-5
                        sm:py-8

                        lg:gap-8
                        lg:py-12

                        print:block
                        print:p-0
                    "
                >
                    {portfolioPages.map(
                        (page) => (
                            <section
                                key={
                                    page.id
                                }
                                className="
                                    portfolio-print-page

                                    relative

                                    aspect-[4/5]
                                    w-full
                                    max-w-[8in]

                                    overflow-hidden

                                    border
                                    [border-color:var(--cartoon-line)]

                                    bg-[var(--cartoon-soft)]

                                    shadow-[0_12px_36px_rgba(64,55,64,0.09)]

                                    sm:shadow-[0_16px_48px_rgba(64,55,64,0.1)]

                                    lg:shadow-[0_20px_60px_rgba(64,55,64,0.12)]

                                    print:h-[10in]
                                    print:w-[8in]
                                    print:max-w-none
                                    print:border-0
                                    print:shadow-none
                                "
                            >
                                <Page
                                    page={
                                        page
                                    }
                                    language={
                                        language
                                    }
                                />
                            </section>
                        )
                    )}
                </main>
            </div>
        </>
    );
}