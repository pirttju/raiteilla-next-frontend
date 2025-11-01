import { getStations } from "@/lib/api";

export default async function StationsPage() {
  const stations = await getStations("fi"); // Default to Finland

  return (
    <div>
      <h1 className="text-2xl font-bold">All Stations</h1>
      {/* Render the list of stations here */}
    </div>
  );
}