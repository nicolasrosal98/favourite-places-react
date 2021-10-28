import PlaceEntries from "./PlaceEntries";
import places from "../components/places";

function MainContent(): JSX.Element {
  return (
    <>
      {places.map((place) => (
        <PlaceEntries
          title={place.title}
          placeName={place.placeName}
          countryName={place.countryName}
          img={place.img}
          googleLocation={place.googleLocation}
          explanation={place.explanation}
          key={place.key}
        />
      ))}
      ;
    </>
  );
}

export default MainContent;
