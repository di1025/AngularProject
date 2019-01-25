export class Recipe {
    public name: string;
    public description: string;
    public imagePath: String;

    constructor(name: string, desc: string, imagePath: String){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    };
}