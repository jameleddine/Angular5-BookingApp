import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppMaterialModule} from './app-material/app-material.module'
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; //in webservice case
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ContentComponent } from './home/content/content.component';
import { InscriptionComponent } from './home/content/inscription/inscription.component';
import { FooterComponent } from './home/footer/footer.component';
import { MydirectiveDirective } from './mydirective.directive';
import { AppPipePipe } from './app-pipe.pipe';
import { LoginComponent } from './home/login/login.component';
import { DashboardComponent } from './home/content/dashboard/dashboard.component';
import { HotelsComponent } from './home/content/hotels/hotels.component';
import { ReservationComponent } from './home/content/reservation/reservation.component';
import { PayementComponent } from './home/content/reservation/payement/payement.component';


const appRoutes: Routes = [
 // { path: '', component: DashboardComponent },
 {path: '', redirectTo: '/dashboard' , pathMatch: 'full'}, 
 { path: 'dashboard', component: DashboardComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },  
  { path: 'hotel/:id',      component: HotelsComponent },
  { path: 'reservation', component: ReservationComponent  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    InscriptionComponent,
    FooterComponent,
    MydirectiveDirective,
    AppPipePipe,
    LoginComponent,
    DashboardComponent,
    HotelsComponent,
    ReservationComponent,
    PayementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    ReactiveFormsModule,
    HttpModule,
    TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
