// react-helmet-async ships CJS only; named imports fail at SSR module
// evaluation under Vite's module runner. Import the default and re-export.
import * as rha from "react-helmet-async";

type RHA = typeof import("react-helmet-async");

const resolved = ((rha as unknown as { default?: RHA }).default ?? rha) as RHA;

export const Helmet = resolved.Helmet;
export const HelmetProvider = resolved.HelmetProvider;
