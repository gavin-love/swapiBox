const allVehicles = async data => {
  const vehicles = data.map(async vehicle => {
    const name = vehicle.name;
    const model = vehicle.model;
    const clAss = vehicle.vehicle_class;
    const passengers = vehicle.passengers;

    return {
      name,
      model,
      clAss,
      passengers,
      favorite: false
    };
  });
  const resolvedVehicles = await Promise.all(vehicles);
  return resolvedVehicles;
};

export default allVehicles;
