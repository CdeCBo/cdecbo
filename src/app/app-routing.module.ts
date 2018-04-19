import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoundationComponent } from './content/foundation/foundation.component';
import { FaqComponent } from './content/faq/faq.component';
import { CdecboComponent } from './content/events/cdecbo.component';
import { ApplyComponent } from './content/apply/apply.component';

const routes: Routes = [
{path: 'home', redirectTo: '', pathMatch: 'full'},
{path: '', component: FoundationComponent },
{path: 'faq', component: FaqComponent },
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
