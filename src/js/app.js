export default function getSortedUnits(units) {
  units.sort((a, b) => b.health - a.health);
  return units;
}
