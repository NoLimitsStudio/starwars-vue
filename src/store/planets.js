const urlParam = "planets";
const _url = "https://swapi.dev/api/";

async function tryToLoad(id) {
  const res = await fetch(`${_url}${urlParam}/${id}`);
  if (res.status > 299) {
    return res.status;
  }
  const planet = await res.json();
  planet.id = id;
  return planet;
}

const state = () => ({
  planet: {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  }
});

const mutations = {
  SET_ALLPLANETS(state, payload) {
    state.planets = payload;
  },
  SET_PLANET(state, planet) {
    state.planet.name = planet.name;
    state.planet.population = planet.population;
    state.planet.rotationPeriod = planet.rotation_period;
    state.planet.diameter = planet.diameter;
    state.planet.id = planet.id;
  }
};
const actions = {
  async loadPlanet({ commit }, id) {
    const result = await tryToLoad(id);
    if (typeof result === "number") {
      commit("SET_ERROR", result);
      return {};
    }
    return result;
  }
};
const getters = {
  getAllPlanets: state => state.planets,
  getPlanet: state => state.planet
};

export default {
  state,
  getters,
  actions,
  mutations
};
