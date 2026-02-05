import React, { useState, useCallback } from "react";
import { useStudentBookingsQuery } from "../_hooks/useStudentQueries";
import { useStudentCancelBookingMutation, useStudentJoinAppointmentMutation } from "../_hooks/useStudentActions";
import AppointmentListView from "../_components/AppointmentListView";

const AppointmentListContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dialogId, setDialogId] = useState<string | null>(null);
  const [currentBookingId, setCurrentBookingId] = useState<string | null>(null);

  const { data, isLoading, isError, refetch } = useStudentBookingsQuery(currentPage);
  const cancelMutation = useStudentCancelBookingMutation();
  const joinMutation = useStudentJoinAppointmentMutation();

  const handlePageChange = useCallback((page: number) => {
    if (page < 1) return;
    setCurrentPage(page);
  }, []);

  const handleCancelBooking = useCallback(async (id: string) => {
    setCurrentBookingId(id);
    const formData = new FormData();
    formData.append("bookingId", id);
    formData.append("role", "student");
    
    try {
      await cancelMutation.mutateAsync(formData);
    } finally {
      setCurrentBookingId(null);
    }
  }, [cancelMutation]);

  const handleJoinAppointment = useCallback(async (id: string) => {
    setCurrentBookingId(id);
    const formData = new FormData();
    formData.append("bookingId", id);
    
    try {
      await joinMutation.mutateAsync(formData);
    } finally {
      setCurrentBookingId(null);
    }
  }, [joinMutation]);

  const handleDialogChange = useCallback((id: string | null) => {
    setDialogId(id);
  }, []);

  const handleRetry = useCallback(() => {
    refetch();
  }, [refetch]);

  const bookings = data?.bookings || [];

  return (
    <AppointmentListView
      bookings={bookings}
      isLoading={isLoading}
      isError={isError}
      currentPage={data?.currentPage || 1}
      totalPages={data?.totalPages || 1}
      hasNext={data?.hasNext || false}
      hasPrev={data?.hasPrev || false}
      currentBookingId={currentBookingId}
      dialogId={dialogId}
      isCancelling={cancelMutation.isPending}
      isJoining={joinMutation.isPending}
      onPageChange={handlePageChange}
      onCancelBooking={handleCancelBooking}
      onJoinAppointment={handleJoinAppointment}
      onDialogChange={handleDialogChange}
      onRetry={handleRetry}
    />
  );
};

export default AppointmentListContainer;
