"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import { Protocol } from "pmtiles"; 

type Props = {
  onSelect: (location: string) => void;
  onClose: () => void;
};

export function MapPicker({ onSelect, onClose }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [center, setCenter] = useState<[number, number]>([
    77.209, 28.6139,
  ]);

  useEffect(() => {
    if (!mapRef.current) return;

    const protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);

    const map = new maplibregl.Map({
      container: mapRef.current,
      style: {
        version: 8,
        glyphs:
          "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
        sources: {
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
            id: "esri",
            type: "raster",
            source: "esri",
          },
        ],
      },
      center,
      zoom: 14,
    });

    // ✅ IMPORTANT FIX: force resize after modal open
    setTimeout(() => {
      map.resize();
    }, 200);

    map.on("move", () => {
      const c = map.getCenter();
      setCenter([c.lng, c.lat]);
    });

    return () => {
      map.remove();
      maplibregl.removeProtocol("pmtiles");
    };
  }, []);

  const confirmLocation = async () => {
    const [lng, lat] = center;

    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
    );

    const data = await res.json();

    onSelect(data.display_name || `${lat}, ${lng}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

      <div className="w-[92%] max-w-3xl rounded-2xl overflow-hidden bg-white shadow-2xl">

        {/* MAP CONTAINER */}
        <div ref={mapRef} className="relative h-[420px] w-full">

          {/* CENTER PIN (ALWAYS VISIBLE) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full text-[#F2B300] text-3xl pointer-events-none z-50">
            📍
          </div>

        </div>

        {/* ACTION BAR */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200">

          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-red-500 hover:text-red-600"
          >
            Cancel
          </button>

          <button
            onClick={confirmLocation}
            className="px-5 py-2 rounded-lg bg-[#F2B300] text-black font-bold shadow-md hover:bg-yellow-400 transition"
          >
            Select Location
          </button>

        </div>

      </div>
    </div>
  );
}