export type Pokemon = {
    id:number;
    name:string;
    generation:number;
    sprite:string;
    types?:string[];
    stats?:{name:string, value:number}[];
    abilities?:string[];
    moves?:string[];
}
