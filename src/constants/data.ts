import { Combo } from "@/types/data.type";

export const combos: Combo[] = [
  {
    id: "combo-1",
    name: "La Probadita",
    description: "4 alitas + papa pequeña + 1 salsa a elección",
    price: 4.99,
    image: "/placeholder.svg?height=200&width=300",
    sauces: 1,
  },
  {
    id: "combo-2",
    name: "Siete Pecados",
    description: "7 alitas + papa grande + 2 salsas a elección",
    price: 7.99,
    image: "/placeholder.svg?height=200&width=300",
    popular: true,
    sauces: 2,
  },
  {
    id: "combo-3",
    name: "Doce Rounds",
    description: "12 alitas + papa grande + 3 salsas a elección",
    price: 12.99,
    image: "/placeholder.svg?height=200&width=300",
    popular: true,
    sauces: 3,
  },
  {
    id: "combo-4",
    name: "La Manada",
    description: "20 alitas + 2 papas grandes + 4 salsas a elección",
    price: 22.99,
    image: "/placeholder.svg?height=200&width=300",
    sauces: 4,
  },
  {
    id: "combo-5",
    name: "Noche Legendaria",
    description: "30 alitas + 2 papas grandes + 4 salsas a elección",
    price: 32.99,
    image: "/placeholder.svg?height=200&width=300",
    sauces: 4,
  },
];

export const salsas: { label: string; value: string }[] = [
  {
    label: "BBQ",
    value: "bbq",
  },
  {
    label: "Maracúya",
    value: "maracuya",
  },
  {
    label: "Tamarindo",
    value: "tamarindo",
  },
  {
    label: "Piña",
    value: "pina",
  },
  {
    label: "Picante",
    value: "picante",
  },
  {
    label: "Mora",
    value: "mora",
  },
];

export const extras = [
  {
    label: "PAPAS FRITAS",
    value: "papas_fritas",
    precio: 2.5,
  },
  {
    label: "SALSA ADICIONAL",
    value: "salsa_adicional",
    precio: 1,
  },
  {
    label: "COCA COLA PERSONAL",
    value: "coca_cola_personal",
    precio: 1,
  },
  {
    label: "COLA 1.35 LITRO",
    value: "cola_1_35_litro",
    precio: 2,
  },
];
