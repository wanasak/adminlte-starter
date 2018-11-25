import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { LayoutLeftSideComponent } from './layout-left-side/layout-left-side.component';
import { LayoutContentComponent } from './layout-content/layout-content.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutControlSidebarComponent } from './layout-control-sidebar/layout-control-sidebar.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutLeftSideComponent,
    LayoutContentComponent,
    LayoutControlSidebarComponent
  ],
  declarations: [
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutLeftSideComponent,
    LayoutContentComponent,
    LayoutControlSidebarComponent
  ]
})
export class LayoutModule {}
