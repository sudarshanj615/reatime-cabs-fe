"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import { Protocol } from "pmtiles";

export default function Map() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);

    // CREATE MAP
    const map = new maplibregl.Map({
      container: mapRef.current,

      style: {
        version: 8,

        glyphs:
          "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",

        sources: {
          india: {
            type: "vector",
            url: `pmtiles://${process.env.NEXT_PUBLIC_PMTILES_URL}`,
          },

          esri: {
            type: "raster",
            tiles: [
              "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            ],
            tileSize: 256,
          },
        },

        layers: [
          {
            id: "esri-layer",
            type: "raster",
            source: "esri",
          },
        ],
      },

      center: [77.209, 28.6139], // fallback (Delhi)
      zoom: 3,

      minZoom: 3,
      maxZoom: 18,
    });

    // NAVIGATION CONTROLS
    map.addControl(new maplibregl.NavigationControl());

    // USER MARKER
    let userMarker: maplibregl.Marker | null = null;

    // WATCH USER LOCATION LIVE
    let watchId: number | null = null;

    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const lng = position.coords.longitude;
          const lat = position.coords.latitude;

          // SMOOTHLY MOVE MAP
          map.flyTo({
            center: [lng, lat],
            zoom: 15,
            speed: 1.2,
          });

          // CREATE MARKER FIRST TIME
          if (!userMarker) {
            userMarker = new maplibregl.Marker({
              color: "#F2B300",
            })
              .setLngLat([lng, lat])
              .addTo(map);
          } else {
            // UPDATE MARKER POSITION
            userMarker.setLngLat([lng, lat]);
          }
        },

        (error) => {
           console.error("Geolocation error code:", error.code);
           console.error("Geolocation error message:", error.message);
        },

        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 10000,
        }
      );
    }

    // CLEANUP
    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }

      map.remove();
      maplibregl.removeProtocol("pmtiles");
    };
  }, []);

  return (
    <div ref={mapRef} className="h-[500px] w-full overflow-hidden rounded-2xl" />
  );
}
