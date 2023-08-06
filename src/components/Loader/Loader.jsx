import { Box } from "components/Common/Box";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
    return (
      <Box display='flex' justifyContent='center' width='100vw' height='85vh'>
        <RotatingLines
          strokeColor="#7B61FF"
          strokeWidth="4"
          animationDuration="0.75"
          width="150"
          visible={true}
        />
      </Box>
    );
};

export default Loader;
