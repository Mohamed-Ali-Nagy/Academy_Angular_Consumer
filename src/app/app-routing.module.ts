import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
 { path: 'Branche', loadChildren: () => import('./Modules/branche/branche.module').then(m => m.BrancheModule) },
 { path: 'Subject', loadChildren: () => import('./Modules/subject/subject.module').then(m => m.SubjectModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
