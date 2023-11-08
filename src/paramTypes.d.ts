export type tone = "light" | "dark"
export type hue =
  | "red-purple"
  | "red"
  | "yellow-red"
  | "yellow"
  | "green-yellow"
  | "green"
  | "blue-green"
  | "blue"
  | "purple-blue"
  | "purple"

export type earthtones =
  | "light gray"
  | "silver"
  | "sand"
  | "tupe"
  | "mahogany"
  | "brick red"
  | "clay"
  | "cocoa"
  | "dark brown"
  | "dark"
export type divergingScheme =
  | "Spectral"
  | "RdYlGn"
  | "RdBu"
  | "PiYG"
  | "PRGn"
  | "RdYlBu"
  | "BrBG"
  | "RdGy"
  | "PuOr"
export type qualitativeScheme =
  | "Set2"
  | "Accent"
  | "Set1"
  | "Set3"
  | "Dark2"
  | "Paired"
  | "Pastel2"
  | "Pastel1"

export type sequentialScheme =
  | "OrRd"
  | "PuBu"
  | "BuPu"
  | "Oranges"
  | "BuGn"
  | "YlOrBr"
  | "YlGn"
  | "Reds"
  | "RdPu"
  | "Greens"
  | "YlGnBu"
  | "Purples"
  | "GnBu"
  | "Greys"
  | "YlOrRd"
  | "PuRd"
  | "Blues"
  | "PuBuGn"
  | "Viridis"

export type Color = number | string | object

/**
 * @param
 * An array of baseColor tokens (in short, just an array of valid colors)
 */

/**
 * @type
 * The property being queried. Used in utilities that perform operations on collections.
 */
export type factor =
  | "luminance"
  | "temp"
  | "saturation"
  | "contrast"
  | "distance"
  | "lightness"
  | "hue"
  
  
  type order =   "asc" | "desc"

  type callback = (arg: Color, colorSpace?: HueColorSpaces) => number


  type factorMapper = (
  factor: factor,
callback:callback,
 order?:order,
  colorObj = false
) => (colors: Color[]) => Color[]

export type ColorSpaces =
  | "a98"
  | "cubehelix"
  | "dlab"
  | "dlch"
  | "hsi"
  | "hsl"
  | "hsv"
  | "hwb"
  | "jab"
  | "jch"
  | "lab"
  | "lab65"
  | "lch"
  | "lch65"
  | "lchuv"
  | "lrgb"
  | "luv"
  | "okhsl"
  | "okhsv"
  | "oklab"
  | "rgb"

export type HueColorSpaces = "hsl" | "hsv" | "hsi" | "oklch" | "lch" | "hwb"

export type ScaleValues =
  | "100"
  | "50"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"

export type HueMap = {
  indigo: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }
  gray: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  zinc: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  neutral: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  stone: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  red: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  orange: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  amber: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  yellow: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  lime: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  green: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  emerald: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  teal: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  sky: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  blue: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  violet: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  purple: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  fuchsia: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  pink: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }

  rose: {
    "50": string
    "100": string
    "200": string
    "300": string
    "400": string
    "500": string
    "600": string
    "700": string
    "800": string
    "900": string
  }
}

type ColorTemp = "warm" | "cool" | "daylight" | "incadescent" | "fluorescent"