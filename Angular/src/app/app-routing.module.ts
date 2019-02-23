import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { RantdetailComponent } from './rant-component/rantdetail/rantdetail.component';
import { RantComponent } from './rant-component/rant/rant.component';
import { RantlistComponent } from './rant-component/rantlist/rantlist.component';

const routes: Routes = [
  {path: '', component: RantlistComponent},
  {path: 'rant', component: RantdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
