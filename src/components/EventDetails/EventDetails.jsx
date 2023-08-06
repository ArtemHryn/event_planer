import PageTopic from "components/Common/PageTopic/PageTopic";
import { useLocation } from "react-router-dom";
import EventDetailsCard from "./EventDetailsCard/EventDetailsCard";

const EventDetails = () => {
  const { state } = useLocation();
  return (
    <>
      <PageTopic title={state.title} />
      <EventDetailsCard card={state} />
    </>
  );
};

export default EventDetails;
