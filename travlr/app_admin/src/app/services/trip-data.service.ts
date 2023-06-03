import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Trip} from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: Http) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}/trips/`;

  public getTrips() {
    console.log('Inside TripDataService#getTrips');
    return this.http.get(this.tripUrl)
      .toPromise()
      .then(x => x.json() as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode : string) {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(res => res.json() as Trip)
      .catch(this.handleError);
  }

  public addTrip(formData : Trip) : Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    return this.http
      .post(this.tripUrl, formData)
      .toPromise()
      .then(x => x.json() as Trip)
      .catch(this.handleError);
  }

  public updateTrip(formData : Trip) {
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);
    return this.http
      .put(this.tripUrl + formData.code, formData)
      .toPromise()
      .then(res => res.json() as Trip[])
      .catch(this.handleError);
  }

  private handleError(error:any) {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
