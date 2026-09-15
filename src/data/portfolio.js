import { introPages } from "../pages/Intro/pages";

import { berrettaPages } from "../pages/Berretta/pages";

import { bobinaPages } from "../pages/Bobina/pages";

import { moaPages } from "../pages/Moa/pages";
import { closingPages } from "../pages/Closing/pages";


export const portfolioSections = [
    {
        id: "intro",
        short: "00",

        label: {
            it: "Intro",
            en: "Intro",
        },

        pages: introPages,
    },

    {
        id: "berretta",
        short: "01",

        label: {
            it: "Berretta Rossa",
            en: "Berretta Rossa",
        },

        pages: berrettaPages,
    },

    {
        id: "bobina",
        short: "02",

        label: {
            it: "Bobina Criminale",
            en: "Bobina Criminale",
        },

        pages: bobinaPages,
    },

    {
        id: "moa",
        short: "03",

        label: {
            it: "MOA",
            en: "MOA",
        },

        pages: moaPages,
    },


    {
        id: "closing-end",
        short: "04",

        label: {
            it: "Thanks",
            en: "Thanks",
        },

        pages: closingPages,
    },
];


export const portfolioPages =
    portfolioSections.flatMap(
        (section) =>
            section.pages.map(
                (page) => ({
                    ...page,

                    sectionId:
                        section.id,
                })
            )
    );