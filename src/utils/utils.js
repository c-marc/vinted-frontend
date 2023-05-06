export const urlWithFilters = (url, filters) => {
  let applicableFilters = {};
  for (const [k, v] of Object.entries(filters)) {
    if (v) {
      applicableFilters = { ...applicableFilters, [k]: v };
    }
  }
  const params = new URLSearchParams(applicableFilters);
  return new URL(`${url}?${params}`);
};

export const getPageMax = (limit, count) => {
  return !limit ? 1 : Math.floor(count / limit) + 1;
};
