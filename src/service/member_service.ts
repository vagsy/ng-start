import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MemberService {
    constructor(private http: Http) { }

    getMembers() {
      return this.http
        .get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
        .map(res => res.json());
    }
}
