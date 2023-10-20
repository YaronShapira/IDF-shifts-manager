export type TShift = {
  startTime: number;
  endTime: number;
  people: string[];
};

export type TGroup = {
  people: string[];
};

export type TMission = {
  hoursPerShift: number;
  shifts: TShift[];
  group: TGroup;
};
