import { useEffect, useState } from "react";
import EventsList from "../components/Home/EventsList/EventsList";
import Filter from "../components/Home/Filters/Filters";
import { getAllEvents } from "helper/api";
import { getFilterFromLocalStorage } from "helper/localStorage";
import { CATEGORY, SORTED } from "helper/constantes";
import Container from "components/Common/Container/Container";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [filteredByCategory, setfilteredByCategory] = useState(
    () => getFilterFromLocalStorage(CATEGORY) ?? "All"
  );
  const [filterBySort, setFilterBySort] = useState(
    () => getFilterFromLocalStorage(SORTED) ?? null
  );

  useEffect(() => {
    const events = async () => {
      try {
        const result = await getAllEvents();
        setEvents(result);
      } catch (error) {
        console.log(error);
      }
    };
    events();
  }, []);

  const filteredEvents = () => {
    //filtered by category
    const byCategory =
      filteredByCategory === "All"
        ? events
        : events.filter((event) => event.category === filteredByCategory);
    if (!filterBySort) return byCategory;

    //sorted by
    switch (filterBySort.name) {
      case "by name":
        return byCategory.sort((a, b) =>
          filterBySort.isLess
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title)
        );
      case "by data":
        return byCategory.sort((a, b) =>
          filterBySort.isLess
            ? a.date.localeCompare(b.date)
            : b.date.localeCompare(a.date)
        );
      case "by priority":
        return byCategory.sort((a, b) => {
          const priorityOrder = { low: 1, medium: 2, high: 3 };
          const priorityA = priorityOrder[a.priority.toLowerCase()];
          const priorityB = priorityOrder[b.priority.toLowerCase()];
          return filterBySort.isLess
            ? priorityB - priorityA
            : priorityA - priorityB;
        });
      default:
        return byCategory;
    }
  };

  return (
    <Container>
      <Filter
        filteredByCategory={filteredByCategory}
        setfilteredByCategory={setfilteredByCategory}
        filterBySort={filterBySort}
        setFilterBySort={setFilterBySort}
      />
      <EventsList
        events={filteredEvents()}
        setfilteredByCategory={setfilteredByCategory}
      />
    </Container>
  );
};

export default Home;
