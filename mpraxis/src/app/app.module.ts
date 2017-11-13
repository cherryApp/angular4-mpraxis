import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ClubFilterPipe } from './club-filter.pipe';
import { ClubOrderPipe } from './club-order.pipe';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { LigService } from './lig.service';
import { MatchFilterPipe } from './match-filter.pipe';
import { MssqlService } from './mssql.service';
import { ChatService } from './chat.service';

// Material design.
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  DateAdapter,
  NativeDateAdapter,
  MatNativeDateModule,
  MAT_DATE_LOCALE
} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';

// Router configuration.
const appRoutes: Routes = [
  {
    path: "index",
    component: HomeComponent
  },
  {
    path: "meccsek",
    component: MatchComponent
  },
  {
    path: "meccsek/:id",
    component: MatchComponent
  },
  {
    path: "kapcsolat",
    component: ContactComponent
  },
  {
    path: "rolunk",
    component: AboutComponent
  },
  {
    path: "regisztracio",
    component: RegisterComponent
  },
  {
    path: "chat",
    component: ChatComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataTableComponent,
    ClubFilterPipe,
    ClubOrderPipe,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MatchComponent,
    MatchFilterPipe,
    RegisterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LigService,
    MssqlService,
    NativeDateAdapter,
    {provide: MAT_DATE_LOCALE, useValue: 'hu-HU'},
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
