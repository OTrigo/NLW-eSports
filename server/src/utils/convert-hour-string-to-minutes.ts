// 18:00 -> ["18", "00"] ->  [18, 00]

export function convertHourStringToMinutes(hourString: string) {
  console.log(typeof hourString);
  const [hours, minutes] = hourString.split(":").map(Number);

  const minutesAmount = hours * 60 + minutes;

  return minutesAmount;
}