import { Routes } from '@angular/router';
import { TrackerhomeComponent } from './component/trackerhome/trackerhome.component';
import { EditComponent } from './component/edit/edit.component';

export const routes: Routes = [
    {
        path:'',
        component:TrackerhomeComponent
    },
    {
        path:'edit/:id',
        component:EditComponent
    }
];
