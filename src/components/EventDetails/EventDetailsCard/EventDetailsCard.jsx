import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { ToastContainer } from "react-toastify";
import { Box } from "components/Common/Box";
import {
  CardDescription,
  Filters,
} from "components/Home/EventsList/EventCard/EventCard.styled";
import { Image } from "./EventDetailsCard.styled";
import Button from "components/Common/Button/Button";
import { deleteEvent } from "helper/api";
import { errorToast, successfullToast } from "helper/toastNotofication";

import defaultPic from "images/event.jpg";

const EventDetailsCard = ({ card }) => {
  const navigate = useNavigate();
  const {
    title,
    picture,
    category,
    priority,
    date,
    location,
    description,
    id,
  } = card;

  const onDeleteEvent = async (id) => {
    try {
      await deleteEvent(id);
      successfullToast("Event has been deleted");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      errorToast(error.response.statusText);
    }
  };
  return (
    <Box
      borderRadius={["8px"]}
      height={["464px", "504px", "492px"]}
      boxShadow="boxShadow"
      width={[null, null, "628px"]}
      m="0 auto"
    >
      <Image src={picture ? picture : defaultPic} alt={title} />
      <Box p={["24px 16px 40px"]}>
        <CardDescription>{description}</CardDescription>
        <Box
          display="flex"
          gridGap="12px"
          flexWrap="wrap"
          pt={["24px"]}
          pb={["40px"]}
        >
          <Filters boxShadow="boxShadow">{category}</Filters>
          <Filters boxShadow="boxShadow" priority={priority}>
            {priority}
          </Filters>
          <Filters boxShadow="boxShadow">{location}</Filters>
          <Filters boxShadow="boxShadow">
            {" "}
            {moment(date).format("MM.DD")} at {moment(date).format("hh:mm")}
          </Filters>
        </Box>
        <Box display="flex" gridGap="24px" justifyContent={[null, "flex-end"]}>
          <Button
            variant="outline"
            onClick={() => navigate("/edit", { state: card })}
          >
            Edit
          </Button>
          <Button variant="filled" onClick={() => onDeleteEvent(id)}>
            Delete event
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default EventDetailsCard;
