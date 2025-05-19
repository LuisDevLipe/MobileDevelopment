export interface Filters {
    competitions: string;
    permission: string;
    limit: number;
}

export interface ResultSet {
    count: number;
    competitions: string;
    first: string;
    last: string;
    played: number;
    wins: number;
    draws: number;
    losses: number;
}

export interface Area {
    id: number;
    name: string;
    code: string;
    flag: string;
}

export interface Competition {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
}

export interface Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: any;
}

export interface Team {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
}

export interface ScoreTime {
    home: number;
    away: number;
}

export interface Score {
    winner: string;
    duration: string;
    fullTime: ScoreTime;
    halfTime: ScoreTime;
}

export interface Odds {
    msg: string;
}

export interface Match {
    area: Area;
    competition: Competition;
    season: Season;
    id: number;
    utcDate: string;
    status: string;
    matchday: number;
    stage: string;
    group: string | null;
    lastUpdated: string;
    homeTeam: Team;
    awayTeam: Team;
    score: Score;
    odds: Odds;
    referees: any[];
}

export class MatchesResponse {
    filters!: Filters;
    resultSet!: ResultSet;
    matches!: Match[];

    constructor(init?: Partial<MatchesResponse>) {
        Object.assign(this, init);
    }
}
