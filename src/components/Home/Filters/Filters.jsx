import AddEvent from "./AddEvent/AddEvent";
import Categories from "./Categories/Categories";
import { FilterList } from "./Filters.styled";
import SortBy from "./SortBy/SortBy";

const Filters = ({
  filteredByCategory,
  setfilteredByCategory,
  filterBySort,
  setFilterBySort,
}) => {
  return (
    <FilterList>
      <Categories
        filteredByCategory={filteredByCategory}
        setfilteredByCategory={setfilteredByCategory}
      />
      <SortBy filterBySort={filterBySort} setFilterBySort={setFilterBySort} />
      <AddEvent />
    </FilterList>
  );
};

export default Filters;
