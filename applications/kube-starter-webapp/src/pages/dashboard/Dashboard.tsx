import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h2">Welcome to the Kube Starter WebApp</Typography>
        <Typography sx={{ marginTop: "4rem" }}>
          If you're seeing this page then your cluster is working 🚀
        </Typography>
        <Typography variant="h5" sx={{ marginTop: "4rem" }}>
          Congratulations 💫
        </Typography>
        <Box sx={{ marginTop: "3rem" }}>
          <Link to={"/messages"}>
            <Button variant="outlined">Now test the API !</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
