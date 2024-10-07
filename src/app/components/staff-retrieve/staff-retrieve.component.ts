import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff.service';

declare var bootstrap: any; // Declare bootstrap to avoid TypeScript errors

@Component({
  selector: 'app-staff-retrieve',
  templateUrl: './staff-retrieve.component.html',
  styleUrls: ['./staff-retrieve.component.css'],
})
export class StaffRetrieveComponent implements OnInit {
  staffMembers: any[] = [];
  employeeNumber: string = '';
  message: string = '';
  selectedStaff: any = {};
  success: boolean = false;

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    this.staffService.staff$.subscribe((staff) => {
      this.staffMembers = staff;
    });
    this.staffService.fetchAllStaff();
  }

  openEditModal(staff: any): void {
    this.selectedStaff = { ...staff };
    const modal = new bootstrap.Modal(
      document.getElementById('editStaffModal')
    );
    modal.show();
  }


  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedStaff.idPhoto = input.files[0];
    }
  }

  // search for a specific staff member
  searchStaff(): void {
    if (this.employeeNumber) {
      this.staffService.getStaff(this.employeeNumber).subscribe(
        (data) => {
          this.staffMembers = [data];
          this.message = '';
        },
        (error) => {
          this.message = 'Error retrieving staff member';
          console.error(error);
        }
      );
    } else {
      this.staffService.fetchAllStaff();
    }
  }

  // Update staff information
  updateStaff(): void {
    const formData = new FormData();
    formData.append('dob', this.selectedStaff.dob);
    if (this.selectedStaff) {
      formData.append(
        'idPhoto',
        this.selectedStaff.idPhoto,
        this.selectedStaff.idPhoto.name
      ); 
    }
    this.staffService
      .updateStaff(this.selectedStaff.employeeNumber, formData)
      .subscribe(
        (response) => {
          this.message = 'Update successful!';
          this.success = true;
          this.selectedStaff = {};

          // Clear any previous messages after 5 seconds
          setTimeout(() => {
            this.message = '';
            this.success = false;
          }, 5000);
        },
        (error) => {
          console.error('Update failed:', error);
          this.message = 'Update failed. Please try again.';
          this.success = false;
        }
      );
  }
}
