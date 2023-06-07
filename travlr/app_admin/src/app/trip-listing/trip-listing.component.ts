import { Component, OnInit } from "@angular/core";
import { trips } from "../data/trips";
import { Trip } from "../models/trip";
import { TripDataService } from "../services/trip-data.service";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-trip-listing",
  templateUrl: "./trip-listing.component.html",
  styleUrls: ["./trip-listing.component.css"],
})
export class TripListingComponent implements OnInit {
  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }
  trips: Trip[];

  message: string;

  private getTrips() {
    console.log("Inside TripListingComponent#getTrips");
    this.message = "Searching for trips";
    this.tripDataService.getTrips().then((trips) => {
      this.message = trips.length > 0 ? "" : "No trips found";
      this.trips = trips;
    });
  }

  addTrip() {
    this.router.navigate(["add-trip"]);
  }

  ngOnInit() {
    this.getTrips();
  }
}
