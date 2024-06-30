
import Link from "next/link";
import {getBusinessTrips} from "@/services/trips-service";
import Image from "next/image";

export default async function TripLines() {
  const trips = await getBusinessTrips();
  return (
    <>
      {trips.map((trip) => {
        return (
          <div
            className="col-12 p-3 border rounded shadow-sm bg-light"
            key={trip.id}
          >
            <div className="row">
              <div className="col-sm">
                {trip?.title}
                {trip?.id}
              </div>
              <div className="col-sm">
                <Image
                    src={`/images/items/${trip?.id}.jpg`}
                    alt={`${trip.first} ${trip.last}`}
                    width={70}
                    height={70}
                />
              </div>
              <div className="col-sm">
                <Link href={`/trips/${trip.id}`}>Trip</Link>
              </div>

            </div>
          </div>
        );
      })}
    </>
  );
}
