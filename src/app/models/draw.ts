export class Draw {
    public choosen?: string = "";
    public drawList?: Array<string> = [];
    public date?: any;
    constructor(choosen: string, drawList: Array<string>, date: any) {
        this.choosen = choosen;
        this.drawList = drawList;
        this.date = date;
    }

}