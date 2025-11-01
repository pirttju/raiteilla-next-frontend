import { getTrainSchedule } from "@/lib/api";

type Props = {
  params: {
    countryCode: string;
    trainNumber: number;
    departureDate: string;
  };
};

export default async function TrainPage({ params }: Props) {
  const schedule = await getTrainSchedule(
    params.countryCode,
    params.trainNumber,
    params.departureDate
  );

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Schedule for Train {params.trainNumber} on {params.departureDate}
      </h1>
      {/* Render the train schedule here */}
    </div>
  );
}