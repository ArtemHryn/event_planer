import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { ChoseFilter, FilterButton, FilterIcon } from "../Filters.styled";

const AddEvent = () => {
  return (
    <li>
      <FilterButton bg="main" as={Link} to="create">
        <FilterIcon fill="#fff" as={BsPlusLg} />{" "}
        <ChoseFilter color="#fff" mr={[null, '0px']} ml={[null, '16px']}>Add new event</ChoseFilter>
      </FilterButton>
    </li>
  );
};

export default AddEvent;
