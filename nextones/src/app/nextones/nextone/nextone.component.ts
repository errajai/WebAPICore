import { Component, OnInit } from '@angular/core';
import { NextoneService } from 'src/app/shared/nextone.service';
import { NgForm } from '@angular/forms';
import { format } from 'util';

@Component({
  selector: 'app-nextone',
  templateUrl: './nextone.component.html',
  styleUrls: ['./nextone.component.scss']
})
export class NextoneComponent implements OnInit {

  constructor(private service : NextoneService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData = {
      NextoneId : 0,
      FirstName : '',
      LastName : '',
      ExpYears : 0,
      UrlImage : '',
      Missions : null
    }
  }

}
