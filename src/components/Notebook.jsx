import {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from "react";

import HTMLFlipBook from "react-pageflip";

import {
    portfolioPages,
    portfolioSections,
} from "../data/portfolio";


/* ==========================================================
   01. SECTION ACCENTS
   ========================================================== */

const sectionAccents = {
    intro: {
        bg:
            "bg-[var(--cartoon-concerto)]",
    },

    stella: {
        bg:
            "bg-[var(--cartoon-cinerous-soft)]",
    },

    bobina: {
        bg:
            "bg-[var(--cartoon-cloudy-soft)]",
    },

    moa: {
        bg:
            "bg-[var(--cartoon-soft)]",
    },
};


const tabAccents = {
    intro: {
        bg:
            "bg-[var(--cartoon-yellow-soft)]",

        activeBg:
            "min-[701px]:bg-[var(--cartoon-yellow)]",

        activeBorder:
            "min-[701px]:[border-color:var(--cartoon-yellow-deep)]",

        dot:
            "min-[701px]:after:bg-[var(--cartoon-yellow-deep)]",
    },

    stella: {
        bg:
            "bg-[var(--cartoon-pink-soft)]",

        activeBg:
            "min-[701px]:bg-[var(--cartoon-pink)]",

        activeBorder:
            "min-[701px]:[border-color:var(--cartoon-alaska)]",

        dot:
            "min-[701px]:after:bg-[var(--cartoon-alaska)]",
    },

    bobina: {
        bg:
            "bg-[var(--cartoon-mint-soft)]",

        activeBg:
            "min-[701px]:bg-[var(--cartoon-mint)]",

        activeBorder:
            "min-[701px]:[border-color:var(--cartoon-mint-deep)]",

        dot:
            "min-[701px]:after:bg-[var(--cartoon-mint-deep)]",
    },

    moa: {
        bg:
            "bg-[var(--cartoon-peach)]",

        activeBg:
            "min-[701px]:bg-[var(--cartoon-cinerous-soft)]",

        activeBorder:
            "min-[701px]:[border-color:var(--cartoon-cinerous)]",

        dot:
            "min-[701px]:after:bg-[var(--cartoon-cinerous)]",
    },
};


function getAccent(
    sectionId
) {
    return (
        sectionAccents[
        sectionId
        ] ??
        sectionAccents.intro
    );
}


/* ==========================================================
   02. TABS
   ========================================================== */
const projectNames = {
    intro: {
        it: "Portfolio",
        en: "Portfolio",
    },

    stella: {
        it: "Berretta Rossa",
        en: "Berretta Rossa",
    },

    bobina: {
        it: "Bobina Criminale",
        en: "Bobina Criminale",
    },

    moa: {
        it: "MOA",
        en: "MOA",
    },
};

function Tabs({
    sections = [],
    activeSection,
    language = "it",
    onSelect,
}) {
    return (
        <nav
            className="
        absolute left-1/2 top-[-42px] z-30
        flex w-max -translate-x-1/2 flex-row gap-[0.35rem]

        min-[701px]:left-0
        min-[701px]:top-[74px]
        min-[701px]:z-[5]
        min-[701px]:w-auto
        min-[701px]:-translate-x-[52px]
        min-[701px]:flex-col
        min-[701px]:gap-[0.4rem]
    "
            aria-label={
                language === "it"
                    ? "Sezioni portfolio"
                    : "Portfolio sections"
            }
        >
            {sections.map(
                (
                    section,
                    index
                ) => {
                    const active =
                        section.id ===
                        activeSection;

                    const accent =
                        tabAccents[
                        section.id
                        ] ??
                        tabAccents.intro;

                    const projectName =
                        projectNames[
                        section.id
                        ]?.[
                        language
                        ] ??
                        section.label?.[
                        language
                        ] ??
                        section.id;

                    return (
                        <button
                            key={
                                section.id
                            }
                            type="button"
                            onClick={() =>
                                onSelect?.(
                                    section.id
                                )
                            }
                            aria-current={
                                active
                                    ? "page"
                                    : undefined
                            }
                            aria-label={
                                projectName
                            }
                            className="
                                group relative flex
                                h-[34px] w-auto
                                cursor-pointer
                                items-center
                                justify-center
                                border-0
                                bg-transparent
                                p-0

                                min-[701px]:h-[58px]
                                min-[701px]:w-[54px]
                                min-[701px]:justify-end
                            "
                        >
                            {/* PROJECT NAME TOOLTIP */}

                            <span
                                className={`
                                    pointer-events-none
                                    absolute
                                    right-[calc(100%+12px)]
                                    top-1/2
                                    z-40
                                    hidden
                                    w-max
                                    max-w-56
                                    -translate-y-1/2
                                    translate-x-[0.4rem]

                                    rounded-[3px]
                                    border
                                    [border-color:var(--cartoon-line)]
                                    bg-[var(--cartoon-soft)]

                                    px-[0.75rem]
                                    py-[0.5rem]

                                    [font-family:var(--font-sans)]
                                    [font-size:var(--type-meta)]
                                    font-medium
                                    leading-[1.3]
                                    tracking-[0.02em]
                                    [color:var(--cartoon-ink)]

                                    opacity-0
                                    shadow-[var(--cartoon-shadow-sm)]

                                    transition-[transform,opacity]
                                    duration-[180ms]
                                    ease-[ease]

                                    min-[701px]:block

                                    min-[701px]:group-hover:translate-x-0
                                    min-[701px]:group-hover:opacity-100

                                    min-[701px]:group-focus-visible:translate-x-0
                                    min-[701px]:group-focus-visible:opacity-100

                                    ${active
                                        ? "min-[701px]:font-semibold"
                                        : ""
                                    }
                                `}
                            >
                                {projectName}
                            </span>

                            {/* TAB */}

                            <span
                                className={`
                                    relative
                                    flex h-[34px]
                                    w-auto
                                    items-center
                                    justify-center

                                    rounded-full
                                    border
                                    [border-color:var(--cartoon-line)]

                                    px-[0.8rem]

                                    ${accent.bg}

                                    [font-size:var(--type-meta)]
                                    font-semibold
                                    tracking-[0.08em]
                                    [color:var(--cartoon-ink)]

                                    shadow-none

                                    transition-[width,transform,border-color,box-shadow,background,color]
                                    duration-[220ms]
                                    ease-[ease]

                                    min-[701px]:h-[58px]
                                    min-[701px]:w-[44px]
                                    min-[701px]:rounded-[4px_0_0_4px]
                                    min-[701px]:border-r-0
                                    min-[701px]:px-0
                                    min-[701px]:shadow-[0_8px_22px_rgba(42,36,31,0.05)]

                                    min-[701px]:group-hover:w-[49px]

                                    ${active
                                        ? `
        max-[700px]:bg-[var(--cartoon-ink)]
        max-[700px]:[color:var(--cartoon-soft)]

        min-[701px]:w-[54px]

        ${accent.activeBg}
        ${accent.activeBorder}

        min-[701px]:shadow-[0_10px_28px_rgba(42,36,31,0.1)]

        min-[701px]:after:absolute
        min-[701px]:after:right-[7px]
        min-[701px]:after:top-1/2
        min-[701px]:after:size-[5px]
        min-[701px]:after:-translate-y-1/2
        min-[701px]:after:rounded-full

        ${accent.dot}
    `
                                        : ""
                                    }
                                `}
                            >
                                <span
                                    className={`
                                        transition-transform
                                        duration-[220ms]

                                        ${active
                                            ? "min-[701px]:-translate-x-[4px]"
                                            : ""
                                        }
                                    `}
                                >
                                    {section.short ??
                                        String(
                                            index +
                                            1
                                        ).padStart(
                                            2,
                                            "0"
                                        )}
                                </span>
                            </span>
                        </button>
                    );
                }
            )}
        </nav>
    );
}


/* ==========================================================
   03. PAGE META
   ========================================================== */

function PageMeta({
    page,
    language,
    accent,
}) {
    const subtitle =
        page.subtitle?.[
        language
        ];


    return (
        <header
            className="
                flex shrink-0 items-start justify-between gap-[0.85rem]
                px-[1.35rem] pt-5
                min-[701px]:gap-5 min-[701px]:px-9 min-[701px]:pt-[1.85rem]
            "
        >
            <span
                className="
                    inline-flex min-h-[1.8rem] min-w-8 items-center justify-center
                    border-b [border-color:var(--cartoon-cinerous)]
                    px-[0.2rem] pb-[0.28rem]
                    [font-size:var(--type-meta)] font-semibold tracking-[0.1em]
                    [color:var(--cartoon-muted)]
                "
            >
                {page.number}
            </span>


            {subtitle && (
                <p
                    className="
                        m-0 max-w-[10rem] text-right text-[0.6rem] font-medium
                        uppercase leading-[1.5] tracking-[0.045em]
                        [color:var(--cartoon-muted)]
                        max-[430px]:max-w-[8.5rem]
                        min-[701px]:max-w-56
                        min-[701px]:[font-size:var(--type-meta)]
                        min-[701px]:tracking-[0.06em]
                    "
                >
                    {subtitle}
                </p>
            )}
        </header>
    );
}


/* ==========================================================
   04. IMAGE
   ========================================================== */

function CartoonImage({
    src,
    title,
}) {
    const [
        error,
        setError,
    ] = useState(false);


    return (
        <figure
            className="
                relative w-full overflow-hidden
                rounded-[var(--cartoon-radius-md)]
                border [border-color:var(--cartoon-line)]
                bg-[var(--cartoon-soft)] p-[0.35rem]
                shadow-[0_16px_38px_rgba(42,36,31,0.07)]
            "
        >
            {!error ? (
                <img
                    src={src}
                    alt={
                        title ??
                        ""
                    }
                    onError={() =>
                        setError(
                            true
                        )
                    }
                    className="
                        aspect-[16/10] w-full rounded-[2px] object-cover
                    "
                />
            ) : (
                <div
                    className="
                        flex aspect-[16/10] w-full items-center justify-center
                        bg-[var(--cartoon-concerto)]
                        [font-size:var(--type-meta)] font-semibold uppercase
                        tracking-[0.1em] [color:var(--cartoon-muted)]
                    "
                >
                    image
                </div>
            )}
        </figure>
    );
}



/* ==========================================================
   04.00 IMAGE GALLERY
   ========================================================== */



function ImageGallery({
    images = [],
    title,
    language = "it",
}) {
    if (!images.length) {
        return null;
    }

    /*
     * 1 immagine  → normale
     * 2 immagini → 2 colonne
     * 3 immagini → prima grande + 2 piccole
     * 4+         → griglia 2x2
     */

    if (
        images.length === 1
    ) {
        const image =
            images[0];

        return (
            <CartoonImage
                src={
                    image.src
                }
                title={
                    image.alt?.[
                    language
                    ] ??
                    title
                }
            />
        );
    }

    if (
        images.length === 3
    ) {
        return (
            <div
                className="
                    grid min-h-0 flex-1
                    grid-cols-2
                    grid-rows-2
                    gap-2.5
                    min-[701px]:gap-3
                "
            >
                {/* HERO IMAGE */}

                <figure
                    className="
                        relative
                        row-span-2
                        min-h-0
                        overflow-hidden
                        rounded-[var(--cartoon-radius-md)]
                        border
                        [border-color:var(--cartoon-line)]
                        bg-[var(--cartoon-soft)]
                        p-[0.3rem]
                        shadow-[0_12px_30px_rgba(42,36,31,0.055)]
                    "
                >
                    <img
                        src={
                            images[0]
                                .src
                        }
                        alt={
                            images[0]
                                .alt?.[
                            language
                            ] ??
                            title ??
                            ""
                        }
                        className="
                            h-full
                            w-full
                            rounded-[2px]
                            object-cover
                        "
                    />
                </figure>

                {/* SECONDARY IMAGES */}

                {images
                    .slice(
                        1,
                        3
                    )
                    .map(
                        (
                            image,
                            index
                        ) => (
                            <figure
                                key={`${image.src}-${index}`}
                                className="
                                    relative
                                    min-h-0
                                    overflow-hidden
                                    rounded-[var(--cartoon-radius-md)]
                                    border
                                    [border-color:var(--cartoon-line)]
                                    bg-[var(--cartoon-soft)]
                                    p-[0.3rem]
                                    shadow-[0_12px_30px_rgba(42,36,31,0.055)]
                                "
                            >
                                <img
                                    src={
                                        image.src
                                    }
                                    alt={
                                        image
                                            .alt?.[
                                        language
                                        ] ??
                                        title ??
                                        ""
                                    }
                                    className="
                                        h-full
                                        w-full
                                        rounded-[2px]
                                        object-cover
                                    "
                                />
                            </figure>
                        )
                    )}
            </div>
        );
    }

    return (
        <div
            className="
                grid min-h-0 flex-1
                grid-cols-2
                gap-2.5
                min-[701px]:gap-3
            "
        >
            {images
                .slice(
                    0,
                    4
                )
                .map(
                    (
                        image,
                        index
                    ) => (
                        <figure
                            key={`${image.src}-${index}`}
                            className="
                                relative
                                min-h-0
                                overflow-hidden
                                rounded-[var(--cartoon-radius-md)]
                                border
                                [border-color:var(--cartoon-line)]
                                bg-[var(--cartoon-soft)]
                                p-[0.3rem]
                                shadow-[0_12px_30px_rgba(42,36,31,0.055)]
                            "
                        >
                            <img
                                src={
                                    image.src
                                }
                                alt={
                                    image
                                        .alt?.[
                                    language
                                    ] ??
                                    title ??
                                    ""
                                }
                                className="
                                    h-full
                                    w-full
                                    rounded-[2px]
                                    object-cover
                                "
                            />
                        </figure>
                    )
                )}
        </div>
    );
}





/* ==========================================================
   04.01 THEME COMPARE
   ========================================================== */


function ThemeCompare({
    lightSrc,
    darkSrc,
    title,
    language = "it",
}) {
    const [
        position,
        setPosition,
    ] = useState(50);

    const compareRef =
        useRef(null);

    const draggingRef =
        useRef(false);

    const updatePosition =
        useCallback(
            (
                clientX
            ) => {
                const element =
                    compareRef.current;

                if (!element) {
                    return;
                }

                const rect =
                    element.getBoundingClientRect();

                if (
                    !rect.width
                ) {
                    return;
                }

                const percentage =
                    ((clientX -
                        rect.left) /
                        rect.width) *
                    100;

                setPosition(
                    Math.min(
                        100,
                        Math.max(
                            0,
                            percentage
                        )
                    )
                );
            },
            []
        );

    const handlePointerDown =
        (
            event
        ) => {
            event.preventDefault();
            event.stopPropagation();

            draggingRef.current =
                true;

            event.currentTarget
                .setPointerCapture?.(
                    event.pointerId
                );

            updatePosition(
                event.clientX
            );
        };

    const handlePointerMove =
        (
            event
        ) => {
            if (
                !draggingRef.current
            ) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            updatePosition(
                event.clientX
            );
        };

    const stopDragging =
        (
            event
        ) => {
            event.preventDefault();
            event.stopPropagation();

            draggingRef.current =
                false;

            if (
                event.currentTarget
                    .hasPointerCapture?.(
                        event.pointerId
                    )
            ) {
                event.currentTarget
                    .releasePointerCapture?.(
                        event.pointerId
                    );
            }
        };

    const stopBookEvent =
        (
            event
        ) => {
            event.stopPropagation();
        };

    const handleKeyDown =
        (
            event
        ) => {
            if (
                event.key ===
                "ArrowLeft"
            ) {
                event.preventDefault();
                event.stopPropagation();

                setPosition(
                    (
                        current
                    ) =>
                        Math.max(
                            0,
                            current -
                            2
                        )
                );
            }

            if (
                event.key ===
                "ArrowRight"
            ) {
                event.preventDefault();
                event.stopPropagation();

                setPosition(
                    (
                        current
                    ) =>
                        Math.min(
                            100,
                            current +
                            2
                        )
                );
            }

            if (
                event.key ===
                "Home"
            ) {
                event.preventDefault();
                event.stopPropagation();

                setPosition(
                    0
                );
            }

            if (
                event.key ===
                "End"
            ) {
                event.preventDefault();
                event.stopPropagation();

                setPosition(
                    100
                );
            }
        };

    return (
        <figure
            className="
                relative w-full overflow-hidden
                rounded-[var(--cartoon-radius-md)]
                border
                [border-color:var(--cartoon-line)]
                bg-[var(--cartoon-soft)]
                p-[0.35rem]
                shadow-[0_16px_38px_rgba(42,36,31,0.07)]
            "
        >
            <div
                ref={
                    compareRef
                }
                role="slider"
                tabIndex={0}
                aria-valuemin={
                    0
                }
                aria-valuemax={
                    100
                }
                aria-valuenow={
                    Math.round(
                        position
                    )
                }
                aria-label={
                    language ===
                        "it"
                        ? "Confronta modalità chiara e scura"
                        : "Compare light and dark mode"
                }
                onPointerDown={
                    handlePointerDown
                }
                onPointerMove={
                    handlePointerMove
                }
                onPointerUp={
                    stopDragging
                }
                onPointerCancel={
                    stopDragging
                }
                onMouseDown={
                    stopBookEvent
                }
                onMouseMove={
                    stopBookEvent
                }
                onMouseUp={
                    stopBookEvent
                }
                onTouchStart={
                    stopBookEvent
                }
                onTouchMove={
                    stopBookEvent
                }
                onTouchEnd={
                    stopBookEvent
                }
                onClick={
                    stopBookEvent
                }
                onDragStart={(
                    event
                ) => {
                    event.preventDefault();
                    event.stopPropagation();
                }}
                onKeyDown={
                    handleKeyDown
                }
                style={{
                    touchAction:
                        "none",
                }}
                className="
                    relative
                    aspect-[16/10]
                    w-full
                    cursor-ew-resize
                    overflow-hidden
                    rounded-[2px]
                    outline-none

                    focus-visible:ring-2
                    focus-visible:ring-[var(--cartoon-cinerous)]
                    focus-visible:ring-offset-2
                "
            >
                {/* DARK */}

                <img
                    src={
                        darkSrc
                    }
                    alt=""
                    draggable={
                        false
                    }
                    className="
                        pointer-events-none
                        absolute inset-0
                        h-full w-full
                        select-none
                        object-cover
                    "
                />

                {/* LIGHT */}

                <div
                    className="
                        pointer-events-none
                        absolute inset-0
                        overflow-hidden
                    "
                    style={{
                        clipPath: `inset(
                            0
                            ${100 -
                            position
                            }%
                            0
                            0
                        )`,
                    }}
                >
                    <img
                        src={
                            lightSrc
                        }
                        alt=""
                        draggable={
                            false
                        }
                        className="
                            absolute inset-0
                            h-full w-full
                            select-none
                            object-cover
                        "
                    />
                </div>

                {/* LIGHT LABEL */}

                <span
                    className="
                        pointer-events-none
                        absolute left-3 top-3
                        z-20
                        rounded-full
                        border
                        border-white/40
                        bg-white/60
                        px-2.5 py-1
                        text-[0.58rem]
                        font-medium
                        tracking-[0.04em]
                        text-black/60
                        shadow-sm
                        backdrop-blur-md
                    "
                >
                    Light
                </span>

                {/* DARK LABEL */}

                <span
                    className="
                        pointer-events-none
                        absolute right-3 top-3
                        z-20
                        rounded-full
                        border
                        border-white/20
                        bg-black/35
                        px-2.5 py-1
                        text-[0.58rem]
                        font-medium
                        tracking-[0.04em]
                        text-white/80
                        shadow-sm
                        backdrop-blur-md
                    "
                >
                    Dark
                </span>

                {/* DIVIDER */}

                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute inset-y-0
                        z-20
                        w-px
                        bg-white/90
                        shadow-[0_0_12px_rgba(42,36,31,0.18)]
                    "
                    style={{
                        left: `${position}%`,
                    }}
                />

                {/* HANDLE */}

                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute top-1/2
                        z-30
                        flex size-10
                        -translate-x-1/2
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/60
                        bg-white/65
                        shadow-[0_6px_20px_rgba(42,36,31,0.18)]
                        backdrop-blur-xl
                    "
                    style={{
                        left: `${position}%`,
                    }}
                >
                    <span
                        className="
                            text-[0.9rem]
                            leading-none
                            text-black/55
                        "
                    >
                        ↔
                    </span>
                </div>
            </div>

            {/* ACCESSIBLE DESCRIPTION */}

            <figcaption className="sr-only">
                {language ===
                    "it"
                    ? `${title ?? "MOA"}: confronto tra interfaccia chiara e scura`
                    : `${title ?? "MOA"}: comparison between light and dark interface`}
            </figcaption>
        </figure>
    );
}




/* ==========================================================
   05. COVER PAGE
   ========================================================== */

function CoverPage({
    page,
    language,
    accent,
}) {
    const title =
        page.title?.[
        language
        ];

    const body =
        page.body?.[
        language
        ];

    return (
        <article className="flex h-full w-full flex-col">
            <PageMeta
                page={
                    page
                }
                language={
                    language
                }
                accent={
                    accent
                }
            />

            <div
                className="
                    flex min-h-0 flex-1
                    flex-col
                    px-[1.35rem]
                    pb-[1.6rem]
                    pt-5
                    min-[701px]:px-9
                    min-[701px]:pb-[2.35rem]
                    min-[701px]:pt-[1.65rem]
                "
            >
                {/* COVER IMAGE */}

                {page.image && (
                    <figure
                        className="
                            min-h-0 flex-1
                            overflow-hidden
                            rounded-[var(--cartoon-radius-md)]
                            border
                            [border-color:var(--cartoon-line)]
                            bg-[var(--cartoon-soft)]
                            p-[0.35rem]
                            shadow-[0_16px_38px_rgba(42,36,31,0.07)]
                        "
                    >
                        <img
                            src={
                                page.image
                            }
                            alt={
                                title ??
                                ""
                            }
                            className="
                                h-full
                                w-full
                                rounded-[2px]
                                object-cover
                            "
                        />
                    </figure>
                )}

                {/* CONTENT */}

                <div
                    className={`
                        shrink-0

                        ${page.image
                            ? "pt-5 min-[701px]:pt-6"
                            : "mt-auto"
                        }
                    `}
                >
                    <h2
                        className="
                            m-0
                            max-w-[15ch]
                            [font-family:var(--font-display)]
                            [font-size:var(--type-page-title-large)]
                            font-normal
                            leading-[1.05]
                            tracking-[-0.012em]
                            [color:var(--cartoon-ink)]
                        "
                    >
                        {title}
                    </h2>

                    {body && (
                        <p
                            className="
                                mt-4
                                max-w-none
                                [font-family:var(--font-sans)]
                                [font-size:var(--type-body)]
                                font-normal
                                leading-[1.72]
                                [color:var(--cartoon-muted)]
                                min-[701px]:max-w-[31rem]
                            "
                        >
                            {body}
                        </p>
                    )}

                    <span
                        className="
                            mt-5
                            block
                            w-max
                            border-t
                            [border-color:var(--cartoon-cinerous)]
                            pt-[0.55rem]
                            [font-size:var(--type-meta)]
                            font-medium
                            uppercase
                            leading-[1.4]
                            tracking-[0.06em]
                            [color:var(--cartoon-muted)]
                        "
                    >
                        identity · process · outcome
                    </span>
                </div>
            </div>
        </article>
    );
}


/* ==========================================================
   06. TEXT PAGE
   ========================================================== */

function TextPage({
    page,
    language,
    accent,
}) {
    const title =
        page.title?.[
        language
        ];

    const body =
        page.body?.[
        language
        ];


    return (
        <article className="flex h-full w-full flex-col">
            <PageMeta
                page={
                    page
                }
                language={
                    language
                }
                accent={
                    accent
                }
            />


            <div
                className="
                    flex min-h-0 flex-1 flex-col justify-center
                    px-[1.35rem] pb-[1.6rem] pt-5
                    min-[701px]:px-9 min-[701px]:pb-[2.35rem]
                    min-[701px]:pt-[1.65rem]
                "
            >
                <span
                    className="
                        mb-[0.85rem] w-max
                        [font-size:var(--type-meta)] font-semibold uppercase
                        leading-[1.4] tracking-[0.08em]
                        [color:var(--cartoon-cinerous)]
                    "
                >
                    note
                </span>


                <h2 className="
                    m-0 max-w-[18ch]
                    [font-family:var(--font-display)]
                    [font-size:var(--type-page-title)] font-normal
                    leading-[1.05] tracking-[-0.012em]
                    [color:var(--cartoon-ink)]
                ">
                    {title}
                </h2>


                {body && (
                    <div
                        className="
                            mt-[1.15rem] max-w-none
                            border-t [border-color:var(--cartoon-line)] pt-4
                            min-[701px]:max-w-[31rem]
                        "
                    >
                        <p
                            className="
                            mt-0 max-w-none
                            [font-family:var(--font-sans)] [font-size:var(--type-body)]
                            font-normal leading-[1.72] [color:var(--cartoon-muted)]
                            min-[701px]:max-w-[31rem]
                        "
                        >
                            {body}
                        </p>
                    </div>
                )}
            </div>
        </article>
    );
}


/* ==========================================================
   07. INDEX PAGE
   ========================================================== */

function IndexPage({
    page,
    language,
    accent,
}) {
    const title =
        page.title?.[
        language
        ];

    const items =
        page.items?.[
        language
        ];


    return (
        <article className="flex h-full w-full flex-col">
            <PageMeta
                page={
                    page
                }
                language={
                    language
                }
                accent={
                    accent
                }
            />


            <div
                className="
                    flex min-h-0 flex-1 flex-col justify-center
                    px-[1.35rem] pb-[1.6rem] pt-5
                    min-[701px]:px-9 min-[701px]:pb-[2.35rem]
                    min-[701px]:pt-[1.65rem]
                "
            >
                <h2 className="
                    m-0 max-w-[18ch]
                    [font-family:var(--font-display)]
                    [font-size:var(--type-page-title)] font-normal
                    leading-[1.05] tracking-[-0.012em]
                    [color:var(--cartoon-ink)]
                ">
                    {title}
                </h2>


                <ul className="mt-5 list-none p-0">
                    {items?.map(
                        (
                            item,
                            index
                        ) => (
                            <li
                                key={
                                    item
                                }
                                className="
                                    group grid grid-cols-[1.8rem_1fr_auto] items-center
                                    gap-[0.55rem] border-b [border-color:var(--cartoon-line)]
                                    py-[0.68rem] transition-[border-color]
                                    duration-[180ms] ease-[ease]
                                    hover:[border-color:var(--cartoon-cinerous)]
                                    min-[701px]:grid-cols-[2rem_1fr_auto]
                                    min-[701px]:gap-3 min-[701px]:py-[0.8rem]
                                "
                            >
                                <span
                                    className="
                                        flex size-[1.8rem] items-center justify-center
                                        [font-size:var(--type-meta)] font-semibold
                                        [color:var(--cartoon-cinerous)]
                                    "
                                >
                                    {String(
                                        index +
                                        1
                                    ).padStart(
                                        2,
                                        "0"
                                    )}
                                </span>


                                <span
                                    className="
                                        text-[0.8rem] font-medium leading-[1.45]
                                        [color:var(--cartoon-ink)]
                                        min-[701px]:text-[0.84rem]
                                    "
                                >
                                    {item}
                                </span>


                                <span
                                    className="
                                        text-[0.9rem] [color:var(--cartoon-muted)]
                                        transition-transform duration-[180ms] ease-[ease]
                                        group-hover:translate-x-[3px]
                                    "
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </article>
    );
}


/* ==========================================================
   08. IMAGE PAGE
   ========================================================== */

function ImagePage({
    page,
    language,
    accent,
}) {
    const title =
        page.title?.[
        language
        ];

    const body =
        page.body?.[
        language
        ];


    return (
        <article className="flex h-full w-full flex-col">
            <PageMeta
                page={
                    page
                }
                language={
                    language
                }
                accent={
                    accent
                }
            />


            <div
                className="
                    flex min-h-0 flex-1 flex-col
                    px-[1.35rem] pb-[1.45rem] pt-4
                    min-[701px]:px-9 min-[701px]:pb-8 min-[701px]:pt-5
                "
            >
                <div
                    className="
                        mb-[0.85rem] grid grid-cols-1 items-end gap-[0.65rem]
                        min-[701px]:mb-4
                        min-[701px]:grid-cols-[minmax(0,1fr)_minmax(10rem,0.75fr)]
                        min-[701px]:gap-[1.4rem]
                    "
                >
                    <h2
                        className="
                            m-0 max-w-[17ch]
                            [font-family:var(--font-display)]
                            [font-size:var(--type-page-title-small)] font-normal
                            leading-[1.05] tracking-[-0.012em]
                            [color:var(--cartoon-ink)]
                        "
                    >
                        {title}
                    </h2>


                    {body && (
                        <p
                            className="
                                m-0 text-left [font-size:var(--type-body-small)]
                                font-normal leading-[1.55] [color:var(--cartoon-muted)]
                                min-[701px]:text-right
                            "
                        >
                            {body}
                        </p>
                    )}
                </div>


                {page.lightImage &&
                    page.darkImage ? (
                    <ThemeCompare
                        lightSrc={
                            page.lightImage
                        }
                        darkSrc={
                            page.darkImage
                        }
                        title={
                            title
                        }
                        language={
                            language
                        }
                    />
                ) : page.images?.length ? (
                    <ImageGallery
                        images={
                            page.images
                        }
                        title={
                            title
                        }
                        language={
                            language
                        }
                    />
                ) : page.image ? (
                    <CartoonImage
                        src={
                            page.image
                        }
                        title={
                            title
                        }
                    />
                ) : null}
            </div>
        </article>
    );
}


/* ==========================================================
   09. SYSTEM PAGE
   ========================================================== */

function SystemPage({
    page,
    language,
    accent,
}) {
    const title =
        page.title?.[
        language
        ];

    const body =
        page.body?.[
        language
        ];

    const typography =
        page.typography ??
        [];

    const palette =
        page.palette ??
        [];

    return (
        <article className="flex h-full w-full flex-col">
            <PageMeta
                page={page}
                language={language}
                accent={accent}
            />


            <div
                className="
                    grid min-h-0 flex-1 grid-cols-1 gap-4
                    px-[1.35rem] pb-[1.45rem] pt-4
                    min-[701px]:grid-cols-[minmax(0,1.05fr)_minmax(11rem,0.95fr)]
                    min-[701px]:gap-6 min-[701px]:px-9
                    min-[701px]:pb-9 min-[701px]:pt-[1.4rem]
                "
            >
                {/* DESCRIPTION */}

                <div className="flex flex-col justify-center">
                    <span
                        className="
                        mb-[0.85rem] w-max
                        [font-size:var(--type-meta)] font-semibold uppercase
                        leading-[1.4] tracking-[0.08em]
                        [color:var(--cartoon-cinerous)]
                    "
                    >
                        {language === "it"
                            ? "Sistema visivo"
                            : "Visual system"
                        }
                    </span>

                    <h2
                        className="
                            m-0 max-w-[17ch]
                            [font-family:var(--font-display)]
                            [font-size:var(--type-page-title-small)] font-normal
                            leading-[1.05] tracking-[-0.012em]
                            [color:var(--cartoon-ink)]
                        "
                    >
                        {title}
                    </h2>


                    {body && (
                        <p
                            className="
                                mt-4 max-w-none
                                [font-family:var(--font-sans)]
                                [font-size:var(--type-body-small)] font-normal
                                leading-[1.65] [color:var(--cartoon-muted)]
                                min-[701px]:max-w-[31rem]
                            "
                        >
                            {body}
                        </p>
                    )}
                </div>


                {/* SYSTEM */}

                <div
                    className="
                        grid grid-cols-1 gap-[0.65rem]
                        min-[431px]:grid-cols-2
                        min-[701px]:flex min-[701px]:flex-col
                        min-[701px]:justify-center min-[701px]:gap-[0.8rem]
                    "
                >
                    {/* TYPOGRAPHY */}

                    {typography.length > 0 && (
                        <div
                            className="
                                rounded-[var(--cartoon-radius-md)]
                                border [border-color:var(--cartoon-line)]
                                bg-[rgba(255,250,244,0.76)] p-[0.8rem]
                                shadow-[0_12px_30px_rgba(42,36,31,0.045)]
                                min-[701px]:p-4
                            "
                        >
                            <span
                                className="
                                    block [font-size:var(--type-meta)] font-semibold uppercase
                                    tracking-[0.08em] [color:var(--cartoon-muted)]
                                "
                            >
                                Typography
                            </span>

                            <div className="mt-4 flex flex-col gap-4">
                                {typography.map(
                                    (
                                        type,
                                        index
                                    ) => (
                                        <div
                                            key={`${type.name}-${index}`}
                                            className="
                                                grid grid-cols-[3.2rem_1fr] items-center gap-3
                                                border-b [border-color:var(--cartoon-line)] pb-[0.9rem]
                                                last:border-b-0 last:pb-0
                                                min-[701px]:grid-cols-[4rem_1fr]
                                                min-[701px]:gap-4
                                            "
                                        >
                                            <span
                                                className="
                                                    text-[2rem] font-normal leading-none
                                                    [color:var(--cartoon-ink)]
                                                    min-[701px]:text-[clamp(2rem,3vw,3rem)]
                                                "
                                                style={{
                                                    fontFamily:
                                                        type.family,
                                                }}
                                            >
                                                {type.sample ??
                                                    "Aa"
                                                }
                                            </span>


                                            <div className="flex min-w-0 flex-col gap-[0.2rem]">
                                                <strong
                                                    className="
                                                        [font-family:var(--font-sans)] text-[0.76rem]
                                                        font-semibold leading-[1.4]
                                                        [color:var(--cartoon-ink)]
                                                    "
                                                >
                                                    {type.name}
                                                </strong>

                                                {type.role?.[
                                                    language
                                                ] && (
                                                        <span
                                                            className="
                                                                [font-family:var(--font-sans)] text-[0.67rem]
                                                                font-normal leading-[1.5]
                                                                [color:var(--cartoon-muted)]
                                                            "
                                                        >
                                                            {
                                                                type
                                                                    .role[
                                                                language
                                                                ]
                                                            }
                                                        </span>
                                                    )}
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}


                    {/* PALETTE */}

                    {palette.length > 0 && (
                        <div
                            className="
                                rounded-[var(--cartoon-radius-md)]
                                border [border-color:var(--cartoon-line)]
                                bg-[rgba(255,250,244,0.76)] p-[0.8rem]
                                shadow-[0_12px_30px_rgba(42,36,31,0.045)]
                                min-[701px]:p-4
                            "
                        >
                            <span
                                className="
                                    block [font-size:var(--type-meta)] font-semibold uppercase
                                    tracking-[0.08em] [color:var(--cartoon-muted)]
                                "
                            >
                                Palette
                            </span>

                            <div
                                className="
                                    mt-4 grid grid-cols-2 gap-[0.7rem]
                                    min-[701px]:gap-[0.9rem]
                                "
                            >
                                {palette.map(
                                    (
                                        color,
                                        index
                                    ) => (
                                        <div
                                            key={`${color.name}-${index}`}
                                            className="min-w-0"
                                        >
                                            <span
                                                className="
                                                    block aspect-[1.8/1] w-full rounded-[3px]
                                                    border [border-color:var(--cartoon-line)]
                                                "
                                                style={{
                                                    backgroundColor:
                                                        color.value,
                                                }}
                                            />

                                            <div
                                                className="
                                                    mt-[0.45rem] flex items-baseline
                                                    justify-between gap-2
                                                "
                                            >
                                                <strong
                                                    className="
                                                        overflow-hidden text-ellipsis whitespace-nowrap
                                                        text-[0.65rem] font-semibold leading-[1.35]
                                                        [color:var(--cartoon-ink)]
                                                    "
                                                >
                                                    {color.name}
                                                </strong>

                                                <span
                                                    className="
                                                        hidden shrink-0 text-[0.58rem] font-medium
                                                        uppercase leading-[1.35] tracking-[0.02em]
                                                        [color:var(--cartoon-muted)]
                                                        min-[701px]:inline
                                                    "
                                                >
                                                    {color.value}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}


/* ==========================================================
   10. CLOSING PAGE
   ========================================================== */

function ClosingPage({
    page,
    language,
    accent,
}) {
    const title =
        page.title?.[
        language
        ];

    const body =
        page.body?.[
        language
        ];


    return (
        <article className="flex h-full w-full flex-col">
            <PageMeta
                page={
                    page
                }
                language={
                    language
                }
                accent={
                    accent
                }
            />


            <div
                className="
                    flex min-h-0 flex-1 flex-col justify-center
                    px-[1.35rem] pb-[1.6rem] pt-5
                    min-[701px]:px-9 min-[701px]:pb-[2.35rem]
                    min-[701px]:pt-[1.65rem]
                "
            >
                <h2
                    className="
                        m-0 max-w-[15ch]
                        [font-family:var(--font-display)]
                        [font-size:var(--type-page-title-large)] font-normal
                        leading-[1.05] tracking-[-0.012em]
                        [color:var(--cartoon-ink)]
                    "
                >
                    {title}
                </h2>


                {body && (
                    <p
                        className="
                            mt-4 max-w-none
                            [font-family:var(--font-sans)] [font-size:var(--type-body)]
                            font-normal leading-[1.72] [color:var(--cartoon-muted)]
                            min-[701px]:max-w-[31rem]
                        "
                    >
                        {body}
                    </p>
                )}
            </div>
        </article>
    );
}


/* ==========================================================
   11. PAGE
   ========================================================== */

function Page({
    page,
    language,
}) {
    const accent =
        getAccent(
            page.sectionId
        );


    const props = {
        page,
        language,
        accent,
    };


    switch (
    page.type
    ) {
        case "cover":
        case "project-cover":
            return (
                <CoverPage
                    {...props}
                />
            );


        case "statement":
        case "text":
            return (
                <TextPage
                    {...props}
                />
            );


        case "index":
            return (
                <IndexPage
                    {...props}
                />
            );


        case "image":
            return (
                <ImagePage
                    {...props}
                />
            );


        case "system":
            return (
                <SystemPage
                    {...props}
                />
            );



        case "logo":
            return (
                <LogoPage
                    {...props}
                />
            );


        case "closing":
            return (
                <ClosingPage
                    {...props}
                />
            );


        default:
            return (
                <TextPage
                    {...props}
                />
            );
    }
}





function LogoPage({
    page,
    language,
    accent,
}) {
    const title =
        page.title?.[language];

    const body =
        page.body?.[language];

    const images =
        page.images ?? [];

    const gridClass =
        images.length === 1
            ? "grid-cols-1"
            : images.length === 2
                ? "grid-cols-2"
                : "grid-cols-2";

    return (
        <article className="flex h-full w-full flex-col">
            <PageMeta
                page={page}
                language={language}
                accent={accent}
            />

            <div
                className="
                    flex min-h-0 flex-1 flex-col
                    px-[1.35rem] pb-[1.45rem] pt-4
                    min-[701px]:px-9
                    min-[701px]:pb-8
                    min-[701px]:pt-5
                "
            >
                <div className="mb-4">
                    <h2
                        className="
                            m-0 max-w-[17ch]
                            [font-family:var(--font-display)]
                            [font-size:var(--type-page-title-small)]
                            font-normal
                            leading-[1.05]
                            tracking-[-0.012em]
                            [color:var(--cartoon-ink)]
                        "
                    >
                        {title}
                    </h2>

                    {body && (
                        <p
                            className="
                                mt-3 max-w-[31rem]
                                [font-size:var(--type-body-small)]
                                leading-[1.55]
                                [color:var(--cartoon-muted)]
                            "
                        >
                            {body}
                        </p>
                    )}
                </div>

                <div
                    className={`
                        grid min-h-0 flex-1
                        ${gridClass}
                        gap-3
                        min-[701px]:gap-4
                    `}
                >
                    {images.map(
                        (
                            image,
                            index
                        ) => (
                            <figure
                                key={`${image.src}-${index}`}
                                className="
                                    flex min-h-0
                                    items-center justify-center
                                    rounded-[var(--cartoon-radius-md)]
                                    border
                                    [border-color:var(--cartoon-line)]
                                    bg-[var(--cartoon-soft)]
                                    p-5
                                    min-[701px]:p-8
                                "
                            >
                                <img
                                    src={image.src}
                                    alt={
                                        image.alt?.[
                                        language
                                        ] ??
                                        title ??
                                        ""
                                    }
                                    className="
                                        h-full
                                        max-h-full
                                        w-full
                                        object-contain
                                    "
                                />
                            </figure>
                        )
                    )}
                </div>
            </div>
        </article>
    );
}

/* ==========================================================
   12. FLIP PAGE
   ========================================================== */

const FlipPage =
    forwardRef(
        function FlipPage(
            {
                page,
                language,
                blank,
                pageIndex,
            },
            ref
        ) {
            const left =
                pageIndex %
                2 ===
                0;


            return (
                <div
                    ref={
                        ref
                    }
                    className={`
                        relative h-full w-full overflow-hidden
                        border [border-color:var(--cartoon-line)]
                        bg-[var(--cartoon-soft)]
                        shadow-[inset_0_0_26px_rgba(42,36,31,0.018)]

                        ${left
                            ? "rounded-[5px_1px_1px_5px]"
                            : "rounded-[1px_5px_5px_1px]"
                        }
                    `}
                >
                    {!blank && (
                        <Page
                            page={
                                page
                            }
                            language={
                                language
                            }
                        />
                    )}
                </div>
            );
        }
    );


/* ==========================================================
   13. NOTEBOOK
   ========================================================== */

const Notebook =
    forwardRef(
        function Notebook(
            {
                language,
                onStateChange,
            },
            ref
        ) {
            const bookRef =
                useRef(null);


            const [
                currentPage,
                setCurrentPage,
            ] = useState(0);


            /* ==================================================
               VIEWPORT
               ================================================== */

            const [
                viewportSize,
                setViewportSize,
            ] = useState(() => ({
                width:
                    typeof window !==
                        "undefined"
                        ? window.innerWidth
                        : 1440,

                height:
                    typeof window !==
                        "undefined"
                        ? window.innerHeight
                        : 1000,
            }));


            useEffect(() => {
                if (
                    typeof window ===
                    "undefined"
                ) {
                    return undefined;
                }


                let frameId;


                const updateViewport =
                    () => {
                        cancelAnimationFrame(
                            frameId
                        );

                        frameId =
                            requestAnimationFrame(
                                () => {
                                    setViewportSize({
                                        width:
                                            window.innerWidth,

                                        height:
                                            window.innerHeight,
                                    });
                                }
                            );
                    };


                updateViewport();


                window.addEventListener(
                    "resize",
                    updateViewport
                );


                return () => {
                    cancelAnimationFrame(
                        frameId
                    );

                    window.removeEventListener(
                        "resize",
                        updateViewport
                    );
                };
            }, []);


            const notebookMaxWidth =
                useMemo(() => {
                    const {
                        width,
                        height,
                    } =
                        viewportSize;


                    const mobile =
                        width <=
                        700;


                    const horizontalReserve =
                        mobile
                            ? 24
                            : width <
                                1200
                                ? 48
                                : 96;


                    const maxByWidth =
                        Math.max(
                            300,
                            width -
                            horizontalReserve
                        );


                    if (mobile) {
                        return Math.min(
                            680,
                            maxByWidth
                        );
                    }


                    const reservedVerticalSpace =
                        300;


                    const availableBookHeight =
                        Math.max(
                            430,
                            height -
                            reservedVerticalSpace
                        );


                    const maxByHeight =
                        availableBookHeight *
                        (720 / 900) *
                        2;


                    return Math.round(
                        Math.min(
                            2100,
                            maxByWidth,
                            maxByHeight
                        )
                    );
                }, [
                    viewportSize,
                ]);


            /* ==================================================
               LANGUAGE CHANGE
               ================================================== */

            useEffect(() => {
                setCurrentPage(
                    0
                );
            }, [
                language,
            ]);


            /* ==================================================
               PAGE COLLECTION
               ================================================== */

            const pages =
                useMemo(() => {
                    const result = [
                        ...portfolioPages,
                    ];


                    if (
                        result.length %
                        2 !==
                        0
                    ) {
                        result.push({
                            id:
                                "blank-end",

                            blank:
                                true,
                        });
                    }


                    return result;
                }, []);


            /* ==================================================
               ACTIVE SECTION
               ================================================== */

            const activeSection =
                portfolioPages[
                    Math.min(
                        currentPage,
                        portfolioPages.length -
                        1
                    )
                ]?.sectionId ??
                portfolioSections[
                    0
                ]?.id;


            /* ==================================================
               SECTION INDEXES
               ================================================== */

            const sectionIndexes =
                useMemo(() => {
                    return portfolioSections.reduce(
                        (
                            result,
                            section
                        ) => {
                            result[
                                section.id
                            ] =
                                portfolioPages.findIndex(
                                    (
                                        page
                                    ) =>
                                        page.sectionId ===
                                        section.id
                                );


                            return result;
                        },
                        {}
                    );
                }, []);


            /* ==================================================
               NAVIGATION
               ================================================== */

            const previousPage =
                useCallback(
                    () => {
                        bookRef.current
                            ?.pageFlip()
                            ?.flipPrev();
                    },
                    []
                );


            const nextPage =
                useCallback(
                    () => {
                        bookRef.current
                            ?.pageFlip()
                            ?.flipNext();
                    },
                    []
                );


            const goToSection =
                useCallback(
                    (
                        sectionId
                    ) => {
                        const target =
                            sectionIndexes[
                            sectionId
                            ];


                        if (
                            target ===
                            undefined ||
                            target <
                            0
                        ) {
                            return;
                        }


                        bookRef.current
                            ?.pageFlip()
                            ?.turnToPage(
                                target
                            );
                    },
                    [
                        sectionIndexes,
                    ]
                );


            /* ==================================================
               API EXPOSED
               ================================================== */

            useImperativeHandle(
                ref,
                () => ({
                    previousPage,
                    nextPage,
                }),
                [
                    previousPage,
                    nextPage,
                ]
            );


            /* ==================================================
               BOOK STATE
               ================================================== */

            const visiblePage =
                Math.min(
                    currentPage +
                    1,
                    portfolioPages.length
                );


            const canPrevious =
                currentPage >
                0;


            const canNext =
                currentPage <
                portfolioPages.length -
                1;


            useEffect(() => {
                onStateChange?.({
                    current:
                        visiblePage,

                    total:
                        portfolioPages.length,

                    canPrevious,

                    canNext,

                    activeSection,
                });
            }, [
                visiblePage,
                canPrevious,
                canNext,
                activeSection,
                onStateChange,
            ]);


            /* ==================================================
               RENDER
               ================================================== */

            return (
                <section
                    className="relative mx-auto w-full overflow-visible"
                    style={{
                        maxWidth:
                            `${notebookMaxWidth}px`,
                    }}
                >
                    <Tabs
                        sections={
                            portfolioSections
                        }
                        activeSection={
                            activeSection
                        }
                        language={
                            language
                        }
                        onSelect={
                            goToSection
                        }
                    />


                    <div className="relative isolate mx-auto w-full">
                        <div
                            className="
                                pointer-events-none absolute bottom-[1%] top-[1.4%] z-0
                                left-[-4px] w-[calc(100%+8px)]
                                rounded-[7px_0_0_7px]
                                border [border-color:var(--cartoon-line)]
                                bg-[var(--cartoon-concerto)]
                                shadow-[0_20px_50px_rgba(42,36,31,0.11)]
                                min-[701px]:left-[-0.7%] min-[701px]:w-[51%]
                            "
                            aria-hidden="true"
                        />

                        <div
                            className="
                                pointer-events-none absolute bottom-[1%] right-[-0.7%]
                                top-[1.4%] z-0 hidden w-[51%]
                                rounded-[0_7px_7px_0]
                                border [border-color:var(--cartoon-line)]
                                bg-[var(--cartoon-cloudy-soft)]
                                shadow-[0_20px_50px_rgba(42,36,31,0.11)]
                                min-[701px]:block
                            "
                            aria-hidden="true"
                        />

                        <div
                            className="
                                pointer-events-none absolute bottom-[-4px] left-[2%] right-[2%]
                                z-[2] h-4 rounded-[0_0_4px_4px]
                                border-x border-b [border-color:var(--cartoon-line)]
                                bg-[var(--cartoon-soft)]
                            "
                            aria-hidden="true"
                        />


                        <div className="relative z-10 flex justify-center">
                            <HTMLFlipBook
                                key={
                                    language
                                }
                                ref={
                                    bookRef
                                }

                                className="relative mx-auto overflow-visible"

                                width={
                                    720
                                }

                                height={
                                    900
                                }

                                size="stretch"

                                minWidth={
                                    300
                                }

                                maxWidth={
                                    1050
                                }

                                minHeight={
                                    375
                                }

                                maxHeight={
                                    1313
                                }

                                startPage={
                                    0
                                }

                                drawShadow={
                                    true
                                }

                                flippingTime={
                                    850
                                }

                                usePortrait={
                                    true
                                }

                                startZIndex={
                                    20
                                }

                                autoSize={
                                    true
                                }

                                maxShadowOpacity={
                                    0.18
                                }

                                showCover={
                                    false
                                }

                                mobileScrollSupport={
                                    false
                                }

                                clickEventForward={
                                    false
                                }

                                useMouseEvents={
                                    true
                                }

                                swipeDistance={
                                    30
                                }

                                showPageCorners={
                                    true
                                }

                                disableFlipByClick={
                                    true
                                }

                                onFlip={(
                                    event
                                ) =>
                                    setCurrentPage(
                                        event.data
                                    )
                                }
                            >
                                {pages.map(
                                    (
                                        page,
                                        index
                                    ) => (
                                        <FlipPage
                                            key={`${page.id}-${language}`}
                                            page={
                                                page
                                            }
                                            pageIndex={
                                                index
                                            }
                                            language={
                                                language
                                            }
                                            blank={
                                                page.blank
                                            }
                                        />
                                    )
                                )}
                            </HTMLFlipBook>


                            <div
                                className="
                                    pointer-events-none absolute bottom-[2px] left-1/2 top-[2px]
                                    z-[150] hidden w-5 -translate-x-1/2
                                    bg-[linear-gradient(90deg,transparent,rgba(42,36,31,0.025)_25%,rgba(42,36,31,0.085)_48%,rgba(255,250,244,0.2)_53%,rgba(42,36,31,0.025)_75%,transparent)]
                                    min-[701px]:block
                                "
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </section>
            );
        }
    );


export default Notebook;