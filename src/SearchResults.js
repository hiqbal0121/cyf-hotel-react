import moment from "moment";
import React from "react";

const TableHead = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Room ID</th>
        <th scope="col">Check-in Date</th>
        <th scope="col">Check-out Date</th>
        <th scope="col">Duration (Nights)</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  return (
    <tbody>
      {props.bookings.map((booking, index) => (
        <tr key={index}>
          <th scope="row">{booking.id}</th>
          <td>{booking.title}</td>
          <td>{booking.firstName}</td>
          <td>{booking.surname}</td>
          <td>{booking.email}</td>
          <td>{booking.roomId}</td>
          <td>{booking.checkInDate}</td>
          <td>{booking.checkOutDate}</td>
          <td>
            {moment(booking.checkOutDate).diff(
              moment(booking.checkInDate),
              "days"
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <TableHead />
        <TableBody bookings={props.results} />
      </table>
    </div>
  );
};

export default SearchResults;
