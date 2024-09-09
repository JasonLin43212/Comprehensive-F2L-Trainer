export enum Turn {
    UP = "U",
    DOWN = "D",
    LEFT = "L",
    RIGHT = "R",
    FRONT = "F",
    BACK = "B",
    MIDDLE = "M",
    EQUATOR = "E",
    STANDING = "S",
    UP_WIDE = "u",
    DOWN_WIDE = "d",
    LEFT_WIDE = "l",
    RIGHT_WIDE = "r",
    FRONT_WIDE = "f",
    BACK_WIDE = "b",
    ROTATE_R = "x",
    ROTATE_U = "y",
    ROTATE_F = "z"
}

export type Move = {
    turn: Turn;
    times: number;
    inverted?: boolean;
}

export class Algorithm {

    private _moves: Move[];

    constructor(moves: Move[]) {
        this._moves = moves;
    }

    // TODO: add functions for getting prefix and suffix

}