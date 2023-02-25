import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './container/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavRightComponent } from './components/sidenav-right/sidenav-right.component';
import { SidenavLeftComponent } from './components/sidenav-left/sidenav-left.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from "@app-shared/modules/shared.module";


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavRightComponent,
    SidenavLeftComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
  ],
  exports: [SharedModule]
})
export class LayoutModule {
}
