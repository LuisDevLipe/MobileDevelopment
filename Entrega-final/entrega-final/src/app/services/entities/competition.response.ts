import { CompetitionMatchesRequest } from './competition.request';
<<<<<<< HEAD

type CompetitionsResponse = {
  count: number;
  filters: {
    area?: Area;
    client?: string;
  };
  competitions: Competition[];
};

=======
class CompetitionsResponse {
  count!: number;
  filters!: {};
  competitions!: CompetitionResponse[];
}
>>>>>>> 9d4ad20 (decoupling competition(s) request method)
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

<<<<<<< HEAD
type CompetitionTeamsResponse = {
  count: number;
  filters: {
    season: string;
  };
  competition: Competition;
  season: Season;
  teams: Team[];
};

export {
  CompetitionsResponse,
  CompetitionResponse,
  StandingsResponse,
  CompetitionMatchesResponse,
  CompetitionTeamsResponse,
=======
export {
  CompetitionResponse,
  CompetitionsResponse,
  StandingsResponse,
  CompetitionMatchesResponse,
>>>>>>> 9d4ad20 (decoupling competition(s) request method)
};
