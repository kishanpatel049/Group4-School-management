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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SchoolsModule,
    ClassesModule,
    SemestersModule,
    CoursesModule,
    FinanceModule,
    RegisterModule,
    RolesModule,
    RecordsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
