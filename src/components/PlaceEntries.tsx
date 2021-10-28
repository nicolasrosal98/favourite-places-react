import "../css/PlaceEntries.css";

interface PlaceEntry {
  title: string;
  placeName: string;
  countryName: string;
  img: string;
  googleLocation: string;
  explanation: string;
}

function PlaceEntries(props: PlaceEntry): JSX.Element {
  return (
    <div className="item">
      <img src={props.img} alt={props.placeName}></img>
      <h1>
        <strong>{props.title}</strong>
      </h1>
      <h2>
        <strong>
          {props.placeName}, {props.countryName} (
          <a href={props.googleLocation}>map link</a>)
        </strong>
      </h2>
      <p>{props.explanation}</p>
    </div>
  );
}

export default PlaceEntries;
