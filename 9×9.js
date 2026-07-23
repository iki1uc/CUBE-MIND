class FIX9x9 {

    constructor(){
        this.matrix = [];
    }

    build(){
        this.matrix = [];
        for(let r=0; r<9; r++){
            let row = [];
            for(let c=0; c<9; c++){
                row.push(r*10 + c);
            }
            this.matrix.push(row);
        }
        return this.matrix;
    }
}

window.FIX9x9 = new FIX9x9();
