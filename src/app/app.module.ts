import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppRoutingModule }    from './app-routing.module';
import { AppComponent }        from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent }         from './pages/home/home.component';
import { ListTablesComponent }   from './pages/list-tables/list-tables.component';
import { MainMenuComponent }     from './pages/main-menu/main-menu.component';
import { SidebarComponent }      from './pages/sidebar/sidebar.component';
import { HeaderNavbarComponent } from './pages/header-navbar/header-navbar.component';

import { AngularFireModule }                        from '@angular/fire';
import { environment }                              from '../environments/environment';
import { AngularFireAuth }                          from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { PageComponent }                            from './pages/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListTablesComponent,
    MainMenuComponent,
    SidebarComponent,
    HeaderNavbarComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
