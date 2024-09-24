export const PromiseRatings = {
  Fulfilled: {
    backgroundColor: 'bg-primary',
    textColor: 'text-primary',
    label: {
      singular: 'splněný',
      plural: 'splněné',
      other: 'splněno',
    },
    icon: "../../assets/icons/promises/fulfilled.svg",
    isVisible: (count: number) => count > 0,
  },
  InProgress: {
    backgroundColor: 'bg-blue-400',
    textColor: 'text-blue-400',
    label: {
      singular: 'rozpracovaný',
      plural: 'rozpracované',
      other: 'rozpracováno',
    },
    icon: "../../assets/icons/promises/in_progress.svg",
    isVisible: (count: number) => count > 0,
  },
  PartlyImplemented: {
    backgroundColor: 'bg-secondary',
    textColor: 'text-secondary',
    label: {
      singular: 'část. splněný',
      plural: 'část. splněné',
      other: 'část. splněno',
    },
    icon: "../../assets/icons/promises/partially_fulfilled.svg",
    isVisible: (count: number) => count > 0,
  },
  NotImplemented: {
    backgroundColor: 'bg-gray-500',
    textColor: 'text-gray-500',
    label: {
      singular: 'zatím nehodnocený',
      plural: 'zatím nehodnocené',
      other: 'zatím nehodnoceno',
    },
    icon: "../../assets/icons/promises/not_yet_evaluated.svg",
    isVisible: (count: number) => count > 0,
  },
  Violated: {
    backgroundColor: 'bg-red',
    textColor: 'text-red',
    label: {
      singular: 'porušený',
      plural: 'porušené',
      other: 'porušeno',
    },
    icon: "../../assets/icons/promises/broken.svg",
    isVisible: (count: number) => count > 0,
  },
  Stalled: {
    backgroundColor: 'bg-gray',
    textColor: 'text-gray',
    label: {
      singular: 'nerealizovaný',
      plural: 'nerealizované',
      other: 'nerealizováno',
    },
    icon: "../../assets/icons/promises/stalled.svg",
    isVisible: () => true,
  },
}
