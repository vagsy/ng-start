import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MembersComponent } from './member/member.component';
import { FormsComponent } from './form/form.component';
import { FormsFirstComponent } from './form/first/first.component';
import { FormsSecondComponent } from './form/second/second.component';
import { FormsThirdComponent } from './form/third/third.component';
import { FormsFourthComponent } from './form/fourth/fourth.component';
import { FormsFifthComponent } from './form/fifth/fifth.component';
import { FormsSixthComponent } from './form/sixth/sixth.component';
import { FormsSeventhComponent } from './form/seventh/seventh.component';
import { FormsEighthComponent } from './form/eighth/eighth.component';
import { FormsNinthComponent } from './form/ninth/ninth.component';

import { MemberService } from "../service/member_service";
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user' },
  { path: 'user', component: UserComponent },
  { path: 'members', component: MembersComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'forms/first', component: FormsFirstComponent },
  { path: 'forms/second', component: FormsSecondComponent },
  { path: 'forms/third', component: FormsThirdComponent },
  { path: 'forms/fourth', component: FormsFourthComponent },
  { path: 'forms/fifth', component: FormsFifthComponent },
  { path: 'forms/sixth', component: FormsSixthComponent },
  { path: 'forms/seventh', component: FormsSeventhComponent },
  { path: 'forms/eighth', component: FormsEighthComponent },
  { path: 'forms/ninth', component: FormsNinthComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MembersComponent,
    FormsComponent,
    FormsFirstComponent,
    FormsSecondComponent,
    FormsThirdComponent,
    FormsFourthComponent,
    FormsFifthComponent,
    FormsSixthComponent,
    FormsSeventhComponent,
    FormsEighthComponent,
    FormsNinthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
