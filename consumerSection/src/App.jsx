import React from 'react';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import Payment from './Pages/Payment';
import CallRecording from "./Pages/CallRecording";
import Chats from './components/Chats';
import Reminder from './Pages/Reminder';
import WeeklyBenefits from './Pages/WeeklyBenefits';
import AddYourProduct from './components/AddYourProduct';
import AssignCaregiver from './AssignCareGiver';
import Profile from './components/Profile';
import ReminderChannel from "./components/ReminderChannel";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";
import Appointments from "./Pages/Appointment";
import AppointmentDetails from "./components/AppointmentDetails";
import MedicalRecord from "./Pages/MedicalRecord";
import Login from "./components/Login";
import Doctor from "./Pages/Doctor";
import AppointmentBookingPage from "./Pages/AppointmentBookingPage";
import CreateRoutine from './Pages/CreateRoutine';
import Routines from "./Pages/Routines";
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Doctor />
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/payment",
          element: (
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          ),
        },
        {
          path: "/call-recording",
          element: (
            <ProtectedRoute>
              <CallRecording />
            </ProtectedRoute>
          ),
        },
        {
          path: "/appointment-booking",
          element: (
            <ProtectedRoute>
              <AppointmentBookingPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/medical-records",
          element: (
            <ProtectedRoute>
              <MedicalRecord />
            </ProtectedRoute>
          ),
        },
        {
          path: "/chat",
          element: (
            <ProtectedRoute>
              <Chats />
            </ProtectedRoute>
          ),
        },
        {
          path: "/routines",
          element: (
            <ProtectedRoute>
              <Routines />
            </ProtectedRoute>
          ),
        },
        {
          path: "/routine/add-reminder",
          element: (
            <ProtectedRoute>
              <Reminder />
            </ProtectedRoute>
          ),
        },
        {
          path: "/routines/create-routine",
          element: (
            <ProtectedRoute>
              <CreateRoutine />
            </ProtectedRoute>
          ),
        },
        {
          path: "/routine/create/weekly-benefits",
          element: (
            <ProtectedRoute>
              <WeeklyBenefits />
            </ProtectedRoute>
          ),
        },
        {
          path: "/routine/create/add-reminder/add-products",
          element: (
            <ProtectedRoute>
              <AddYourProduct />
            </ProtectedRoute>
          ),
        },
        {
          path: "/routine/create/add-reminder",
          element: (
            <ProtectedRoute>
              <Reminder />
            </ProtectedRoute>
          ),
        },
        {
          path: "/routine/create/assign-caregiver",
          element: (
            <ProtectedRoute>
              <AssignCaregiver />
            </ProtectedRoute>
          ),
        },
        {
          path: "/routine/create/add-reminder-channels",
          element: (
            <ProtectedRoute>
              <ReminderChannel />
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/appointment",
          element: (
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          ),
        },
        {
          path: "/appointment/appointment-details",
          element: (
            <ProtectedRoute>
              <AppointmentDetails />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
