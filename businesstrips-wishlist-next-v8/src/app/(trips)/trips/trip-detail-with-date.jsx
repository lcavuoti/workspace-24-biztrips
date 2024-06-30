import Image from "next/image";
import Link from "next/link";

export default function TripDetailWithDate({trip}) {
    return (
        <div className="events-speaker d-flex align-items-center">
            <div className="events-speaker-photo">
                <Image
                    src={`/images/items/${trip.id}.jpg`}
                    alt={`${trip.startTrip} ${trip.endTrip}`}
                    width={135}
                    height={135}
                />
            </div>
            <div className="events-speaker-description">
                <div className="description">
                    {trip.startTrip.toString()} {trip.endTrip.toString()}
                </div>
                {/*<div className="bio">{trip.description}</div>*/}
            </div>
            <div className={""}>
                {trip.meetings.map((meeting) => {
                        return (
                            <div className="name" key={meeting.id}>
                                {meeting.title}{meeting.description}
                            </div>
                        );
                    }
                )}
            </div>

        </div>
    );
}
