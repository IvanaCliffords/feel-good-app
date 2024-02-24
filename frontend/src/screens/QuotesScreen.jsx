import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  MobileStepper,
  Button,
  Paper,
  Typography,
  Card,
  CardContent,
  TextField,
} from "@material-ui/core";

import "./QuotesScreen.css";
import useStyles from "../components/Form/styles";

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const QuotesScreen = () => {
  const [quote, setQuote] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    updateQuote();
  }, []);

  const [activeQuotes, setActiveQuotes] = useState([]);

  useEffect(() => {
    fetchActiveQuotes();
  }, []);

  const maxSteps = activeQuotes.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const fetchActiveQuotes = async () => {
    try {
      const response = await fetch("/quotes/active");
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setActiveQuotes(data);
    } catch (err) {
      console.error(err);
      // Optionally, handle the error in UI
    }
  };

  async function updateQuote() {
    try {
      const response = await fetch("/quotes/random");
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setQuote(data);
    } catch (err) {
      console.error(err);
      setQuote({ content: "Oops... Something went wrong" });
    }
  }

  async function saveQuote() {
    try {
      const response = await fetch("/quotes/save", {
        // Updated endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiId: quote._id, // This should match the `_id` from the API
          content: quote.content, // This is the quote text
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to save quote");
      }
      fetchActiveQuotes();
    } catch (err) {
      console.error(err);
    }
  }

  const toggleStar = async (quoteId) => {
    try {
      const response = await fetch(`/quotes/toggle/${quoteId}`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Failed to toggle star");
      }
      fetchActiveQuotes();
    } catch (err) {
      console.error(err);
    }
  };

  const [searchString, setSearchString] = useState("");
  // debounce the fetch
  const handleSearchChange = async (event) => {
    setSearchString(event.target.value);
    if (event.target.value === "") {
      fetchActiveQuotes();
    } else {
      try {
        const response = await fetch(
          `/quotes/search?search=${event.target.value}`
        );
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        setActiveQuotes(data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <Grow in>
        <Container>
          <div className="first-wrapper">
            <div className="quote-container">
              <p className="quote-par">{quote.content}</p>
              <div className="card-footer">
                <Button className={classes.button} onClick={updateQuote}>
                  New Quote
                </Button>
                <Button className={classes.button} onClick={saveQuote}>
                  ☆ Star
                </Button>
              </div>
            </div>

            <div>
              <div className="search-container">
                <TextField
                  label="Search quotes"
                  type="text"
                  fullWidth
                  variant="outlined"
                  value={searchString}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
          <div className="slider-wrapper">
            {activeQuotes.length > 0 && activeQuotes[activeStep] && (
              <Paper square elevation={0} className={classes.header}>
                <Typography>{activeQuotes[activeStep].message}</Typography>
                <Button
                  onClick={() => toggleStar(activeQuotes[activeStep]._id)}
                >
                  {activeQuotes[activeStep].isActive ? "★" : "☆"}
                </Button>
              </Paper>
            )}

            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep}
              className="custom-stepper"
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  <KeyboardArrowLeft />
                  Back
                </Button>
              }
            />
          </div>
        </Container>
      </Grow>
    </>
  );
};

export default QuotesScreen;

