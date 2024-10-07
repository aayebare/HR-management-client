import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private apiUrl = environment.apiUrl;;

  private staffSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  staff$: Observable<any[]> = this.staffSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Fetch all staff members and update the BehaviorSubject
  fetchAllStaff(): void {
    this.http
      .get<any[]>(this.apiUrl)
      .pipe(catchError(this.handleError))
      .subscribe((staff) => this.staffSubject.next(staff)); // Emit new staff list
  }

  registerStaff(formData: FormData): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/register`, formData)
      .pipe(
        tap(() => this.fetchAllStaff()),
        catchError(this.handleError)
      );
  }

  // Retrieve a specific staff member or all staff members
  getStaff(employeeNumber?: string): Observable<any> {
    let url = this.apiUrl;
    if (employeeNumber) {
      url = `${this.apiUrl}/${employeeNumber}`;
    }
    return this.http.get<any>(url).pipe(catchError(this.handleError));
  }

  // Update staff details and update the BehaviorSubject upon success
  updateStaff(employeeNumber: any, formData: FormData): Observable<any> {
    return this.http
      .put<any>(`${this.apiUrl}/${employeeNumber}`, formData)
      .pipe(
        tap(() => this.fetchAllStaff()),
        catchError(this.handleError)
      );
  }

  // Handle errors
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw new Error('Something went wrong, please try again later.');
  }
}
