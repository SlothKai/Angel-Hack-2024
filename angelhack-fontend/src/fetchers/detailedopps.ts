export const detailedOops = async (id: string) => {
  const response = await fetch(`/api/detailed-opps/${id}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error("Network response was not ok");
  }
  return response.json();
};
