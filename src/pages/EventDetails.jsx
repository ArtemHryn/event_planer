import { Box } from "components/Common/Box";
import EventDetails from "components/EventDetails/EventDetails";
import React from "react";

const EventDetailsPage = () => {
  return (
    <main>
      <Box as="section" py={["40px"]} minHeight="100vh">
        <Box
          maxWidth={["320px", "768px", "1280px"]}
          m="0 auto"
          px={["24px", "40px"]}
          pb={"40px"}
        >
          <EventDetails />
        </Box>
      </Box>
    </main>
  );
};

export default EventDetailsPage;
