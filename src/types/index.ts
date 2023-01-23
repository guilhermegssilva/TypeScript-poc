export interface Profile {
    id?: number;
    name: string;
    power: string;
    alias: string;
    age: number;
    sex: "male" | "female";
}

export interface ProfileBody {
    id?: number;
    name?: string;
    power: string;
    alias?: string;
    age?: number;
    sex?: "male" | "female";
}
