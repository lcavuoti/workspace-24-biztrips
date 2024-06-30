import Image from "next/image";

import "server-only";


import Link from "next/link";
import {getBusinessTrip} from "@/services/trips-service";
import ToolTipTrip from "@/app/common/tool-tip-trip";



export default function TripDetail({trip}) {
  console.log(trip);
  return (
      <ToolTipTrip trip={trip} key={trip.id} >
        <div className="col-12-col-sm-6 speakers-list-item">
          <div className="events-speaker d-flex align-items-center">
            <div className="events-speaker-photo">
              <Image
                  src={`/images/items/${trip?.id}.jpg`}
                  alt={trip.description}
                  width={135}
                  height={135}
              />
            </div>
            <div className="events-speaker-description">
              <Link href={`/trips/${trip.id}`}>
                <div className="name">
                  {trip.title}
                </div>
              </Link>
            </div>
          </div>
        </div>
        </ ToolTipTrip  >
  );
}
