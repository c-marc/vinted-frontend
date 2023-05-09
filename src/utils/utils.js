/** Build the URL with query params from filters */
export const urlWithFilters = (url, filters) => {
  // Get rid of unused filters to write a cleaner query
  let applicableFilters = {};
  for (const [k, v] of Object.entries(filters)) {
    if (v) {
      applicableFilters = { ...applicableFilters, [k]: v };
    }
  }
  // Use native API
  const params = new URLSearchParams(applicableFilters);
  return new URL(`${url}?${params}`);
};

/** Compute the number of pages from limit and count of results */
export const getPageMax = (limit, count) => {
  return !limit ? 1 : Math.floor(count / limit) + 1;
};

/** Display value as euros */
export const asPrice = (value) => {
  return value.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
};
