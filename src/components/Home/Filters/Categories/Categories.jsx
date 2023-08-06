import { useRef } from "react";
import {
  FilterIcon,
  FilterButton,
  List,
  FilterListHeader,
  ListElement,
  FilterListButton,
  ChoseFilter,
} from "../Filters.styled";
import { OverlayPanel } from "primereact/overlaypanel";

export const buttons = [
  { name: "All" },
  { name: "Art" },
  { name: "Music" },
  { name: "Business" },
  { name: "Conference" },
  { name: "Workshop" },
  { name: "Party" },
  { name: "Sport" },
];

const Categories = ({ filteredByCategory, setfilteredByCategory }) => {
  const op = useRef(null);

  const onChangeCategory = (e, name) => {
    setfilteredByCategory(name);
    op.current.hide(e);
  };
  return (
    <>
      <li>
        <FilterButton onClick={(e) => op.current.toggle(e)}>
          <ChoseFilter>{filteredByCategory}</ChoseFilter> <FilterIcon />
        </FilterButton>
      </li>
      <OverlayPanel ref={op}>
        <List>
          <ListElement border="none">
            <FilterListHeader>
              {" "}
              Category <FilterIcon />
            </FilterListHeader>
          </ListElement>
          {buttons.map(({ name }) => (
            <ListElement key={name}>
              <FilterListButton
                color={filteredByCategory === name ? "main" : null}
                onClick={(e) => onChangeCategory(e, name)}
              >
                {name}
              </FilterListButton>
            </ListElement>
          ))}
        </List>
      </OverlayPanel>
    </>
  );
};

export default Categories;
