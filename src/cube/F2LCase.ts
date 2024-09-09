import { Cube, CubeColor, Orientation } from "./Cube";



export class F2LCase {

    private _cube: Cube;
    private _algorithm: Algorithm;
    private _caseId: number;
    // private _freeBackSlots: any = "";


    constructor(
        caseId: number,
        cube: Cube,
        algorithm: Algorithm
    ) {
        this._caseId = caseId;
        this._cube = cube;
        this._algorithm = algorithm;
    }




}

export const generateCases = (pairOrientation: Orientation): F2LCase[] => {
    // Based on the orientation, the F2L pair of interest will have the 
    // colors of the front and right face

    // TODO: generate these cases and make sure the cube is right

    return [];
}
