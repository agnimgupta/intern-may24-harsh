import React, { useState } from 'react';
import ReminderItems from './ReminderItems';
import ActivityAndProductBased from './ActivityAndProductBased';
import AddTimeSlot from './AddTimeSlots';
const ReminderForm = () => {

  const [step, setStep] = useState(1);

  const [reminderType, setReminderType] = useState('');

  const [activityDetails, setActivityDetails] = useState({
    name: '',
    type: '',
    goal: '',
    unit: '',
    frequency: 'Daily',
    customDays: []
  });
  const [timeSlots, setTimeSlots] = useState([]);
//   const [productDetails, setProductDetails] = useState({
//     name: '',
//     type: '',
//     goal: '',
//     unit: '',
//     frequency: 'Daily',
//     customDays: []
//   });

  const handleSelectType = (type) => {
    setReminderType(type);
    if (type === 'Product based') {
      setStep(2);
    } else if (type === 'Activity based') {
      setStep(3);
    }
  };

  const handleNext = () => {
    setStep(4);
  };

  const handleDone = (slots) => {
    setTimeSlots(slots);
    console.log('Selected Time Slots:', slots);
    // Perform any final actions like submitting the form
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <div className="w-full m:w-[100%] xl:w-[90%] p-4 ">
      {step === 1 && <ReminderItems onSelectType={handleSelectType} />}
      {step === 2 && (
        <ActivityAndProductBased
          onNext={handleNext}
          activityDetails={activityDetails}
          setActivityDetails={setActivityDetails}
          onBack={handleBack}
          type={reminderType}
        />
      )}
      {step === 3 && (
        <ActivityAndProductBased
        onNext={handleNext}
        activityDetails={activityDetails}
        setActivityDetails={setActivityDetails}
        onBack={handleBack}
        type={reminderType}
      />
      )}
      {step === 4 && <AddTimeSlot onDone={handleDone} onBack={() => setStep(3)} />}
    </div>
  );
};

export default ReminderForm;
