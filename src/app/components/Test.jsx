"use client";
import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    // Load the Google Maps script dynamically
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => initAutocomplete();
      document.body.appendChild(script);
    };

    const initAutocomplete = () => {
      const input = document.getElementById("locationInput");

      // Initialize the Google Places Autocomplete
      const autocomplete = new google.maps.places.Autocomplete(input, {
        types: ["(cities)"], // Restrict to cities
        componentRestrictions: { country: "SN" }, // Restrict to Senegal
      });

      // Optional: Handle place selection
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          console.log(
            "No details available for the input: '" + place.name + "'"
          );
          return;
        }

        console.log("Selected place:", place.name);
      });
    };

    loadGoogleMapsScript();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm mx-auto">
        <label
          htmlFor="locationInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Enter a city or place in Senegal:
        </label>
        <input
          id="locationInput"
          type="text"
          placeholder="Search for a city or place..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
