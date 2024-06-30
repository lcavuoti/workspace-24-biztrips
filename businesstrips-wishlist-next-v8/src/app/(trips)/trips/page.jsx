
import React, { Suspense } from "react";
import ErrorBoundaryLoadingTrip from "@/app/(trips)/trips/error-boundary-loading-trip";
import {getBusinessTrips} from "@/services/trips-service";
import TripDetailLoading from "@/app/(trips)/trips/trip-detail-loading";
import TripDetail from "@/app/(trips)/trips/trip-detail";
import TripDetailWithDate from "@/app/(trips)/trips/trip-detail-with-date";


export default async function Trips() {
  const trips = await getBusinessTrips();
// console.log(trips)
  return (
    <div className="container-main">
      <div className="sessions">
        <ul className="news-list">
          {trips.map((trip) => {
            return (
              <li key={trip.id} className="news-tile">
                <div className="news-tile__top">
                  <h3 className="news-tile__title">{trip?.title}</h3>
                  {trip?.description}
                </div>
                <div className="news-tile__bottom">
                  <ErrorBoundaryLoadingTrip>
                    <Suspense fallback={<TripDetailLoading />}>
                      <TripDetail trip={trip} />
                    </Suspense>
                  </ErrorBoundaryLoadingTrip>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
