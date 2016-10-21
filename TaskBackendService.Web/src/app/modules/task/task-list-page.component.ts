import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";   

@Component({
    template: require("./task-list-page.component.html"),
    styles: [require("./task-list-page.component.scss")],
    selector: "task-list-page"
})
export class TaskListPageComponent implements OnInit {
    constructor(private _router:Router) { }

    ngOnInit() {

    }
    
}
