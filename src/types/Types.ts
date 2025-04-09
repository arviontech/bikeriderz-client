export type TBike = {
  _id: string;
  name: string;
  image: string[];
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  mileage: number;
  topSpeed: number;
  power: number;
  tyreType: string;
  year: number;
  model: string;
  brand: string;
  madeIn: string;
  engineType: string;
  fuelSupply: string;
  engineCooling: string;
  noOfCylinders: number;
  startingMethod: string;
  fuelTankCapacity: number;
  brakeType: string;
  abs: string;
  batteryType: string;
  batteryVoltage: string;
  headLamp: string;
  indicator: string;
};

export const USER_Role = {
  admin: "admin",
  user: "user",
} as const;

export type Tuser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: keyof typeof USER_Role;
  phone: string;
  address: string;
};

export type TBooking = {
  _id: string;
  userId: Tuser;
  bikeId: TBike;
  startTime: string;
  returnTime: string;
  totalCost: number;
  isReturned: boolean;
  isPaid: boolean;
  advancedPayment: number;
};
