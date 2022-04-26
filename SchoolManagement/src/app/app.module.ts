import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SchoolsModule } from './schools/schools.module';
import { ClassesModule } from './classes/classes.module';
import { SemestersModule } from './semesters/semesters.module';
import { CoursesModule } from './courses/courses.module';
import { FinanceModule } from './finance/finance.module';
import { RegisterModule } from './register/register.module';
import { RolesModule } from './roles/roles.module';
import { RecordsModule } from './records/records.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SchoolsModule,
    ClassesModule,
    SemestersModule,
    CoursesModule,
    FinanceModule,
    RegisterModule,
    RolesModule,
    RecordsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
