import { Guid } from "guid-typescript";

export class Todo{
    constructor(
        public id: Guid,
        public nombre: string,
        public estado: string,
        public fecha: string,
        public editable: false
    ) {
        
    }
}