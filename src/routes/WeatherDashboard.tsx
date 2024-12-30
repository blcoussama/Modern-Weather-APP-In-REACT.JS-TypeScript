  import CurrentWeather from "@/components/CurrentWeather"
  import WeatherSkeleton from "@/components/LoadingSkeleton"
  import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
  import { Button } from "@/components/ui/button"
  import { useGeoLocation } from "@/hooks/UseGeoLocation"
  import { useForecastQuery, useReverseQuery, useWeatherQuery } from "@/hooks/UseWeather"
  import { AlertTriangle, MapPin, RefreshCw } from "lucide-react"
  const WeatherDashboard = () => {

    const { locationData, getLocation } = useGeoLocation()
    const { coordinates, error:locationError, isLoading:locationLoading } = locationData

    const weatherQuery = useWeatherQuery(coordinates)
    console.log(weatherQuery);
    const forecastQuery = useForecastQuery(coordinates)
    console.log(forecastQuery);
    const locationQuery = useReverseQuery(coordinates)
    console.log(locationQuery);

    const handleRefresh = () => {
      getLocation()
      if(coordinates) {
        weatherQuery.refetch()
        forecastQuery.refetch()
        locationQuery.refetch()
      }
    }

    if(locationLoading) {
      return <WeatherSkeleton />
    }

    if(locationError) {
      return (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Location Error</AlertTitle>
          <AlertDescription className="flex flex-col gap-4">
            <p>{locationError}</p>
            <Button variant="outline" onClick={getLocation} className="w-fit">
              <MapPin className="mr-2 h-4 w-4" />
              Enable Location
            </Button>
          </AlertDescription>
        </Alert>
      );
    }

    if(!coordinates) {
      return (
        <Alert>
          <MapPin className="h-4 w-4" />
          <AlertTitle>Location Required</AlertTitle>
          <AlertDescription className="flex flex-col gap-4">
            <p>Please enable location access to see your local weather.</p>
            <Button variant="outline" onClick={getLocation} className="w-fit">
              <MapPin className="mr-2 h-4 w-4" />
              Enable Location
            </Button>
          </AlertDescription>
        </Alert>
      );
    }

    const locationname = locationQuery.data?.[0]

    if(weatherQuery.error || forecastQuery.error) {
      return (
      <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription className="flex flex-col gap-4">
            <p>Failed to fetch weather data pls try again!</p>
            <Button variant="outline" onClick={handleRefresh} className="w-fit">
              <RefreshCw className="mr-2 h-4 w-4" />
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      )
    }

    if(!weatherQuery.data || !forecastQuery.data) {
      return <WeatherSkeleton />
    }

    return (
      <div className="space-y-4">
        {/* Favorite Cities */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">My Location</h1>
          <Button variant={"outline"} size={"icon"} onClick={handleRefresh} disabled={ weatherQuery.isFetching || forecastQuery.isFetching}>
            <RefreshCw className={`h-4 w-4 ${weatherQuery.isFetching?"animate-spin":""}`} />
          </Button>
        </div>

        {/* Current and Hourly Weather */}
        <div className="">
          {/* current weather */}
          <CurrentWeather data={weatherQuery.data} locationName={locationname} />
          {/* hourly temperature */}
          <div>

          </div>
          {/* details */}
          {/* forecast */}
          <div>

          </div>
        </div>
      </div>
    )
  }

  export default WeatherDashboard