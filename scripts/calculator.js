window.calculator = new CalcController();

class CalcController {
    
    constructor() {
        
        this._locale = 'pt-br';
        this._displayCalcEl = document.getElementById("display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate; 
        this.initialize();
    }

}