import { Component, OnInit } from "@angular/core";
import { trips } from "../data/trips";
import { Trip } from "../models/trip";
import { TripDataService } from "../services/trip-data.service";

@Component({
  selector: "app-trip-listing",
  templateUrl: "./trip-listing.component.html",
  styleUrls: ["./trip-listing.component.css"],
})
export class TripListingComponent implements OnInit {
  constructor(private tripDataService: TripDataService) {}

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

  ngOnInit() {
    this.getTrips();
  }
}
