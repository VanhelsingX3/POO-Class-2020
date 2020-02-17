class Manual{

    
    dependencias: { [id: string] : string | undefined; } = {};
    
    constructor(){

        this.dependencias = {
            "A" : "",
            "B" : "",
            "C" : "A" || "B",
            "D" : "A" || "C"
           
        }

    }
    

}

export {Manual}
