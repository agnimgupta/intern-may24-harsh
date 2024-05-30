import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import React from 'react';

import Payment from './components/Payment';
import Chats from './components/Chats'
import Routines from './components/Routines';
import CreateRoutine from './components/CreateRoutine';
import Reminder from './components/Reminder';
import WeeklyBenefits from './components/WeeklyBenefits';
import AddYourProduct from './components/AddYourProduct';
import AssignCaregiver from './AssignCareGiver';
import Profile from './components/Profile';
import ReminderChannel from "./components/ReminderChannel";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";
import Appointments from "./components/Appointment";
import AppointmentDetails from "./components/AppointmentDetails";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Navigate replace to="/payment" />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
        {
          path: "/chat",
          element: <Chats />,
        },
        {
          path: "/routines",
          element: <Routines />,
        },
        {
          path: "/routine/add-reminder",
          element: <Reminder />,
        },
        {
          path: "/routines/create-routine",
          element: <CreateRoutine />,
        },
        {
          path: "/routine/create/weekly-benefits",
          element: <WeeklyBenefits />,
        },
        {
          path: "/routine/create/add-reminder/add-products",
          element: <AddYourProduct />,
        },
        {
          path: "/routine/create/add-reminder",
          element: <Reminder />,
        },
        {
          path: "/routine/create/assign-caregiver",
          element: <AssignCaregiver />,
        },
        {
          path: "/routine/create/add-reminder-channels",
          element: <ReminderChannel />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/appointment",
          element: <Appointments />,
        },
        {
          path: "/appointment/appointment-details",
          element: <AppointmentDetails />,
        },
        // {
        //   path: "/routine/:id",
        //   element: <RoutineDetails />,
        // },
      ],
    },
  ]);
  return (
    

    <RouterProvider router={router} />


  );
}

export default App;
