import { useSearchParams } from "react-router-dom";
import {
  CleanUpCross,
  ClearButton,
  Label,
  SearchIcon,
  SearchInput,
} from "./Search.styled";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const onChange = ({ target }) => {
    setSearchParams(target.value !== "" ? { search: target.value } : {});
  };

  return (
    <Label>
      <SearchIcon />

      <SearchInput
        type="text"
        onChange={onChange}
        value={search ? search : ""}
        placeholder="Search by keywords"
      />
      {search && (
        <ClearButton onClick={() => setSearchParams("")}>
          <CleanUpCross />
        </ClearButton>
      )}
    </Label>
  );
};

export default Search;
