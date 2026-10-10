import { Box, Button, TextField, Typography } from "@mui/material";
import "./Messages.css";
import { useState } from "react";
import { getMessage, postNewMessage } from "../../services/service";

const Messages = () => {
  const [postMessage, setPostMessage] = useState("");
  const [messageId, setMessageId] = useState("");
  const [responseId, setResponseId] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handlePostMessageInput = (value: any) => {
    setPostMessage(value);
  };

  const handlePostMessage = async () => {
    if (postMessage != "") {
      const response = await postNewMessage(postMessage);
      setResponseId(response);
    }
  };

  const handleGetMessageInput = (messageId: any) => {
    setMessageId(messageId);
  };

  const handleGetMessage = async () => {
    if (messageId != "") {
      const response = await getMessage(messageId);
      setResponseMessage(response.message);
    }
  };

  return (
    <Box>
      <Box className="messages-title">
        <Typography variant="h2">Message Board 📨</Typography>
      </Box>
      <Box className="messages-main-container">
        <Box className="messages-container">
          <Typography variant="h4" sx={{ margin: "1rem" }}>
            Post a message
          </Typography>
          <TextField
            className="message-input "
            label="Your message"
            variant="outlined"
            value={postMessage}
            onChange={(event) => handlePostMessageInput(event.target.value)}
            sx={{ margin: "1rem" }}
          />
          <Button
            variant="outlined"
            onClick={handlePostMessage}
            sx={{ margin: "1rem" }}
          >
            Post
          </Button>
          {responseId && (
            <>
              {" "}
              <Box sx={{ margin: "1rem" }}>
                <Typography>
                  Latest message ID:{" "}
                  <span className="response-message">{responseId}</span>
                </Typography>
              </Box>
            </>
          )}
        </Box>
        <Box className="messages-container">
          <Typography variant="h4" sx={{ margin: "1rem" }}>
            Get a message
          </Typography>
          <TextField
            className="message-input "
            label="Message ID"
            variant="outlined"
            value={messageId}
            onChange={(event) => handleGetMessageInput(event.target.value)}
            sx={{ margin: "1rem" }}
          />
          <Button
            variant="outlined"
            onClick={handleGetMessage}
            sx={{ margin: "1rem" }}
          >
            Get
          </Button>
          {responseMessage && (
            <Box sx={{ margin: "1rem" }}>
              <Typography>
                Message:{" "}
                <span className="response-message">{responseMessage}</span>
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Button
        component="a"
        href="http://localhost:8080/openapi"
        target="_blank"
        rel="noopener noreferrer"
        variant="text"
        sx={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          textTransform: "none",
        }}
      >
        Psssssssssssssst ! Go to the swagger page here 🕵️‍♂️
      </Button>
    </Box>
  );
};

export default Messages;
