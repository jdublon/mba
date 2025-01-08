type Difficulty = "Easy" | "Moderate" | "Challenging" | "Tough";

export type Product = {
  id: number;
  name: string;
  description: string;
  difficulty: Difficulty;
};
