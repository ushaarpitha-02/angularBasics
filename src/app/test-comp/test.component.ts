
import { Component } from "@angular/core";

@Component({
    selector:'app-test',
    templateUrl:'./test.component.html',
    styleUrls:['./test.component.css']
})

export class TestComponent{
    title='Basics of angular';
    description='Angular is the combination of html,css,js,ts';
    firstname='Usha';
    lastname='Yeddula';
    middlename='Arpitha';

    getStudentDetails()
{
   return "Vinitha Reddy";
}


customerRole="Admin";
inputType="radio";
isDisabled=true;

buttonClick()
{
    console.log("Clicked the button successfully");
}

mouseHover()
{
    console.log("Mouse hovering");
}







}

