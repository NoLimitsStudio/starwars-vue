// constants
const urlParam = "planets";
const _url = "https://swapi.dev/api/";

// functions
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

const actions = {
  async loadPlanet({ commit }, id) {
    const result = await tryToLoad(id);
    if (typeof result === "number") {
      commit("SET_ERROR", result);
      return {};
    }
    commit("SET_ERROR", null);
    return result;
  }
};

export default {
  state,
  actions
};
