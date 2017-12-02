import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';



import {CampanhaComponent} from './campanha.component';
import {CategoriasCampanhaComponent} from './categorias-campanha/categorias-campanha.component';
import {FormEquipeComponent} from './form-equipe/form-equipe.component';
import {FormRecompensaComponent} from './form-recompensa/form-recompensa.component';
import {InputImpactoComponent} from './input-impacto/input-impacto.component';
import { ImagePreviewComponent } from './image-preview.directive';
import { FileUploadModule } from 'ng2-file-upload';


const ROUTES: Routes = [
  { path: '', component: CampanhaComponent }
];


@NgModule({
  declarations: [CampanhaComponent, CategoriasCampanhaComponent,
                 FormEquipeComponent, FormRecompensaComponent,
                 InputImpactoComponent, ImagePreviewComponent],
  imports: [FileUploadModule, SharedModule, RouterModule.forChild(ROUTES)],
})


export class CampanhaModule {}
