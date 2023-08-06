import React, { useState } from "react";
import moment from "moment/moment";
import {
  CardButton,
  CardDescription,
  CardTitle,
  DateAndPlace,
  EventImg,
  Filters,
  ListElement,
} from "./EventCard.styled";
import { Box } from "../../../Common/Box";

import defaultPic from "images/event.jpg";

const EventCard = ({ card, setfilteredByCategory }) => {
  const [showMoreButton, setShowMoreButton] = useState(false);
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
  return (
    <ListElement
      onMouseEnter={() => setShowMoreButton(true)}
      onMouseLeave={() => setShowMoreButton(false)}
    >
      <Box position="relative">
        <EventImg
          src={picture ? picture : defaultPic}
          alt={title}
          height={showMoreButton ? "272px" : null}
        />
        <Box
          position="absolute"
          top={["12px"]}
          left={["12px"]}
          display="flex"
          gridGap={["12px"]}
        >
          {" "}
          <Filters as="button" onClick={() => setfilteredByCategory(category)}>
            {category}
          </Filters>
          <Filters priority={priority}>{priority}</Filters>
        </Box>
        <Box
          position="absolute"
          bottom="0"
          bg="rgba(255, 255, 255, 0.80)"
          display="flex"
          p={["8px 16px"]}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          height="40px"
        >
          <DateAndPlace>
            {moment(date).format("MM.DD")} at {moment(date).format("hh:mm")}
          </DateAndPlace>
          <DateAndPlace>{location}</DateAndPlace>
        </Box>
      </Box>
      <Box
        p={["16px"]}
        display="flex"
        flexDirection="column"
        gridGap={["16px"]}
      >
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {showMoreButton && (
          <CardButton
            to={id}
            state={card}
            type="button"
            className={showMoreButton ? "show" : ""}
          >
            More info
          </CardButton>
        )}
      </Box>
    </ListElement>
  );
};

export default EventCard;
