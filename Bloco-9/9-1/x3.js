const delay = 4000;
const planetName = ({ name }) => `Returned planet: ${name}`;
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

const getPlanet = (callback) => {
  setTimeout(() => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    // console.log("Returned planet: ", mars);
    return console.log (callback(mars));
  }, delay);
};

getPlanet(planetName); // imprime Marte depois de 4 segundos