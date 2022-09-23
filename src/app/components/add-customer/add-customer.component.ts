import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  constructor(private cs: CustomersService) {}

  customer: Customer = {
    firstName: '',
    lastName: '',
    phone: 0,
    email: '',
    hobby: '',
    address: '',
  };

  ngOnInit(): void {}

  onSubmit() {
    this.cs
      .addCustomer(this.customer)
      .then(() => {
        alert('Customer added successfully');
        this.reset();
      })
      .catch((err) => console.log(err));
  }

  reset(): void {
    this.customer = {
      firstName: '',
      lastName: '',
      phone: 0,
      email: '',
      hobby: '',
      address: '',
    };
  }
}
