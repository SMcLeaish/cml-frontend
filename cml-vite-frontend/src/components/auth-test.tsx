import React, { useState } from "react";
import { useAuth } from "react-oidc-context";
import axios from "axios";

export const ApiTestComponent: React.FC = () => {
  const auth = useAuth();
  const [message, setMessage] = useState<string>("");

  const testApi = async () => {
    try {
      console.log("Auth Object:", auth);

      if (!auth.isAuthenticated) {
        console.error("User is not authenticated");
        setMessage("User is not authenticated. Please log in.");
        return;
      }

      if (!auth.user?.access_token) {
        console.error("No access token found");
        setMessage("No access token found. Please check your authentication.");
        return;
      }

      console.log("Access Token:", auth.user?.access_token);

      const response = await axios.get("http://localhost:3501/agent", {
        headers: {
          Authorization: `Bearer ${auth.user?.access_token}`,
        },
      });

      console.log("API Response:", response.data);

      setMessage("Check console for the token and API response.");
    } catch (error) {
      console.error("API call failed", error);
      setMessage("Error: Unable to fetch data. Check console for details.");
    }
  };

  return (
    <div>
      <button onClick={testApi} disabled={!auth.isAuthenticated}>
        Test API Call
      </button>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};
