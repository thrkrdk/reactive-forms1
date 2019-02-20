import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BasicComponent } from './forms/basic/basic.component';
import { GroupComponent } from './forms/group/group.component';
import { NestedGroupComponent } from './forms/nested-group/nested-group.component';
import { BuilderComponent } from './forms/builder/builder.component';
import { FormarrayComponent } from './forms/formarray/formarray.component'

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    GroupComponent,
    NestedGroupComponent,
    BuilderComponent,
    FormarrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
