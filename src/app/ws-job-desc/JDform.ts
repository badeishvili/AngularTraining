import {FormControl} from '@angular/forms';

export interface JobDescForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  age : FormControl<number>;
  country: FormControl<string>;
}
