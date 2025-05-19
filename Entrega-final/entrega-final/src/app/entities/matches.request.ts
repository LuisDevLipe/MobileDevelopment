export class MatchesRequest {
  constructor(public teamId: number, public competition?: string) {
    this.teamId = teamId;
    this.competition = competition;
  }
}
