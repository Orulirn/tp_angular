export class Pokemon {
    id!: number;
    nom!: string;
    image?: string;
    height?: number;
    weight?: number;
    types?: string[];
    stats?: {
        name: string;
        value: number;
    }[];
}
