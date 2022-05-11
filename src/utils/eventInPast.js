const eventInPast = (event) => {
  const currentTime = Date.now();
  if (event.end_time) {
    return currentTime > Date.parse(event.end_time);
  } else return currentTime > Date.parse(event.start_time) + 10800000;
};

export default eventInPast;
