import { Component, Input, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    template: require("./task-edit-page.component.html"),
    styles: [require("./task-edit-page.component.scss")],
    selector: "task-edit-page"
})
export class TaskEditPageComponent { 
    constructor(private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) { }

}
