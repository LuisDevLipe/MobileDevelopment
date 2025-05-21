class CompetitionRequest {
  public id?: number;
  public filters?: {
    areas?: string; // comma separated list of area ids
  };

  constructor({
    id,
    filters,
  }: {
    id?: number;
    filters?: {
      areas: string; // comma separated list of area ids
    };
  } = {}) {
    this.id = id;
    this.filters = filters;
  }
}

class StandingsRequest {
  public id!: number | string;
  public filters?: {
    matchday?: number;
    season?: string;
    date?: string; // YYYY-MM-DD
  };
  constructor({
    id,
    filters,
  }: {
    id: number | string;
    filters?: {
      matchday: number;
      season: string;
      date: string; // YYYY-MM-DD
    };
  }) {
    this.id = id;
    this.filters = filters;
  }
}

class CompetitionMatchesRequest {
    public id!: number | string;
    public filters?: {
        dateFrom?: string; // YYYY-MM-DD
        dateTo?: string;   // YYYY-MM-DD
        stage?: string;
        status?: string;
        matchday?: number;
        group?: string;
        season?: string | number;
    };
    // named parameters using destructuring
    constructor({
        id,
        filters,
    }: {
        id: number | string;
        filters?: {
            dateFrom?: string; // YYYY-MM-DD
            dateTo?: string;   // YYYY-MM-DD
            stage?: string;
            status?: string;
            matchday?: number;
            group?: string;
            season?: string | number;
        };
    }) {
        this.id = id;
        this.filters = filters;
    }
}

export { CompetitionRequest, StandingsRequest, CompetitionMatchesRequest };
