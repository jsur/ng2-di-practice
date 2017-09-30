import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDemoComponent } from './components/user-demo/user-demo.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: 'API_URL', useValue: 'http://thisisanapiurl.com/api/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
