import { Component, OnInit } from '@angular/core';
import { NextoneService } from 'src/app/shared/nextone.service';
import { NgForm } from '@angular/forms';

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
      ExpYears : null,
      UrlImage : '',
      Missions : null
    }
  }

  onSubmit(form : NgForm){
    this.addRecord(form)
  }

  addRecord(form : NgForm){
    this.service.postNextone(form.value).subscribe(res => {
      this.resetForm(form);
    });
  }

}
