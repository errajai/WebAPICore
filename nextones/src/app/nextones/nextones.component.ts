import { Component, OnInit } from '@angular/core';
import {NextoneService} from '../shared/nextone.service'
import { Nextone } from '../shared/nextone.model';

@Component({
  selector: 'app-nextones',
  templateUrl: './nextones.component.html',
  styleUrls: ['./nextones.component.scss']
})
export class NextonesComponent implements OnInit {

  // nextones :Nextone[];
  constructor(private service : NextoneService) { }

  ngOnInit() {
    // this.service.getAllNextones().subscribe(data =>{
    //   console.log(data);
    //   this.nextones = data;
    // })
  }

}
