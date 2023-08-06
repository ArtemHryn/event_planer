import { Box } from "../Box";
import bg_waves from "images/bg_waves.svg";

const Container = ({ children, ...props }) => {
  return (
    <Box
      as="main"
      flexGrow={1}
      backgroundImage={`url(${bg_waves})`}
      backgroundSize='cover'
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box as="section" py={["40px"]}>
        <Box
          maxWidth={["320px", "768px", "1280px"]}
          m="0 auto"
          px={["24px"]}
          pb={"40px"}
          height="100%"
          {...props}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
