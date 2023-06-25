interface MiniCharacter {
  id: string;
  name: string;
  image: string;
}

interface Character extends MiniCharacter {
  status: string;
  species: string;
  type: string;
  gender: string;
}

export type { MiniCharacter, Character };
