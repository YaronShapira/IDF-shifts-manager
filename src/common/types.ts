export type TShift = {
  startTime: number;
  endTime?: number;
  people: string[];
};

export type TMission = {
  name: string;
  hoursPerShift: number;
  people: string[];
  shifts: TShift[];
};

export type TMissionFormData = {
  name: string;
  hoursPerShift: number;
  people: string;
};
