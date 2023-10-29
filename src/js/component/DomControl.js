import Collapser from "./collapser/Collapser";
import ChatControl from "./chat/ChatControl";

export default class DomControl{
    constructor(){

        this.collapse = new Collapser(document.querySelector('.collapser'));
        this.chat = null
    }
    initChat(){
        this.chat = new ChatControl(document.querySelector('.container'));
    }
}


