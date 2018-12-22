export default dateStr => {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  return new Date(dateStr).toLocaleDateString("en-US", options);
};
