import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopNavComponent } from './templates/top-nav/top-nav.component';
import { SideNavComponent } from './templates/side-nav/side-nav.component';
import { MenuWidgetComponent } from './templates/menu-widget/menu-widget.component';
import { TeeSheetComponent } from './pages/tee-sheet/tee-sheet.component';
import { PlayersComponent } from './pages/players/players.component';
import { SearchBarComponent } from './templates/search-bar/search-bar.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { BillingComponent } from './pages/billing/billing.component';
import { MembersComponent } from './pages/members/members.component';
import { EventsComponent } from './pages/events/events.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CommunityComponent } from './pages/community/community.component';
import { TopBarComponent } from './templates/top-bar/top-bar.component';
import { FormsModule }   from '@angular/forms';
import { LoaderComponent } from './templates/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPlayerComponent } from './dialogs/add-player/add-player.component';
import { SuccessComponent } from './snackbars/success/success.component';
import { EditPlayerComponent } from './dialogs/edit-player/edit-player.component';
import { AddEventComponent } from './dialogs/add-event/add-event.component';
import { EditEventComponent } from './dialogs/edit-event/edit-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TopNavComponent,
    SideNavComponent,
    MenuWidgetComponent,
    TeeSheetComponent,
    PlayersComponent,
    SearchBarComponent,
    ReportsComponent,
    BillingComponent,
    MembersComponent,
    EventsComponent,
    SettingsComponent,
    CommunityComponent,
    TopBarComponent,
    LoaderComponent,
    AddPlayerComponent,
    SuccessComponent,
    EditPlayerComponent,
    AddEventComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
