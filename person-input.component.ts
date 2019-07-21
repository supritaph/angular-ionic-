import { Component ,Output,EventEmitter} from '@angular/core';
import { OnInit } from '@angular/core';

import { PersonsService } from './persons.service';


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
export class PersonInputComponent implements OnInit{
@Output() PersonCreate= new EventEmitter<string>();
    personnameel='';
    personList: string[];
    onpersoncreate()
{
    console.log("created" +this.personnameel);
    this.PersonCreate.emit(this.personnameel);
    this.personnameel='';
    
}

ngOnInit() {
    this.personList = this.prsService.persons;
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }
}
}
