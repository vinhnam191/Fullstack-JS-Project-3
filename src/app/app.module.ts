import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemModule } from './modules/item/item.module';
import { ItemListModule } from './modules/item-list/item-list.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/commom.service';
import { CommonModule } from '@angular/common';
import { ItemDetailModule } from './modules/item-detail/item-detail.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ItemListModule,
    ItemModule,
    ItemDetailModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
