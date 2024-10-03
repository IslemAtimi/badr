import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cp3',
  templateUrl: './cp3.component.html',
  styleUrls: ['./cp3.component.css']
})
export class Cp3Component implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id'])

    console.log(this.route.snapshot.queryParamMap.get('name'))
  }

}
