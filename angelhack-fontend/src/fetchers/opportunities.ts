export const getOpportunities = async () => {
  return fetch("/api/opps")
    .then((res) => res.json())
    .then((data) => data);
};
