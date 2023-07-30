import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './appModules/mat.module';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { IndexComponent } from './pages/index/index.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ProjectsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
