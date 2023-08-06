import { useNavigate } from "react-router-dom";
import { Box } from "../Box";
import { LinkBack, LinkBackIcon, PageTitle } from "./PageTopic.styled";

const PageTopic = ({ title }) => {
  const navigate = useNavigate();
  return (
    <Box mb={["24px"]}>
      <LinkBack onClick={() => navigate(-1)}>
        <LinkBackIcon /> Back
      </LinkBack>
      <PageTitle>{title}</PageTitle>
    </Box>
  );
};

export default PageTopic;
