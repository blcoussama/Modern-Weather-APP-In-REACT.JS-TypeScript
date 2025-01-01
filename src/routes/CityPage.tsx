import { useParams, useSearchParams } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { useForecastQuery, useWeatherQuery } from "@/hooks/UseWeather";
import WeatherSkeleton from "@/components/LoadingSkeleton";
import { FavoriteButton } from "@/components/FavouritesButton";
import { CurrentWeather } from "@/components/CurrentWeather";
import { HourlyTemperature } from "@/components/HourlyTemperature";
import { WeatherDetails } from "@/components/WeatherDetails";
import { WeatherForecast } from "@/components/WeatherForecast";


export function CityPage() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");

  const coordinates = { lat, lon };

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          Failed to load weather data. Please try again.
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forecastQuery.data || !params.cityName) {
    return <WeatherSkeleton />;
  }

  return (
    <div className="space-y-4 md:w-full">
      <div className="flex items-center justify-between mx-3">
        <h1 className="text-2xl font-bold tracking-tight">
          {params.cityName}, {weatherQuery.data.sys.country}
        </h1>
        <div className="flex gap-2">
          <FavoriteButton
            data={{ ...weatherQuery.data, name: params.cityName }}
          />
        </div>
      </div>

      <div className="grid gap-6">
          <div className="flex flex-col xl:flex-row gap-4">
            {/* current weather */}
            <CurrentWeather data={weatherQuery.data} />
            {/* hourly temperature */}
            <HourlyTemperature data={forecastQuery.data} />
          </div>
          
          <div className="grid gap-6 xl:grid-cols-2 items-start">
            <WeatherDetails data={weatherQuery.data} />
            <WeatherForecast data={forecastQuery.data} />
          </div>
        </div>
    
    </div>
  );
}