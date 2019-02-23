// rant modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from './/app-routing.module';

// rant component
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common-component/header/header.component";
import { LoaderComponent } from "./common-component/loader/loader.component";



@NgModule({
  declarations: [AppComponent, HeaderComponent, LoaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
