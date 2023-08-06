import { useRef } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import {
  ChoseFilter,
  FilterButton,
  FilterIcon,
  FilterListButton,
  FilterListHeader,
  List,
  ListElement,
  SortByArrows,
} from "../Filters.styled";
import { OverlayPanel } from "primereact/overlaypanel";
import { setFilterInLocalStorage } from "helper/localStorage";
import { SORTED } from "helper/constantes";

const buttons = [
  { name: "by name", isLess: true },
  { name: "by name", isLess: false },
  { name: "by data", isLess: true },
  { name: "by data", isLess: false },
  { name: "by priority", isLess: true },
  { name: "by priority", isLess: false },
];

const SortBy = ({ filterBySort, setFilterBySort }) => {
  const op = useRef(null);

  const onChangeSort = (e, button) => {
    setFilterBySort(button);
    setFilterInLocalStorage(SORTED, button);
    op.current.hide(e);
  };
  return (
    <>
      <li>
        <FilterButton onClick={(e) => op.current.toggle(e)}>
          <ChoseFilter color="additional">Sort by</ChoseFilter>
          <FilterIcon as={GiSettingsKnobs} rotate="90deg" />
        </FilterButton>
      </li>
      <OverlayPanel ref={op}>
        <List width={["170px"]}>
          <ListElement border="none">
            <FilterListHeader>
              <FilterIcon as={GiSettingsKnobs} rotate="90deg" /> Sort by
            </FilterListHeader>
          </ListElement>
          {buttons.map((button, index) => (
            <ListElement key={index}>
              <FilterListButton
                onClick={(e) => onChangeSort(e, button)}
                color={
                  filterBySort &&
                  filterBySort.name === button.name &&
                  filterBySort.isLess === button.isLess
                    ? "main"
                    : null
                }
              >
                {button.name}{" "}
                <SortByArrows
                  as={button.isLess ? BsArrowDownShort : BsArrowUpShort}
                  width="24"
                  height="24"
                />
              </FilterListButton>
            </ListElement>
          ))}
        </List>
      </OverlayPanel>
    </>
  );
};

export default SortBy;
