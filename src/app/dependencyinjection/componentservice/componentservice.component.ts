import { Component, OnInit } from '@angular/core';
import { HeroService  } from "../../../service/hero_service";

@Component({
  selector: 'app-componentservice',
  templateUrl: './componentservice.component.html',
  styleUrls: ['./componentservice.component.css']
})
export class ComponentserviceComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  heros: Array<{ id: number; name: string }>;

  ngOnInit() {
    this.heros = this.heroService.getHeros();
  }

}
