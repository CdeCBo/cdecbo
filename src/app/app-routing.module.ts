import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoundationComponent } from './content/foundation/foundation.component';
import { FaqComponent } from './content/faq/faq.component';
import { CdecboComponent } from './content/events/cdecbo.component';
import { ApplyComponent } from './content/apply/apply.component';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: FoundationComponent },
{path: 'faq', component: FaqComponent },
{path: 'cdecbo', component: CdecboComponent },
{path: 'netbo', component: FaqComponent },
{path: 'hackbo', component: FaqComponent },
{path: 'apply', component: ApplyComponent },
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
