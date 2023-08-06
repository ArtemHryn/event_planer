import { useLocation } from "react-router-dom";
import PageTopic from "components/Common/PageTopic/PageTopic";
import EventForm from "components/CreateEvent/CreateEventForm/EventForm";

const EditEvent = () => {
  const { state } = useLocation();

  return (
    <>
      <PageTopic title={"Edit event"} />
      <EventForm event={state} btnName="Save" />
    </>
  );
};

export default EditEvent;
