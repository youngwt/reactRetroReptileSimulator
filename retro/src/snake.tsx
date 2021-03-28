class Snake {

    public x : number;
    public y : number;
    public direction : Direction

    public nextSegment : Snake | undefined;

    constructor(x :number, y : number, direction : Direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    public isSnakeOnRow(rowIndex : number) : boolean {

        if(this.y === rowIndex)
        {
            return true;
        }

        if(this.nextSegment !== undefined)
        {
            return this.nextSegment.isSnakeOnRow(rowIndex);
        }

        return false;

    }

    public isSnakeOnPixel(x : number) : boolean {

        if(this.x === x)
        {
            return true;
        }

        if(this.nextSegment !== undefined)
        {
            return this.nextSegment.isSnakeOnPixel(x);
        }

        return false;
    }

}

enum Direction {
    Left,
    Right,
    Up,
    Down
}

export default Snake;
