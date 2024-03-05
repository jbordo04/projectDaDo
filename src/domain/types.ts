interface Idatos {
  id: number;
  name: string;
  date: string;
}

interface Igame {
  numberGames: number;
  winRate: number;
}

interface Igames {
  listLastPlays: () => number[];
  result: string;
  winRate: number;
}

interface Isystem {
  listPlayers: () => void;
  winRateplayer: () => void;
  winRateGlobal: number;
}
