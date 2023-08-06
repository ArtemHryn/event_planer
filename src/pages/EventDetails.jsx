import Container from "components/Common/Container/Container";
import EventDetails from "components/EventDetails/EventDetails";

const EventDetailsPage = () => {
  return (
    <Container minHeight={["60vh", "75vh"]}>
      <EventDetails />
    </Container>
  );
};

export default EventDetailsPage;
