import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ShowCustomerComponent } from './components/show-customer/show-customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddCustomerComponent,
    NavbarComponent,
    SidebarComponent,
    ShowCustomerComponent,
    EditCustomerComponent,
    ContactsComponent,
    PnfComponent,
    ViewCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgbModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
