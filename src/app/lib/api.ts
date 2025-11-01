import {
  Station,
  StationSchedule,
  Train,
  TrainSchedule,
  Allocation,
  MapData,
} from "@/types";

const API_BASE_URL = "https://raiteilla.fi/api/v1";
const BETA_API_BASE_URL = "https://beta.raiteilla.fi/api";

export async function getStations(countryCode: string): Promise<Station[]> {
  const res = await fetch(`${API_BASE_URL}/stations/${countryCode}`);
  const data = await res.json();
  return data.data;
}

export async function getStationSchedule(
  countryCode: string,
  stationCode: string,
  departureDate: string
): Promise<StationSchedule[]> {
  const res = await fetch(
    `${API_BASE_URL}/stations/${countryCode}/${stationCode}/${departureDate}`
  );
  const data = await res.json();
  return data.data;
}

export async function getTrains(
  countryCode: string,
  departureDate: string
): Promise<Train[]> {
  const res = await fetch(
    `${API_BASE_URL}/trains/${countryCode}/${departureDate}`
  );
  const data = await res.json();
  return data.data;
}

export async function getTrainSchedule(
  countryCode: string,
  trainNumber: number,
  departureDate: string
): Promise<TrainSchedule[]> {
  const res = await fetch(
    `${API_BASE_URL}/trains/${countryCode}/${departureDate}/${trainNumber}`
  );
  const data = await res.json();
  return data.data;
}

export async function getAllocations(
  countryCode: string,
  trainNumber: number,
  departureDate: string
): Promise<Allocation[]> {
  const res = await fetch(
    `${API_BASE_URL}/allocations/${countryCode}/${departureDate}/${trainNumber}`
  );
  const data = await res.json();
  return data.data;
}

export async function getVehicleLocations(bbox: string): Promise<MapData> {
  const res = await fetch(`${BETA_API_BASE_URL}/vehicles?routeType=2&bbox=${bbox}`);
  const data = await res.json();
  return data;
}