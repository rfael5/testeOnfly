import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CardHotelComponent } from './home/card-hotel/card-hotel.component';
import { CarrosselComponent } from './home/card-hotel/carrossel/carrossel.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetalhesHotelComponent } from './home/card-hotel/detalhes-hotel/detalhes-hotel.component';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';



registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardHotelComponent,
    CarrosselComponent,
    DetalhesHotelComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    NzPageHeaderModule,
    NzImageModule,
    NzCardModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzAutocompleteModule,
    NzGridModule,
    NzIconModule,
    NzDropDownModule,
    NzSelectModule,
    NzDrawerModule,
    NzSpaceModule,
    NzDividerModule,
    NzSpinModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
