
export enum CubeColor {
    WHITE = "W",
    YELLOW = "Y",
    RED = "R",
    ORANGE = "O",
    BLUE = "B",
    GREEN = "G",
    BLANK = "-"
}

export enum Side {
    RIGHT = "right",
    LEFT = "left",
    FRONT = "front",
    BACK = "back",
    UP = "up",
    DOWN = "down"
}

export class Orientation {

    private _sideToColor: Record<Side, CubeColor>;

    constructor(frontColor: CubeColor, topColor: CubeColor) {
        const rightColor: CubeColor | undefined = Orientation.getRightColor(frontColor, topColor);

        if (rightColor === undefined) {
            throw new Error(`Invalid orientation with front color: ${frontColor}, and top color: ${topColor}`);
        }

        this._sideToColor = {
            [Side.FRONT]: frontColor,
            [Side.UP]: topColor,
            [Side.RIGHT]: rightColor,
            [Side.BACK]: Orientation.getOppositeColor(frontColor),
            [Side.DOWN]: Orientation.getOppositeColor(topColor),
            [Side.LEFT]: Orientation.getOppositeColor(rightColor)
        }
    }

    public getSideColor(side: Side): CubeColor {
        return this._sideToColor[side];
    }

    public static getOppositeColor(color: CubeColor | undefined): CubeColor {
        switch (color) {
            case CubeColor.WHITE: return CubeColor.YELLOW;
            case CubeColor.YELLOW: return CubeColor.WHITE;
            case CubeColor.RED: return CubeColor.ORANGE;
            case CubeColor.ORANGE: return CubeColor.RED;
            case CubeColor.BLUE: return CubeColor.GREEN;
            case CubeColor.GREEN: return CubeColor.BLUE;
            default: return CubeColor.BLANK;
        };
    }

    public static getRightColor(frontColor: CubeColor, topColor: CubeColor): CubeColor | undefined {
        const getRightColorHelper = (frontColor: CubeColor, topColor: CubeColor): CubeColor | undefined => {
            switch (frontColor) {
                case CubeColor.WHITE:
                    switch (topColor) {
                        case CubeColor.RED: return CubeColor.GREEN;
                        case CubeColor.ORANGE: return CubeColor.BLUE;
                        case CubeColor.BLUE: return CubeColor.RED;
                        case CubeColor.GREEN: return CubeColor.ORANGE;
                    }
                case CubeColor.RED:
                    switch (topColor) {
                        case CubeColor.WHITE:
                        case CubeColor.YELLOW:
                        case CubeColor.BLUE:
                        case CubeColor.GREEN:
                    }
                case CubeColor.GREEN:
                    switch (topColor) {
                        case CubeColor.WHITE:
                        case CubeColor.YELLOW:
                        case CubeColor.RED:
                        case CubeColor.ORANGE:
                    }
            }
        };

        if ([CubeColor.WHITE, CubeColor.RED, CubeColor.GREEN].includes(frontColor)) {
            return getRightColorHelper(frontColor, topColor);
        }
        else {
            return this.getOppositeColor(
                getRightColorHelper(this.getOppositeColor(frontColor), topColor)
            );
        }

    }
}


export type CubeFace = [
    [CubeColor, CubeColor, CubeColor],
    [CubeColor, CubeColor, CubeColor],
    [CubeColor, CubeColor, CubeColor]
]

export const areCubeFacesEqual = (face1: CubeFace, face2: CubeFace): boolean => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (face1[i][j] !== face2[i][j]) return false;
        }
    }
    return true;
}

/**
 * The cube face colors will be in the following orientation
 * 
 *       [YELLOW ]
 * [RED] [ GREEN ] [ORANGE] [BLUE]
 *       [ WHITE ]
 */
export type CubeColorInfo = {
    [CubeColor.YELLOW]: CubeFace;
    [CubeColor.GREEN]: CubeFace;
    [CubeColor.ORANGE]: CubeFace;
    [CubeColor.BLUE]: CubeFace;
    [CubeColor.RED]: CubeFace;
    [CubeColor.WHITE]: CubeFace;
}

export class Cube {

    private _colorInfo: CubeColorInfo;

    constructor(colorInfo: CubeColorInfo) {
        this._colorInfo = colorInfo;
    }

    public get colorInfo(): CubeColorInfo {
        return this._colorInfo;
    }

    public getFaceColors(color: CubeColor): CubeFace | undefined {
        if (color === CubeColor.BLANK) return undefined;
        return this.colorInfo[color];
    }

    public equals(otherCube: Cube): boolean {
        return Object.entries(this.colorInfo)
            .every(([faceColor, colors]) => areCubeFacesEqual(
                otherCube.getFaceColors(faceColor as CubeColor)!,
                colors
            ));
    }

    // TODO: methods for rotating and comparing cubes
}