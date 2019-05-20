
export function calcWindParts(windInKph: number): any {

  let windInKnots = windInKph / 1.852;

  let triangles = Math.floor(windInKnots / 50);
  windInKnots -= triangles * 50;

  let largeDashes = Math.floor(windInKnots / 10);
  windInKnots -= largeDashes * 10;

  let smallDashes = Math.floor(windInKnots / 5);

  return {
    triangles,
    largeDashes,
    smallDashes,
    symbols: (triangles + largeDashes + smallDashes)
  };
}

export function calcGradient(upper: any, lower: any) {
  return Math.round(100 * 100 * (lower.temperature - upper.temperature) / (upper.alt - lower.alt)) / 100;;
}
