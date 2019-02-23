// rant modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';

// rant component
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common-component/header/header.component";
import { LoaderComponent } from "./common-component/loader/loader.component";
import { LogginComponent } from "./rant-component/shared/loggin/loggin.component";
import { LoginService } from "./rant-service/login.service";
import { StorageService } from "./rant-service/local-storage.service";
import { TokenInterceptor } from "./rant-service/token.interceptor";
import { RantlistComponent } from "./rant-component/rantlist/rantlist.component";
import { RantComponent } from "./rant-component/rant/rant.component";
import { RantService } from "./rant-service/rant.service";




@NgModule({
  declarations: [AppComponent, HeaderComponent, LoaderComponent, LogginComponent, RantlistComponent, RantComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  })],
  providers: [LoginService, StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    RantService],
  bootstrap: [AppComponent]
})
export class AppModule {}
