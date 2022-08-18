import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherAllFieldsPipe } from './pipes/searcher-all-fields.pipe';
import { SearcherPipe } from './pipes/searcher.pipe';



@NgModule({
  declarations: [SearcherAllFieldsPipe, SearcherPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
