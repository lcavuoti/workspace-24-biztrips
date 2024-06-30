import {getBusinessTrip} from "@/services/trips-service";
import TripDetailWithDate from "@/app/(trips)/trips/trip-detail-with-date";
import TripDetail from "@/app/(trips)/trips/trip-detail";



export default async function TripDetailById({params}) {
    const trip = await getBusinessTrip(params.tripId);

    return (
        <div className="container-main speakers">
            <div className="row">
                <div className="col-12 speakers-list-item p-2">
                    <TripDetailWithDate trip={trip}/>
                    {/*<TripDetail trip={trip}/>*/}
                </div>
            </div>
        </div>
    );
}
