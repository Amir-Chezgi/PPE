import { SendAndArchiveOutlined } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Analytics from "@mui/icons-material/Analytics";
import Assignment from "@mui/icons-material/Assignment";
import Handshake from "@mui/icons-material/Handshake";
import React from "react";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <Box
          bgcolor="skyblue"
          flex={1}
          p={2}
          sx={{ display: { xs: "none", sm: "block " } }}
        >
          left
        </Box>
        <Box bgcolor="pink" flex={4} p={2}>
          {" "}
          midel
        </Box>
        <Box
          //   bgcolor="lightcoral"
          flex={1}
          p={2}
          sx={{ display: { xs: "none", sm: "block " } }}
        >
          <ListItemButton>
            <ListItemIcon>
              <Analytics />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
          <ListItemButton>
            <Link
              to="/Projectmanagement"
              style={{
                textDecoration: "inherit",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ListItemIcon>
                <Assignment />
              </ListItemIcon>
              <ListItemText primary="Project Managment" />
            </Link>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Handshake />
            </ListItemIcon>
            <ListItemText primary="Logistics" />
          </ListItemButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
