import { getStationSchedule } from "@/lib/api";

type Props = {
  params: {
    countryCode: string;
    stationCode: string;
    departureDate: string;
  };
};

export default async function StationPage({ params }: Props) {
  const schedule = await getStationSchedule(
    params.countryCode,
    params.stationCode,
    params.departureDate
  );

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Schedule for {params.stationCode} on {params.departureDate}
      </h1>
      {/* Render the schedule here */}
    </div>
  );
}