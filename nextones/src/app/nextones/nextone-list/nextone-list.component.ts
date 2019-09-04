import { Component, OnInit } from '@angular/core';
import { Nextone } from 'src/app/shared/nextone.model';
import { NextoneService } from 'src/app/shared/nextone.service';

@Component({
  selector: 'app-nextone-list',
  templateUrl: './nextone-list.component.html',
  styleUrls: ['./nextone-list.component.scss']
})
export class NextoneListComponent implements OnInit {

  nextones : Nextone[];
  constructor(private service : NextoneService) { }

  ngOnInit() {
    this.service.getAllNextones().subscribe(data => {
      this.nextones = data;
      console.log(this.nextones);
    });
  }

}
