interface StepProgressProps {
    steps: number[];
    currentStep: number;
    onStepChange: (step: number) => void;
}