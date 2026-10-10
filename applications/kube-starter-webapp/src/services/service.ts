export const postNewMessage = async (message: any) => {
  try {
    const response = await fetch(`/api/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Posted message ID: ", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMessage = async (messageId: any) => {
  try {
    const response = await fetch(`/api/message/${messageId}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Server responded with message: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
