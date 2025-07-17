const leagueLevels = {'Italy': [{'name': 'Serie A', 'value': 5, 'type': 'Pro'}, {'name': 'Serie B', 'value': 4.5, 'type': 'Pro'}, {'name': 'Serie C', 'value': 4, 'type': 'Pro'}, {'name': 'Serie D', 'value': 3.5, 'type': 'Semi-Pro'}, {'name': 'Eccellenza', 'value': 3, 'type': 'Semi-Pro'}, {'name': 'Promozione', 'value': 2.5, 'type': 'Amateur'}], 'Spain': [{'name': 'La Liga', 'value': 5, 'type': 'Pro'}, {'name': 'Segunda División', 'value': 4.5, 'type': 'Pro'}, {'name': 'Primera Federación', 'value': 4, 'type': 'Pro'}, {'name': 'Segunda Federación', 'value': 3.5, 'type': 'Semi-Pro'}, {'name': 'Tercera Federación', 'value': 3, 'type': 'Semi-Pro'}, {'name': 'Divisiones Regionales', 'value': 2.5, 'type': 'Amateur'}], 'France': [{'name': 'Ligue 1', 'value': 5, 'type': 'Pro'}, {'name': 'Ligue 2', 'value': 4.5, 'type': 'Pro'}, {'name': 'Championnat National', 'value': 4, 'type': 'Pro'}, {'name': 'National 2', 'value': 3.5, 'type': 'Semi-Pro'}, {'name': 'National 3', 'value': 3, 'type': 'Semi-Pro'}, {'name': 'Régional 1', 'value': 2.5, 'type': 'Amateur'}], 'Germany': [{'name': 'Bundesliga', 'value': 5, 'type': 'Pro'}, {'name': '2. Bundesliga', 'value': 4.5, 'type': 'Pro'}, {'name': '3. Liga', 'value': 4, 'type': 'Pro'}, {'name': 'Regionalliga', 'value': 3.5, 'type': 'Semi-Pro'}, {'name': 'Oberliga', 'value': 3, 'type': 'Semi-Pro'}, {'name': 'Verbandsliga', 'value': 2.5, 'type': 'Amateur'}], 'England': [{'name': 'Premier League', 'value': 5, 'type': 'Pro'}, {'name': 'Championship', 'value': 4.5, 'type': 'Pro'}, {'name': 'League One', 'value': 4, 'type': 'Pro'}, {'name': 'League Two', 'value': 3.5, 'type': 'Pro'}, {'name': 'National League', 'value': 3, 'type': 'Semi-Pro'}, {'name': 'National League North/South', 'value': 2.5, 'type': 'Semi-Pro'}], 'Brazil': [{'name': 'Brasileirão Serie A', 'value': 5, 'type': 'Pro'}, {'name': 'Brasileirão Serie B', 'value': 4.5, 'type': 'Pro'}, {'name': 'Brasileirão Serie C', 'value': 4, 'type': 'Pro'}, {'name': 'Brasileirão Serie D', 'value': 3.5, 'type': 'Semi-Pro'}, {'name': 'Campeonatos Estaduais A1', 'value': 3, 'type': 'Semi-Pro'}, {'name': 'Campeonatos Estaduais A2', 'value': 2.5, 'type': 'Amateur'}], 'Argentina': [{'name': 'Primera División', 'value': 5, 'type': 'Pro'}, {'name': 'Primera Nacional', 'value': 4.5, 'type': 'Pro'}, {'name': 'Primera B', 'value': 4, 'type': 'Pro'}, {'name': 'Primera C', 'value': 3.5, 'type': 'Semi-Pro'}, {'name': 'Primera D', 'value': 3, 'type': 'Semi-Pro'}, {'name': 'Torneo Regional', 'value': 2.5, 'type': 'Amateur'}], 'Uruguay': [{'name': 'Primera División', 'value': 5, 'type': 'Pro'}, {'name': 'Segunda División', 'value': 4, 'type': 'Pro'}, {'name': 'Segunda División Amateur', 'value': 3, 'type': 'Semi-Pro'}, {'name': 'Liga Universitaria', 'value': 2.5, 'type': 'Amateur'}, {'name': 'Ligas Regionales', 'value': 2, 'type': 'Amateur'}, {'name': 'Ligas Barriales', 'value': 1.5, 'type': 'Amateur'}], 'Colombia': [{'name': 'Categoría Primera A', 'value': 5, 'type': 'Pro'}, {'name': 'Categoría Primera B', 'value': 4.5, 'type': 'Pro'}, {'name': 'Torneo Nacional', 'value': 3.5, 'type': 'Semi-Pro'}, {'name': 'Ligas Departamentales', 'value': 2.5, 'type': 'Amateur'}, {'name': 'Ligas Locales', 'value': 2, 'type': 'Amateur'}, {'name': 'Tornei Amatoriali', 'value': 1.5, 'type': 'Amateur'}], 'Chile': [{'name': 'Primera División', 'value': 5, 'type': 'Pro'}, {'name': 'Primera B', 'value': 4, 'type': 'Pro'}, {'name': 'Segunda División', 'value': 3.5, 'type': 'Semi-Pro'}, {'name': 'Tercera División A', 'value': 3, 'type': 'Semi-Pro'}, {'name': 'Tercera División B', 'value': 2.5, 'type': 'Amateur'}, {'name': 'Ligas Locales', 'value': 2, 'type': 'Amateur'}]};

export const genericLevels = [{'name': 'Tier 1', 'value': 4, 'type': 'Pro'}, {'name': 'Tier 2', 'value': 3.5, 'type': 'Semi-Pro'}, {'name': 'Tier 3', 'value': 3, 'type': 'Semi-Pro'}, {'name': 'Tier 4', 'value': 2.5, 'type': 'Amateur'}, {'name': 'Youth Sector', 'value': 1.5, 'type': 'Youth'}, {'name': 'Other', 'value': 1, 'type': 'Other'}];
export default leagueLevels;

// Estrai tutti i nomi dei livelli disponibili nei campionati reali
export const LEVELS = [
  ...new Set(
    Object.values(leagueLevels)
      .flat()
      .map((lvl) => lvl.name)
      .concat(genericLevels.map((lvl) => lvl.name))
  ),
];

// Associa badge visivi per i livelli (default semplificato)
export const LEVEL_BADGES = Object.fromEntries(
  LEVELS.map((levelName) => {
    let color = "bg-gray-100 text-gray-700";
    if (levelName.includes("Serie A") || levelName.includes("Premier")) color = "bg-green-100 text-green-800";
    else if (levelName.includes("Serie B") || levelName.includes("Championship")) color = "bg-blue-100 text-blue-800";
    else if (levelName.includes("Serie C") || levelName.includes("League One")) color = "bg-yellow-100 text-yellow-800";
    else if (levelName.includes("Primavera") || levelName.includes("Youth")) color = "bg-purple-100 text-purple-800";
    return [levelName, color];
  })
);
export const getTypeFromLevel = (paese, livello) => {
  const levels = leagueLevels[paese] || genericLevels;
  const found = levels.find((lvl) => lvl.name === livello);
  return found?.type || null;
};
