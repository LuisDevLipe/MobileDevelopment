import { CompetitionMatchesRequest } from './competition.request';

type CompetitionsResponse = {
  count: number;
  filters: {
    area?: Area;
    client?: string;
  };
  competitions: Competition[];
};

class CompetitionResponse {
  area!: Area;
  id!: number;
  name!: string;
  code!: string;
  type!: string;
  emblem!: string;
  currentSeason!: Season;
  seasons!: Season[];
  lastUpdated!: string;
}
interface Area {
  id: number;
  name: string;
  code: string;
  flag: string;
}

interface Winner {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
}

interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number | null;
  winner: Winner | null;
}

interface StandingsResponse {
  filters: {
    season: string;
  };
  area: Area;
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  season: Season;
  standings: Standing[];
}

interface Standing {
  stage: string;
  type: string;
  group: string | null;
  table: StandingTableEntry[];
}

interface StandingTableEntry {
  position: number;
  team: Team;
  playedGames: number;
  form: string | null;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

class CompetitionMatchesResponse {
  filters!: CompetitionMatchesRequest['filters'];
  resultSet!: {
    count: number;
    first: string;
    last: string;
    played: number;
  };
  competition!: Competition;
  matches!: CompetitionMatch[];
}
interface Competition {
  id: number;
  name: string;
  area: Area;
  code: string;
  type: string;
  emblem: string;
}
interface CompetitionMatch {
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
  score: MatchScore;
  odds: {
    msg: string;
  };
  referees: any[];
}

interface MatchScore {
  winner: string;
  duration: string;
  fullTime: {
    home: number;
    away: number;
  };
  halfTime: {
    home: number;
    away: number;
  };
}

type CompetitionTeamsResponse = {
  count: number;
  filters: {
    season: string;
  };
  competition: Competition;
  season: Season;
  teams: Team[];
};

type CompetitionScorersResponse = {
  count: number;
  filters: {
    season: string;
    limit: number;
  };
  competition: Competition;
  season: Season;
  scorers: Array<{
    player: Player;
    team: Team;
    playedMatches: number;
    goals: number;
    assists: number | null;
    penalties: number | null;
  }>;
};

interface Player {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  section: string;
  position: string | null;
  shirtNumber: number | null;
  lastUpdated: string;
}

export {
  CompetitionsResponse,
  CompetitionResponse,
  StandingsResponse,
  CompetitionMatchesResponse,
  CompetitionTeamsResponse,
  CompetitionScorersResponse,
};
