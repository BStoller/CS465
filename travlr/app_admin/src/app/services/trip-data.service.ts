import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Trip} from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: Http) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getTrips() {
    console.log('Inside TripDataService#getTrips');
    return this.http.get(`${this.apiBaseUrl}trips`)
      .toPromise()
      .then(x => x.json() as Trip[])
      .catch(this.handleError);
  }

  public addTrip(formData : Trip) : Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    return this.http
      .post(`${this.apiBaseUrl}trips`, formData)
      .toPromise()
      .then(x => x.json() as Trip)
      .catch(this.handleError);
  }

  private handleError(error:any) {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
