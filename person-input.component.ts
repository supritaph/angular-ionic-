import { Component } from '@angular/core';


@Component({
    selector: "app-person-input",
    templateUrl: "./person-input.component.html",
    styleUrls:["./person-input.component.css"]

})
 
/*  using Local refrenence 

export class PersonInputComponent{

    
    onpersoncreate(personaname:string)
    {
        console.log("person create!" +personaname)
    }
}
*/


export class PersonInputComponent{

    personnameel='';
    onpersoncreate()
{
    console.log("created" +this.personnameel);
    this.personnameel='';

    
}
}
