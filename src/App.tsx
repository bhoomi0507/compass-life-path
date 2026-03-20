import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProfileSetup from "./pages/ProfileSetup";
import LifestyleAssessment from "./pages/LifestyleAssessment";
import CareerRecommendations from "./pages/CareerRecommendations";
import CareerSimulation from "./pages/CareerSimulation";
import LearningPath from "./pages/LearningPath";
import Dashboard from "./pages/Dashboard";
import Opportunities from "./pages/Opportunities";
import { Navigate } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileSetup />} />
          <Route path="/lifestyle" element={<LifestyleAssessment />} />
          <Route path="/recommendations" element={<CareerRecommendations />} />
          <Route path="/simulation" element={<CareerSimulation />} />
          <Route path="/learning-path" element={<LearningPath />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
