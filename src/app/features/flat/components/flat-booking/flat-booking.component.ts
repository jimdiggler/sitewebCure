import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LodgerService } from '../../services/lodger.service';

@Component({
  selector: 'app-flat-booking',
  templateUrl: './flat-booking.component.html',
  styleUrls: ['./flat-booking.component.scss'],
})
export class FlatBookingComponent implements OnInit {
  //----------------------------------------------------------------------------------------
  // ATTRIBUTES
  //----------------------------------------------------------------------------------------
  submitted: boolean = false; // Know if the form has been submit
  today = new Date();
  blob!: Blob;
  contactForm!: FormGroup;

  //----------------------------------------------------------------------------------------
  // CONSTRUCTOR
  //----------------------------------------------------------------------------------------
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private lodgerService: LodgerService,
    private router: Router,
    private dialogRef: MatDialogRef<FlatBookingComponent>
  ) {} // Inject data from method openDialog()

  //----------------------------------------------------------------------------------------
  // LIFECYCLE
  //----------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      id: [null],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      lastName1: ['', Validators.required],
      firstName1: ['', Validators.required],
      phoneNumber1: ['', Validators.required],
      email1: ['', [Validators.required, Validators.email, Validators.pattern]],
      dateOfBirth1: ['', Validators.required],
      address1: ['', Validators.required],
      zipCode1: ['', Validators.required],
      location1: ['', Validators.required],
      lastName2: [''],
      firstName2: [''],
      phoneNumber2: [''],
      email2: [''],
      dateOfBirth2: [''],
      address2: [''],
      zipCode2: [''],
      location2: [''],
      flatId: [this.data.id, Validators.required],
    });
  }

  //----------------------------------------------------------------------------------------
  // METHODS
  //----------------------------------------------------------------------------------------
  // convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    } else {
      //Save the form in dataBase / call the pdf with the new lodger's id / Blob response type for pdf
      this.lodgerService.addLodger(this.contactForm.value).subscribe((v) => {
        console.log(v.id);
        this.lodgerService.getPdf(v.id).subscribe((data) => {
          this.blob = new Blob([data], { type: 'application.pdf' });
          var downloadURL = window.URL.createObjectURL(data);
          var link = document.createElement('a');
          link.href = downloadURL;
          link.download = 'Contrat-Location.pdf';
          link.click();
        });
      });
      this.router.navigate(['/']);
      this.dialogRef.close();
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
