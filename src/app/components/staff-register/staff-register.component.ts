import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-staff-register',
  templateUrl: './staff-register.component.html',
  styleUrls: ['./staff-register.component.css'],
})
export class StaffRegisterComponent {
  staffData: any = {};
  message: string | null = null;
  selectedFile: File | null = null;
  success: boolean = false;
  employeeNumber: string | null = null;

  constructor(private staffService: StaffService, private router: Router) {}

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  // Register staff
  registerStaff(): void {
    const formData = new FormData();
    formData.append('surname', this.staffData.surname);
    formData.append('otherNames', this.staffData.otherNames);
    formData.append('dob', this.staffData.dob);
    if (this.selectedFile) {
      formData.append('idPhoto', this.selectedFile, this.selectedFile.name);
    }
    formData.append('authCode', this.staffData.authCode);

    this.staffService.registerStaff(formData).subscribe({
      next: (response) => {
        this.employeeNumber = response.employeeNumber;
        this.success = true;
        this.message = `Staff registered successfully! Employee Number: ${this.employeeNumber}`;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);
      },
      error: (err) => {
        this.message = 'Registration failed.';
        this.success = false;
        console.error(err);
      },
    });
  }
}
