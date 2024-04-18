import { Component } from "@angular/core";

Component({
  selector:"Errors",
})

export interface Errors {
  errors: { [key: string]: string };
}
