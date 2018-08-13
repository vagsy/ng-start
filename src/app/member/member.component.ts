import { Component, OnInit  } from '@angular/core';
import { MemberService } from "../../service/member_service";

interface Member {
  id: string;
  login: string;
  avatar_url: string;
}

@Component({
  selector: 'sl-members',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.getMembers()
        .subscribe(data => {
          if (data) this.members = data;
        });
  }
}
