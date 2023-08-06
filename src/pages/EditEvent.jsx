import { Box } from "components/Common/Box";
import EditEvent from "components/EditEvent/EditEvent";
import React from "react";

const EditEventPage = () => {
  return (
    <main>
      <Box as="section" py={["40px"]}>
        <Box maxWidth={["320px", "768px", "1280px"]} m="0 auto" px={["24px"]}>
          <EditEvent />
        </Box>
      </Box>
    </main>
  );
};

export default EditEventPage;
