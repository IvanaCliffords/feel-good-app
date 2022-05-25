import React, { useState, useEffect } from "react";
import { Container, Grow } from "@material-ui/core";
import "./QuotesScreen.css";
import { Button } from "@material-ui/core";
import useStyles from "../components/Form/styles";

const QuotesScreen = () => {
  const [quote, setQuote] = useState("");
  const classes = useStyles();

  useEffect(() => {
    updateQuote();
  }, []);

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...quote } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setQuote(quote);
    } catch (err) {
      console.err(err);
      setQuote({ content: "Opps... Something went wrong" });
    }
  }

  return (
    <>
      <Grow in>
        <Container>
          <div className="quote-container">
            <p className="quote-par">{quote.content}</p>
            <div className="card-footer">
              <button className="main-btn" onClick={updateQuote}>
                New Quote
              </button>
            </div>
          </div>
        </Container>
      </Grow>
    </>
  );
};

export default QuotesScreen;
