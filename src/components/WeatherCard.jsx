export default function WeatherCard({ weather, places, country }) {
    return (
      <div className="shadow-lg rounded-lg p-6 bg-[#f7d6d080]">
        {/* Weather Information */}
        <div className="mb-4">
          <h2 className="text-xl font-bold">{weather?.name}, {country?.name?.common}</h2>
          <p className="text-lg">
            {weather?.main?.temp}°C - {weather?.weather[0]?.description}
          </p>
        </div>
  
        {/* Country Information */}
        <div className="mb-4">
          <h3 className="text-lg font-bold">Country Info</h3>
          <p><strong>Capital:</strong> {country?.capital}</p>
          <p><strong>Region:</strong> {country?.region}</p>
          <p><strong>Population:</strong> {country?.population}</p>
        </div>
  
        {/* Places to Visit */}
        <div>
          <h3 className="text-lg font-bold">Places to Visit</h3>
          <ul className="list-disc list-inside">
            {places?.slice(0, 5).map((place) => (
              <li key={place.fsq_id}>{place?.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }