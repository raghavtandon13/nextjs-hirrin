const locationMap: Record<string, string> = {
  D: "Delhi",
  M: "Mumbai",
  K: "Kolkata",
  C: "Chennai",
  B: "Bangalore",
  H: "Hyderabad",
  P: "Pune",
  A: "Ahmedabad",
  J: "Jaipur",
  L: "Lucknow",
};
export function decodeLocations({ encodedString }: { encodedString: string }) {
  if (!encodedString || encodedString === "") {
    return [];
  }
  const decodedLocations = [];
  for (const char of encodedString) {
    const location = locationMap[char];
    if (location) {
      decodedLocations.push(location);
    }
  }
  return decodedLocations;
}
