import React from "react";

import {
  TextField,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormControl,
  FormHelperText,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));

const Home = () => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="container">
     
      <p className="info"><b>General Information</b></p>
      <div className="box-secondary">
        <form onSubmit={handleSubmit(onSubmit)}>

          
         
      
          {/* 4) TextField */}
          <TextField
            placeholder="Enter Your Phone Number"
            label="Phone"
            variant="outlined"
            fullWidth
            className={classes.inputField}
            name="phone"
            inputRef={register({
              required: "Phone Number is required.",
            })}
            error={Boolean(errors.phone)}
            helperText={errors.phone?.message}
          />
          
          <FormControl
            fullWidth
            className={classes.inputField}
            error={Boolean(errors.course)}
          >
            <InputLabel id="demo-simple-select-label">
              Select Your Language
            </InputLabel>
            <Controller
              render={(props) => (
                <Select value={props.value} onChange={props.onChange}>
                  <MenuItem value="">Choose your Language</MenuItem>
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Telugu">Telugu</MenuItem>
                  <MenuItem value="Hindi">Hindi</MenuItem>
                  <MenuItem value="Malyalam">Malayalam</MenuItem>
                </Select>
              )}
              name="language"
              control={control}
              defaultValue=""
              rules={{
                required: "please choose your Language.",
              }}
            />
            <FormHelperText>{errors.course?.message}</FormHelperText>
          </FormControl>
          <FormControl
            fullWidth
            className={classes.inputField}
            error={Boolean(errors.course)}
          >
            <InputLabel id="demo-simple-select-label">
              Select Your Time Zone
            </InputLabel>
            <Controller
              render={(props) => (
                <Select value={props.value} onChange={props.onChange}>
                  <MenuItem value="">Choose your Time Zone</MenuItem>
                  <MenuItem value="UTC-5">UTC-5</MenuItem>
                  <MenuItem value="UTC-5.30">UTC-5.30</MenuItem>
                  <MenuItem value="UTC-6">UTC-6.</MenuItem>
                  <MenuItem value="UTC-7.30">UTC-7.30</MenuItem>
                </Select>
              )}
              name="language"
              control={control}
              defaultValue=""
              rules={{
                required: "please choose your Time Zone.",
              }}
            />
            <FormHelperText>{errors.course?.message}</FormHelperText>
          </FormControl>


          {/* Radio Buttons */}
          <FormControl
            className={classes.inputField}
            error={Boolean(errors.gender)}
          >
            <FormLabel>Choose Your Date format</FormLabel>
            <RadioGroup row name="date">
              <FormControlLabel
                value="May 18,2018"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your Date Format",
                    })}
                  />
                }
                label="May 18,2018"
              />
              <FormControlLabel
                value="2018 May,18"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your Date Format",
                    })}
                  />
                }
                label="2018 May,18"
              />
              <FormControlLabel
                value="2018-03-10"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your Date Format",
                    })}
                  />
                }
                label="2018-03-10"
                checked="checked"
              />
              <FormControlLabel
                value="18/05/2018"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your Date Format",
                    })}
                  />
                }
                label="18/05/2018"
              />
              <FormControlLabel
                value="02/09/2018"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your Date Format",
                    })}

                  />
                }
                
                label="02/09/2018"
              />
             
            </RadioGroup>
            <FormHelperText>{errors.gender?.message}</FormHelperText>
          </FormControl>
         <p><b>Email form Lucid</b></p>
         <p>I'd like to receive the folowing emails :  </p>
          <FormControl
            error={Boolean(errors.tnc)}
            style={{ display: "block", marginBottom: 15 }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  name="tnc"
                  inputRef={register({
                    required: "Weekly account summary",
                  })}
                />
              }
              label="Weekly account summary"
              checked
            /><br></br>
            <FormControlLabel
              control={
                <Checkbox
                  name="tnc"
                  inputRef={register({
                    required: "campaign reports",
                  })}
                />
              }
              label="campaign reports"
            /><br></br>
            <FormControlLabel
              control={
                <Checkbox
                  name="tnc"
                  inputRef={register({
                    required: "Promotional news such as offers or discounts",
                  })}
                />
              }
              checked
              label="Promotional news such as offers or discounts"
            /><br></br>
            <FormControlLabel
              control={
                <Checkbox
                  name="tnc"
                  inputRef={register({
                    required: "Tips for campaign setup, growth and client success stories",
                  })}
                />
              }
              checked
              label="Tips for campaign setup, growth and client success stories"
            />
            <FormHelperText>{errors.tnc?.message}</FormHelperText>
          </FormControl>

          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
          <Button variant="contained" color="info" type="submit">
            Cancel
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
