import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "800": "#252733",
      "600": "#767676",
      "400": "#A4A6B3",
      "300": "#9FA2B4",
      "250": "#B9B9B9",
      "200": "#DFE0EB",
      "170": "#EDEDED",
      "150": "#F0F1F7",
      "100": "#FCFDFE",
      "50": "#E5E5E5",
    },
    blue: {
      "300": "#1D5175",
    },
    white: {
      offWhite: "#FFFFFF",
    },
  },

  colorScheme: {
    blue: "#1D5175",
  },

  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
   
    },
  },

});
