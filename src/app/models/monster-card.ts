export interface MonsterCard {
  name: string;
  url: string;
  problems: Problem[];
}

export interface Problem {
  prerequisites?: string;
  expectedBehavior: string;
  actualBehavior: string;
  limitations?: string;
}
