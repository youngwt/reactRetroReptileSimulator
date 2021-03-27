class Food {

    public x : number | undefined;
    public y : number | undefined;

    constructor(width : number, height : number) {
        this.x = Math.floor(Math.random() * width);
        this.y = Math.floor(Math.random() * height);
    }
}

export default Food;
