import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoundationComponent } from './content/foundation/foundation.component';
import { FaqComponent } from './content/faq/faq.component';

import {HackboHomeComponent} from './content/hackbo/hackbo-home.component';
import {CdecboHomeComponent} from './content/cdecbo/cdecbo-home.component';
import {SimposiumHomeComponent} from './content/simposium/simposium-home.component';

import { TestimonialsComponent } from './content/testimonials/testimonials.component';

const routes: Routes = [
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'testimonios', component: TestimonialsComponent},
  {path: '', component: FoundationComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'hackbo', component: HackboHomeComponent},
  {path: 'cdecbo', component: CdecboHomeComponent},
  {path: 'cdecbo/:id', component: CdecboHomeComponent},
  // {path: 'simposium', component: SimposiumHomeComponent},
  {path: '**', component: FoundationComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


}
