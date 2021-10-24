import PlaceEntries from "./PlaceEntries";

function MainContent(): JSX.Element {
  return (
    <>
      <PlaceEntries
        title={"Sleeping in the clouds"}
        placeName={"La Mesa de Los Santos"}
        countryName={"Colombia"}
        img={"https://images.pexels.com/photos/545964/pexels-photo-545964.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}
        googleLocation={
          "https://www.google.com/maps/place/Refugio+La+Roca/@6.7804515,-73.0883802,17z/data=!3m1!4b1!4m8!3m7!1s0x8e69b557b88a88cf:0x2dc77bdd91fcaa6a!5m2!4m1!1i2!8m2!3d6.7804515!4d-73.0861915?hl=en-US"
        }
        explanation={
          "Refugio La Roca is a hostel overlooking the Chicamocha Canyon with access to one of the best climbing areas in Colombia"
        }
      />
      <PlaceEntries
        title={"Medieval Old Town"}
        placeName={"Edinburgh"}
        countryName={"Scotland"}
        img={"https://images.pexels.com/photos/4596565/pexels-photo-4596565.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}
        googleLocation={
          "https://www.google.com/maps/place/Edinburgh,+UK/@55.9411289,-3.3454216,11z/data=!3m1!4b1!4m5!3m4!1s0x4887b800a5982623:0x64f2147b7ce71727!8m2!3d55.953252!4d-3.188267?hl=en-US"
        }
        explanation={
          "Walking through Edinburgh's old town takes you back to medieval times. You can also find whiskey museums and people playing bagpipes"
        }
      />
      <PlaceEntries
        title={"Under the stars"}
        placeName={"Valle Del Elqui"}
        countryName={"Chile"}
        img={"https://images.pexels.com/photos/33825/milky-way-rocks-night-landscape.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"}
        googleLocation={
          "https://www.google.com/maps/place/Pisco+Elqui,+Paiguano,+Coquimbo,+Chile/@-30.1273213,-70.5293051,12z/data=!4m5!3m4!1s0x969001c5b1ed97f9:0x10ea851a657ed26e!8m2!3d-30.124214!4d-70.495571"
        }
        explanation={
          "One of the best locations to sleep under the stars! The area offers many glamping spaces from where you can watch the constellations at night"
        }
      />
      <PlaceEntries
        title={"The birth place of DWS"}
        placeName={"Cala Santanyí"}
        countryName={"Spain"}
        img={"https://images.pexels.com/photos/2803288/pexels-photo-2803288.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}
        googleLocation={
          "https://www.google.com/maps?q=cala+santanyi&source=lmns&bih=595&biw=1035&hl=en-US&sa=X&ved=2ahUKEwi6itGamuPzAhWAQEEAHU4CDyMQ_AUoAnoECAEQAg"
        }
        explanation={
          "Deep Water Soloing was created in Palma de Majorca not so long ago. In this Cala, you can find some of the most scenic routes..."
        }
      />
    </>
  );
}

export default MainContent;
