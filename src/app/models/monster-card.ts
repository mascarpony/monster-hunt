export interface MonsterCard {
  name: string;
  url: string;
  problems: Problem[];
}

export interface Problem {
  number: number;
  prerequisites?: string;
  expectedBehavior: string;
  actualBehavior: string;
  limitations?: string;
}
