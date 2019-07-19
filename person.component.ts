import { Component , Input} from "@angular/core";
import { templateJitUrl } from '@angular/compiler';

@Component
({
    selector : 'app-person',
    templateUrl: './person.component.html',

})

export class PersonComponent

{
   @Input() personlist: string[];


}