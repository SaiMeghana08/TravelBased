import { Component, OnInit } from '@angular/core';
import { Trip } from '../services/trip';

@Component({
  selector: 'app-travel',
  imports: [],
  templateUrl: './travel.html',
  styleUrl: './travel.scss',
})
export class Travel implements OnInit{
  constructor(private trip:Trip){}
  Data:any;
  ngOnInit() {
    // this.trip.getRecommendations().subscribe((data)=>{
    //   console.log(data);
    //   this.Data=data;
    // });
    this.Data=this.trip.getRecommendations();
  }
}
