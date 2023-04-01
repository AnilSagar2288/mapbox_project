import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ variant, children }) => {
  const [time, setTime] = useState(false);
  return (
    <>
      {time && (
        <Alert variant={variant} style={{ fontSize: 20 }}>
          {children}
        </Alert>
      )}
    </>
  );
};

export default ErrorMessage;
