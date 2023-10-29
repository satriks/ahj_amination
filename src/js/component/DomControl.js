import Collapser from "./collapser/Collapser";

export default class DomControl{
    constructor(){

        this.collapse = new Collapser(document.querySelector('.collapser'));
    }
}


