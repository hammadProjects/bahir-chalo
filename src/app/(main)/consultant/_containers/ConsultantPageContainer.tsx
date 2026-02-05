const ConsultantPageContainer = () => {
    return (
        <TabsContent value="earnings">Earnings</TabsContent>
      <TabsContent value="bookings">
        {bookings?.data && (
          <Bookings
            data={bookings.data}
            handlePageChange={handlePageChange}
            refetch={async () => await bookings.refetch()}
          />
        )}
      </TabsContent>
      <TabsContent value="availability">
        <Availability
          isLoading={availabilities.isLoading}
          availability={availabilities.data?.availability || null}
          refetch={refetchAvailability}
        />
      </TabsContent>
    )
}