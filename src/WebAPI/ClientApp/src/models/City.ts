export class City {
    name: string;
    x: number;
    y: number;
    [key: string]: string | number;

    constructor(name: string, x: number, y: number) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
}