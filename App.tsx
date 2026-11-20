// src/App.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewRequest from "./pages/NewRequest";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import AdminWhitelist from "./pages/AdminWhitelist";
import PaymentPage from "./pages/PaymentPage";
import AdminUsers from "./pages/AdminUsers";
import AdminLogs from "./pages/AdminLogs";
import AdminPayments from "./pages/AdminPayments";
import AdminLawyers from "./pages/AdminLawyers";
import AdminComplaints from "./pages/AdminComplaints";
import Profile from "./pages/Profile";
import StorePage from "./pages/StorePage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import ConsumerRights from "./pages/ConsumerRights";
import LegalConsultation from "./pages/LegalConsultation";
import Consultation from "./pages/Consultation";
import Search from "./pages/Search";
import ResetPassword from "./pages/ResetPassword";
import MerchantInfo from "./pages/MerchantInfo";
import ConsumerInfo from "./pages/ConsumerInfo";
import ConsumerDashboard from "./pages/ConsumerDashboard";
import MerchantDashboard from "./pages/MerchantDashboard";
import LawyerDashboard from "./pages/LawyerDashboard";
import LawyerSignup from "./pages/LawyerSignup";
// ✅ استيراد صفحة الإشعارات
import NotificationsPage from "./pages/NotificationsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
              <Routes>
                {/* ========== المسارات العامة ========== */}
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/login" element={<Auth />} />
                <Route path="/register" element={<Auth />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/search" element={<Search />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/consumer-info" element={<ConsumerInfo />} />
                <Route path="/merchant-info" element={<MerchantInfo />} />
                <Route path="/consumer-rights" element={<ConsumerRights />} />
                <Route path="/legal-consultation" element={<LegalConsultation />} />
                <Route path="/lawyer-signup" element={<LawyerSignup />} />
                <Route path="/store/:id" element={<StorePage />} />

                {/* ========== لوحات التحكم (محمية) ========== */}
                <Route
                  path="/consumer-dashboard"
                  element={
                    <ProtectedRoute roles={["consumer"]}>
                      <ConsumerDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/merchant-dashboard"
                  element={
                    <ProtectedRoute roles={["merchant"]}>
                      <MerchantDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/lawyer-dashboard"
                  element={
                    <ProtectedRoute roles={["lawyer"]}>
                      <LawyerDashboard />
                    </ProtectedRoute>
                  }
                />
                {/* ✅ مسار الإشعارات للمحامي */}
                <Route
                  path="/lawyer-dashboard/notifications"
                  element={
                    <ProtectedRoute roles={["lawyer"]}>
                      <NotificationsPage />
                    </ProtectedRoute>
                  }
                />

                {/* ========== صفحات محمية عامة ========== */}
                <Route
                  path="/new"
                  element={
                    <ProtectedRoute roles={["consumer"]}>
                      <NewRequest />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/consultation"
                  element={
                    <ProtectedRoute>
                      <Consultation />
                    </ProtectedRoute>
                  }
                />

                {/* ========== مسارات المشرف (Admin) ========== */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute roles={["admin"]}>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/users"
                  element={
                    <ProtectedRoute roles={["admin"]}>
                      <AdminUsers />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/payments"
                  element={
                    <ProtectedRoute roles={["admin"]}>
                      <AdminPayments />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/logs"
                  element={
                    <ProtectedRoute roles={["admin"]}>
                      <AdminLogs />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/lawyers"
                  element={
                    <ProtectedRoute roles={["admin"]}>
                      <AdminLawyers />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/whitelist"
                  element={
                    <ProtectedRoute roles={["admin"]}>
                      <AdminWhitelist />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin/complaints"
                  element={
                    <ProtectedRoute roles={["admin"]}>
                      <AdminComplaints />
                    </ProtectedRoute>
                  }
                />

                {/* ========== 404 ========== */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </AuthProvider>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;