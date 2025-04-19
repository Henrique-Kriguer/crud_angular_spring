import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule, // Import BrowserModule for browser-specific services
    RouterModule.forRoot(routes), // Configure the router with routes
    AppComponent, // Import the standalone AppComponent
  ],
  providers: []
})
export class AppModule {}
