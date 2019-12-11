import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { JobtypeComponent } from './jobtype/jobtype.component';
import { AgentsubsComponent } from './agentsubs/agentsubs.component';
import { LancersubsComponent } from './lancersubs/lancersubs.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { RegformComponent } from './regform/regform.component';




const appRoutes:Routes =
[
  {path:'', component:RegformComponent},
  {path:'jobtype', component:JobtypeComponent},
  {path:'agentsubs', component:AgentsubsComponent},
  {path:'lancersubs', component:LancersubsComponent},
  {path:'**', component:RegformComponent},



]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JobtypeComponent,
    AgentsubsComponent,
    LancersubsComponent,
    RegformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
