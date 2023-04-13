import React, { useState } from "react";
import axios from "axios";
import Flight from "../Loader/Flight";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/styles";

const FormChatBot = ({ props }) => {
  const [submitLoader, setSubmitLoader] = useState(false);
  const [typeTravelers, setTypeTravelers] = useState("Family");
  const [durringTrip, setDurringTrip] = useState("2 Days");
  const [budget, setBudget] = useState("Moderate");

  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    country: "Israel",
    travelers: "Family",
    budget: "Moderate",
    durringTrip: "2 Days",
  });

  const handleChange = (event) => {
    setTypeTravelers(event.target.value);
    setFormValues({ ...formValues, travelers: event.target.value });
  };

  const handleChangeDurringTrip = (event) => {
    setDurringTrip(event.target.value)
    setFormValues({ ...formValues, durringTrip: event.target.value });
  }

  const handleChangeBudget = (event) => {
    console.log(event);
    setBudget(event.target.value)
    setFormValues({ ...formValues, budget: event.target.value });
  }

  const BoxDurringTrip = (day) => {
    let days = [];
    for (let day = 1; day <= 60 ; day++) {
      days.push(
          <MenuItem value={`${day} Days`}>
            <em>{`${day} Days`}</em>
        </MenuItem>
        );
    }
    return days;
  }

  const BoxBudget = () => {
    let budgets = ['Premium', 'Lexury', 'Upscale' , 'Back-Packing' , "Moderate"];
    let boxData = budgets.map(budget => {
     return  (
      <MenuItem value={budget}>
      <em>{budget}</em>
    </MenuItem>
     )})
    return boxData;
  }


  const RequestChat = (e) => {
    console.log(e);
    axios
      .post("https://dream-trip-3908.onrender.com/gpt/", {
        travelers: e.travelers,
        budget: e.budget,
        mainland: e.country,
        durring:e.durringTrip,
      })
      .then((res) => {
        console.log(res.data);
        // const responseServer = res.data.message.message.content;
        // console.log(responseServer);
        // props.setResponseBot(responseServer);
        // setSubmitLoader(false);
      })
      .catch((err) => {
        setSubmitLoader(false);
        console.log(err);
      });
  };

  return (
    <>
      <form
        className={classes.warp}
        onSubmit={(e) => {
          props.setController(2);
          e.preventDefault();
          RequestChat(formValues);
          setSubmitLoader(true);
        }}
      >
        {props.controller == 0 ? (
          <>
            <TextField
              onChange={(e) =>
                setFormValues({ ...formValues, country: e.target.value })
              }
              label="Your Next Trip"
              variant="standard"
            />
            {/* <TextField
              onChange={(e) =>
                setFormValues({ ...formValues, budget: e.target.value })
              }
              label="What is your Budget"
              variant="standard"
            /> */}

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">
                  Budget
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={budget}
                  label="Type Travelers"
                  onChange={handleChangeBudget}
                >
               {
               BoxBudget()
               }
                </Select>
              </FormControl>
            </Box>
          </>
        ) : props.controller == 1 ? (
        <>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">
                  Type Travelers 
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={typeTravelers}
                  label="Type Travelers"
                  onChange={handleChange}
                >
                  <MenuItem value={"Alone"}>
                    <em>Alone</em>
                  </MenuItem>
                  <MenuItem value={"Family"}>
                    <em>Family</em>
                  </MenuItem>
                  <MenuItem value={"Couple"}>
                    <em>Couple</em>
                  </MenuItem>
                  <MenuItem value={"Friends"}>
                    <em>Friends</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">
                  Durring Trip 
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={durringTrip}
                  label="Type Travelers"
                  onChange={handleChangeDurringTrip}
                >
               {
               BoxDurringTrip()
               }
                </Select>
              </FormControl>
            </Box>

            


        </>
        ) : null}

      <div className={classes.buttons}>
        {props.controller < 1 && (
          <Button
            variant="contained"
            color="success"
            onClick={() =>
              props.setController((controller) => {
                if (controller < 2) return controller + 1;
                return controller;
              })
            }
          >
            Next
          </Button>
        )}

        {props.controller != 0 && props.controller != 2 && (
          <Button
            variant="contained"
            color="success"
            onClick={() =>
              props.setController((controller) => {
                if (controller > 0) return controller - 1;
                return controller;
              })
            }
          >
            Back
          </Button>
        )}

        {props.controller == 1 && (
          <Button
            type="submit"
            variant="contained"
            endIcon={<FlightTakeoffIcon />}
          >
            Searching
          </Button>
        )}

      </div>
      </form>
      {submitLoader && <Flight />}

    </>
  );
};
export default FormChatBot;

const useStyles = makeStyles({
  warp: {
    paddingTop: '20px',
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    height: "50%",
    alignItems: "stretch",
  },
  buttons:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  }
});
