import { Component } from '@angular/core';

interface Address {
    province: string;
    city: string;
}

@Component({
  selector: 'sl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormsComponent {
  name: string;
  address: Address;
  showSkills: boolean;
  skills: string[];

  constructor() {
      this.name = 'Semlinker';
      this.address = {
          province: '福建',
          city: '厦门'
      };
      this.showSkills = true;
      this.skills = ['AngularJS 1.x', 'Angular 2.x', 'Angular 4.x'];
  }

  toggleSkills() {
      this.showSkills = !this.showSkills;
  }

  addSkill(skill: string) {
      let skillStr = skill.trim();
      if (this.skills.indexOf(skillStr) === -1) {
          this.skills.push(skillStr);
      }
  }
}
