export class StandingsRequest {
    code:string;
    season?: string;
    constructor(code: string, season?: string) {
        this.code = code;
        this.season = season;
    }
}
