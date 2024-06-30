export async function getBusinessTrips() {
  const response = await fetch("http://localhost:8080/v1/trips");
  if (response.ok) return response.json();
  throw response;
}

export async function getBusinessTrip(id) {
    const response = await fetch(`http://localhost:8080/v1/trips/${id}`);
    // throw new Error("Not implemented")
    if (response.ok) return response.json();
    throw response;
}

export async function saveBusinessTrip(trip) {
  const response = await fetch("http://localhost:8080/v1/trips", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trip),
  });
  if (response.ok) return response.json();
  throw response;
}
export async function getWishlistItems() {
  // fetch wishlists from api
  const response = await fetch("http://localhost:8080/v1/trips");
  if (response.ok) return response.json();
  throw response;
}
