import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoundationComponent } from './content/foundation/foundation.component';
import { FaqComponent } from './content/faq/faq.component';
import { CdecboComponent } from './content/events/cdecbo.component';
import { ApplyComponent } from './content/apply/apply.component';
import {HackboHomeComponent} from './hackbo/pages/hackbo-home/hackbo-home.component';
import {CdecboHomeComponent} from './cdecbo/pages/cdecbo-home/cdecbo-home.component';
import {SimposiumHomeComponent} from './simposium/pages/simposium-home/simposium-home.component';

const routes: Routes = [
{path: 'home', redirectTo: '', pathMatch: 'full'},
{path: '', component: FoundationComponent },
{path: 'faq', component: FaqComponent },
  { path: 'hackbo', component: HackboHomeComponent },
  { path: 'cdecbo', component: CdecboHomeComponent },
  { path: 'simposium', component: SimposiumHomeComponent },
{path: '**', component: FoundationComponent},
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
