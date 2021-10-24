interface PlaceEntry {
    title: string;
    placeName: string;
    countryName: string;
    img: string;
    googleLocation: string;
    explanation: string;
};

function PlaceEntries(props:PlaceEntry): JSX.Element {
    return (
        <>
            <img src = {props.img} alt = {props.placeName}></img>
            <h1><strong>{props.title}</strong></h1>
            <h2><strong>{props.placeName}</strong>(<a href={props.googleLocation}>map link</a>)</h2>
            <p>{props.explanation}</p>
        </>
    );
};

export default PlaceEntries;