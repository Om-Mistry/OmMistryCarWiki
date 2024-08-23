import '../styles/cars.css'

const CarList = () => {
  return (
    <section className="carList">
      <div className="carGrid">
        <div className="carItem">
          <img
            src="https://s1.cdn.autoevolution.com/images/news/big-mile-2004-subaru-impreza-wrx-sti-shines-affordable-in-world-rally-blue-177115-7.jpg"
            alt="Subaru Impreza"
            className="carImage"
          />
          <div className="carDetails">
            <h3>Subaru Impreza</h3>
            <p>Year: 2004</p>
          </div>
        </div>
        <div className="carItem">
          <img
            src="https://wallpapercave.com/wp/wp1981479.jpg"
            alt="Maserati Quattroporte"
            className="carImage"
          />
          <div className="carDetails">
            <h3>Maserati Quattroporte</h3>
            <p>Year: 2009</p>
          </div>
        </div>
        <div className="carItem">
          <img
            src="https://jdmsupply.com/storage/images/vehicle/246/MFT1A827BvLEcYOCd4lvEhwRG92nOQ6xsyJvOk5d_1440x1080.webp"
            alt="Toyota Hilux"
            className="carImage"
          />
          <div className="carDetails">
            <h3>Toyota Hilux</h3>
            <p>Year: 1990</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarList
