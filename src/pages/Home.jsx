import { useEffect, useState } from "react";
import { Box } from "../components/Common/Box";
import EventsList from "../components/Home/EventsList/EventsList";
import Filter from "../components/Home/Filters/Filters";
import { getAllEvents } from "helper/api";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [filteredByCategory, setfilteredByCategory] = useState("All");
  const [filterBySort, setFilterBySort] = useState(null);


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
    <main>
      <Box as="section" py={["40px"]}>
        <Box maxWidth={["320px", "768px", "1280px"]} m="0 auto" px={["24px"]}>
          <Filter
            filteredByCategory={filteredByCategory}
            setfilteredByCategory={setfilteredByCategory}
            filterBySort={filterBySort}
            setFilterBySort={setFilterBySort}
          />
          <EventsList events={filteredEvents()} />
        </Box>
      </Box>
    </main>
  );
};

export default Home;
