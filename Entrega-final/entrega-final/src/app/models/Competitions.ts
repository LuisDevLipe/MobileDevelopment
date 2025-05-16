interface Competition {
  id: number;
  area: {
    id: number;
    name: string;
    flag: string;
  };
  name: string;
  code: string;
  plan: string;
  type: string;
  emblem: string;
  currentSeason: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner?: null | string;
  };
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}
export { Competition };
