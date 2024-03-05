interface Iplayer {
  id: number;
  name: string;
  date: string;
}

type Plays = {
  id: number;
  name: string;
  duce: number;
};
interface Igame<T extends Plays> {
  id: number;
  hisotryPlays: T[];
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
  winRateGlobal: () => number;
}
