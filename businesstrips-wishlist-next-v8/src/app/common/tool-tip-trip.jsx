"use client";
import { useState } from "react";


export default function ToolTipTrip({children,trip,}) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="position-relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="tooltip show bs-tooltip-top" role="tooltip">
          <div className="tooltip-arrow"></div>
          <div className="tooltip-inner">
            <h4 className="mt-2">
              {trip.title}
              {/*{trip.startTrip.toString()} {trip.endTrip.toString()}*/}
            </h4>
            <hr />
            <p>{trip.bio?.slice(0, 150)}...</p>
          </div>
        </div>
      )}
    </div>
  );
}
