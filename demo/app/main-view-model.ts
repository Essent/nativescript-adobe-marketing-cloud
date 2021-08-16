import { Observable } from "@nativescript/core";

export class HelloWorldModel extends Observable {
    public message: string;

    constructor() {
        super();
        this.message = 'This message has been deprecated';
    }

}
