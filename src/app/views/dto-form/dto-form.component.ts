import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {PaymentService} from "../../core/services/payment.service";
import {DTO_Model} from "../../shared/models/dto.model"
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as DTO_Actions from '../../core/actions/add-data.action';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-dto-form',
  templateUrl: './dto-form.component.html',
  styleUrls: ['./dto-form.component.scss']
})
export class DtoFormComponent implements OnInit {
  // Initialize form page Variables
  DTO_form:FormGroup;
  resp:any;
  messageSuccess: boolean =true;
  errorMessage: any;

  // Create form page Constructor
  constructor(private _fb:FormBuilder, private paymentservice: PaymentService, private store: Store<AppState>, private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // Initialize Reactive form Fields
    this.DTO_form = this._fb.group({
      first_name: [null, [Validators.required]],
      last_name: [null,  [Validators.required]],
      email: [null,  [Validators.required]],
      countryCode:[null,  [Validators.required]],
      budget: [null,  [Validators.required]],
      phone: [null,  [Validators.required]],
    })
  }

  // Function to send DTO data to Backend and Store
  sendDTOdata(meta:DTO_Model) { 
    if(!this.DTO_form.valid){ 
      // Validate each field and give error message where needed  
      let obj = this.DTO_form.value;
      for (let key in obj) {    
        let value = obj[key];
        if (value == "" || value==null || value==undefined) {
          this.toastr.error('Error',`Please Fill the field for ${key}`)
          return
        }
      }
    } else {    
      meta =  this.DTO_form.value;
      // Send data to ngrx store 
      this.store.dispatch(new DTO_Actions.AddDTO(meta));
      // Send data to API using Payment Service 
      this.spinner.show();
      this.paymentservice.messageToAdmin(meta) 
      .subscribe( data => {
          this.resp = data['message'];
          this.messageSuccess = false;
          this.spinner.hide();
          this.toastr.success('200 OK',`Form sent Successfully`)      
        },
        // Give Error Message returned from backend
        (err) => {
          this.errorMessage = <any>err.error.message; 
          this.spinner.hide();
          this.toastr.error('Error',`${JSON.stringify(this.errorMessage)}`)
        }
      );
    }
  }

  reloadSendData(){
    location.reload();
  }

}
