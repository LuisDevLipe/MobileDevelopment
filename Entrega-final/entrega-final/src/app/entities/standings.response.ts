export class StandingsResponse{
  filters: {
    season: string;
  };
  area: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: null | any;
  };
  standings: Array<{
    stage: string;
    type: string;
    group: null | string;
    table: Array<{
      position: number;
      team: {
        id: number;
        name: string;
        shortName: string;
        tla: string;
        crest: string;
      };
      playedGames: number;
      form: null | string;
      won: number;
      draw: number;
      lost: number;
      points: number;
      goalsFor: number;
      goalsAgainst: number;
      goalDifference: number;
    }>;
  }>;

  constructor(data: StandingsResponse) {
    this.filters = data.filters;
    this.area = data.area;
    this.competition = data.competition;
    this.season = data.season;
    this.standings = data.standings;
  }
}