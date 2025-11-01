export interface Station {
  id: number;
  feed_id: string;
  station: string;
  name: string;
  type: string;
  is_hidden: boolean;
  commercial_code: string;
  coordinates: [number, number];
  country_code: string;
  primary_code: number;
  timezone: string;
  parent_station_id: number | null;
  km_m: string;
  moh: string | null;
}

export interface StationSchedule {
  departure_date: string;
  train_number: number;
  train_type: string;
  line_no: string;
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  company: string;
  arrival: string | null;
  estimated_arrival: string | null;
  actual_arrival: string | null;
  cancelled_arrival: boolean | null;
  departure: string | null;
  estimated_departure: string | null;
  actual_departure: string | null;
  cancelled_departure: boolean;
  platform: string;
}

export interface Train {
  departure_date: string;
  train_number: number;
  train_type: string;
  line_no: string | null;
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  company: string;
  cancelled: boolean;
}

export interface TrainSchedule {
  station: string;
  name: string;
  arrival: string | null;
  estimated_arrival: string | null;
  actual_arrival: string | null;
  cancelled_arrival: boolean | null;
  departure: string | null;
  estimated_departure: string | null;
  actual_departure: string | null;
  cancelled_departure: boolean;
  platform: string | null;
  commercial_stop: boolean;
  coordinates: [number, number];
}

export interface Vehicle {
  vehicle_type: string;
  vehicle_number: string;
  sales_number: string | null;
  location: number;
}

export interface Group {
  group_id: null;
  vehicles: Vehicle[];
}

export interface Allocation {
  departure_date: string;
  train_number: number;
  begin_station_short_code: string;
  end_station_short_code: string;
  total_length: number;
  maximum_speed: number;
  groups: Group[];
}

export interface MapFeature {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    ts: number;
    be: number;
    sp: number;
    ve: string;
    ro: string;
    sd: string;
    rt: number;
    fe: string;
  };
}

export interface MapData {
  type: "FeatureCollection";
  features: MapFeature[];
}