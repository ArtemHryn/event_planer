import { Box } from "../components/Common/Box";
import CreateEvent from "../components/CreateEvent/CreateEvent";

const CreateEventPage = () => {
  return (
    <main>
      <Box as="section" py={["40px"]}>
        <Box maxWidth={["320px", "768px", "1280px"]} m="0 auto" px={['24px']}>
          <CreateEvent />
        </Box>
      </Box>
    </main>
  );
};

export default CreateEventPage;
