import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { Observable, catchError, of, map } from 'rxjs';
import { Result } from '../interfaces/result.interface';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  result: any = [];
  title = 'Pesquisa';
  form : FormGroup;

  constructor(private formBuilder: FormBuilder, private searchService: SearchService) {

    this.form = this.formBuilder.group({
      search: [null]
    });
   }

  onSubmit() {
    this.result = this.searchService.get(this.form.value.search).subscribe((data: any) => {
      this.result = data;
    });
    this.form.reset();
  }
}
