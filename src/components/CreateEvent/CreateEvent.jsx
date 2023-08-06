import React from "react";
import PageTopic from "../Common/PageTopic/PageTopic";
import EventForm from "./CreateEventForm/EventForm";

const CreateEvent = () => {
  return (
    <>
      <PageTopic title={"Create new Event"} />
      <EventForm btnName="Add event" />
    </>
  );
};

export default CreateEvent;
