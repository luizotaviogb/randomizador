export class Draw {
    public choosen?: string = "";
    public drawList?: Array<string> = [];

    constructor(choosen: string, drawList: Array<string>) {
        this.choosen = choosen;
        this.drawList = drawList;
    }

}