import {FormControl} from '@angular/forms';

export interface RegForm {
  username: FormControl<string>;
  lastname: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmpassword: FormControl<string>;
}
