import { useSearchParams } from "react-router-dom";

import EventCard from "./EventCard/EventCard";
import { List } from "./EventList.styled";
import { useEffect, useState } from "react";

const EventsList = ({ events, setfilteredByCategory }) => {
  const [searchedEvents, setSearchedEvents] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  useEffect(() => {
    const filteredByTitleOrDesc = search
      ? events.filter(
          ({ title, description }) =>
            title.toLowerCase().includes(search.toLowerCase()) ||
            description.toLowerCase().includes(search.toLowerCase())
        )
      : events;
    setSearchedEvents(filteredByTitleOrDesc);
  }, [events, search]);

  return (
    <List>
      {searchedEvents.map((card) => (
        <EventCard
          key={card.id}
          card={card}
          setfilteredByCategory={setfilteredByCategory}
        />
      ))}
    </List>
  );
};

export default EventsList;
