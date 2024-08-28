import { Link } from 'react-router-dom'
import '../styles/cars.css'

const CarList = () => {
  const cars = [
    {
      id: 1,
      make: 'Subaru',
      model: 'Impreza',
      year: '2004',
      image_url:
        'https://s1.cdn.autoevolution.com/images/news/big-mile-2004-subaru-impreza-wrx-sti-shines-affordable-in-world-rally-blue-177115-7.jpg',
      description:
        'The 2004 Subaru Impreza is a well-regarded compact car that gained fame for its all-wheel-drive system and rally heritage. It is powered by a 2.5-liter flat-four engine producing 165 horsepower and 166 lb-ft of torque. The Impreza offers a blend of performance and practicality with a 0-60 mph time of around 7.5 seconds and a combined fuel economy of approximately 22 mpg. Its rally-inspired design and responsive handling make it a favorite among driving enthusiasts who appreciate its agility in various weather conditions.',
    },
    {
      id: 2,
      make: 'Maserati',
      model: 'Quattroporte',
      year: '2009',
      image_url: 'https://wallpapercave.com/wp/wp1981479.jpg',
      description:
        'The 2009 Maserati Quattroporte represents the pinnacle of Italian luxury and performance. It is equipped with a 4.7-liter V8 engine that delivers 433 horsepower and 361 lb-ft of torque, enabling it to accelerate from 0-60 mph in just 5.4 seconds. The Quattroporte features a sophisticated six-speed automatic transmission and offers a top speed of around 170 mph. With its plush leather interior, advanced technology, and distinctive design, the Quattroporte embodies both elegance and power, providing an exceptional driving experience.',
    },
    {
      id: 3,
      make: 'Toyota',
      model: 'Hilux',
      year: '1990',
      image_url:
        'https://jdmsupply.com/storage/images/vehicle/246/MFT1A827BvLEcYOCd4lvEhwRG92nOQ6xsyJvOk5d_1440x1080.webp',
      description:
        'The 1990 Toyota Hilux is a legendary pickup truck known for its rugged durability and off-road capability. It is powered by a 2.4-liter four-cylinder engine producing 105 horsepower and 137 lb-ft of torque. The Hilux is equipped with a manual transmission and features a simple, durable design that has earned it a reputation for reliability. With its robust construction and ability to handle challenging terrain, the 1990 Hilux remains a beloved choice for those seeking a dependable workhorse and off-road companion.',
    },
  ]

  return (
    <section className="carList">
      <div className="carGrid">
        {cars.map((car) => (
          <div className="carItem" key={car.id}>
            <Link to={`/cars/${car.id}`}>
              <img
                src={car.image_url}
                alt={`${car.make} ${car.model}`}
                className="carImage"
              />
            </Link>
            <div className="carDetails">
              <h3>
                {car.make} {car.model}
              </h3>
              <p>Year: {car.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CarList
