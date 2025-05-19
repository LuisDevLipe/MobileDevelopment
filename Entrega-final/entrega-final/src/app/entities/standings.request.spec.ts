import { StandingsRequest } from './standings.request';

describe('StandingsRequest', () => {
  it('should create an instance', () => {
    expect(new StandingsRequest('BSA')).toBeTruthy();
  });
});
