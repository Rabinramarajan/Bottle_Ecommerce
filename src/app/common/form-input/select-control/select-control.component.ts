import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NgControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { FromInputControl } from '../form-input-control';

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.scss'],
})
export class SelectControlComponent extends FromInputControl implements OnInit {
  // @Input() public items = [];
  @Input() public key: string = '';
  @Input() public keyname: string = '';
  @Input() public placeholderLabel: string = '';
  @Input() public sort: boolean = true;
  itemsNow = [];
  @Input()
  set items(items: any) {
    this.itemsNow = items || [];
    //console.log(items);
    if (items) {
      if (items.length > 5) {
        this.search = true;
      }
    }
  }
  get items() {
    return this.itemsNow;
  }

  searchItem = '';
  constructor(
    @Self() @Optional() public control: NgControl,
    private cdf: ChangeDetectorRef
  ) {
    super();
    this.control && (this.control.valueAccessor = this);

    // this.control && (this.control.valueAccessor = this);
  }

  ngOnInit(): void {
    this.setValidate(this.control);
    // console.log(this.search);
    this.cdf.detectChanges();
  }
}
