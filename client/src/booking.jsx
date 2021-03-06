import React from 'react';

const BookingTable = ({booking, acceptRequest, rejectRequest, submitRequest, RequestType, type}) => (
  <div>
    <ul className="trainers w-list-unstyled">
      {booking.map((book, i) =>
        <RequestType key={i} service={book.service} duration={book.duration} userFirstname={book.userFirstname} date={book.date} userLastname={book.userLastname} bookingId={book._id} messages={book.messages} user={type} trainerName={book.trainerName} acceptRequest={acceptRequest} rejectRequest={rejectRequest} submitRequest={submitRequest} />
      )}
    </ul>
  </div>
);

export default BookingTable;
//reject Booking implementation to be added later
// rejectBooking={rejectBooking}
