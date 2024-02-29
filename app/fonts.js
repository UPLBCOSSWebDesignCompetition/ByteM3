import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({
    subsets: ["latin"]
});

const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-bebas-neue",
});

export { inter, bebas };