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

import { DirectiveComponent } from './directive/directive.component';
import { DirectiveFirstComponent } from './directive/first/first.component';
import { DirectiveSecondComponent } from './directive/second/second.component';
import { DirectiveThirdComponent } from './directive/third/third.component';
import { DirectiveFourthComponent } from './directive/fourth/fourth.component';
import { DirectiveFifthComponent } from './directive/fifth/fifth.component';
import { DirectiveSixthComponent } from './directive/sixth/sixth.component';
import { DirectiveSeventhComponent } from './directive/seventh/seventh.component';

import { MemberService } from "../service/member_service";
import { HeroService } from '../service/hero_service';
import { FirstDirective } from './directive/first/first.directive';
import { SecondDirective } from './directive/second/second.directive';
import { ThirdDirective } from './directive/third/third.directive';
import { FourthDirective } from './directive/fourth/fourth.directive';
import { SeventhDirective } from './directive/seventh/seventh.directive';
import { DependencyinjectionComponent } from './dependencyinjection/dependencyinjection.component';
import { ComponentserviceComponent } from './dependencyinjection/componentservice/componentservice.component';
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
  { path: 'forms/ninth', component: FormsNinthComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'directive/first', component: DirectiveFirstComponent },
  { path: 'directive/second', component: DirectiveSecondComponent },
  { path: 'directive/third', component: DirectiveThirdComponent },
  { path: 'directive/fourth', component: DirectiveFourthComponent },
  { path: 'directive/fifth', component: DirectiveFifthComponent },
  { path: 'directive/sixth', component: DirectiveSixthComponent },
  { path: 'directive/seventh', component: DirectiveSeventhComponent },
  { path: 'dependencyinjection', component: DependencyinjectionComponent },
  { path: 'dependencyinjection/componentservice', component: ComponentserviceComponent },
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
    FormsNinthComponent,
    DirectiveComponent,
    DirectiveFirstComponent,
    DirectiveSecondComponent,
    DirectiveThirdComponent,
    DirectiveFourthComponent,
    DirectiveFifthComponent,
    DirectiveSixthComponent,
    DirectiveSeventhComponent,
    FirstDirective,
    SecondDirective,
    ThirdDirective,
    FourthDirective,
    SeventhDirective,
    DependencyinjectionComponent,
    ComponentserviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    MemberService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
