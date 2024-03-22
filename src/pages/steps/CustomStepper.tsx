import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SelectClient } from "./selectClient/SelectClient";
import { SelecOrder } from "./selectOrder/SelecOrder";
import { Completed } from "./completed/Completed";
import { themeYellow } from "../../components/customs/colors";
import { ThemeProvider } from "@mui/material";
import './customStepper.css'
import { useNavigate } from "react-router-dom";

const steps = ["Seleccionar cliente", "Seleccionar pedido", "Procesar"];

export const CustomStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const navigate = useNavigate();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    console.log(activeStep);
    if(activeStep == 0){
      navigate('/');
    }else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div className="w-[80%] mx-auto mt-10 bg-white p-8 rounded-xl shadow-2xl border-black border-2">
      <ThemeProvider theme={themeYellow}>
        <Box sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="my-8">
                  {activeStep == 0 && <SelectClient></SelectClient>}

                  {activeStep == 1 && <SelecOrder></SelecOrder>}

                  {activeStep == 2 && <Completed></Completed>}
                </div>

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>

                  <Button
                    color="ochre"
                    variant="contained"
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Volver
                  </Button>
                  
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    variant="contained"
                    color="ochre"
                    onClick={handleNext}
                    sx={{ mr: 1 }}
                  >
                    {activeStep == 2 ? "Completar" : "Siguiente"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </ThemeProvider>
    </div>
  );
};
