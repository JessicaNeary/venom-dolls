import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";

import formatDate from "../utils/formatDate";
import formatLocation from "../utils/formatLocation";
import { getEvents } from "../actions";
import Layout from "../components/Layout";

function Events({ location }) {
    const dispatch = useDispatch();

    const eventsLoading = useSelector(store => store.eventsLoading);
    const events = useSelector(store => store.events);

    useEffect(() => {
      dispatch(getEvents())
    }, [])

    return (
      <Layout path={location.pathname}>
        <div className="pt-4 text-light d-flex flex-column justify-content-center align-items-center bg-black w-100">
          <h2 className="pt-4 pb-2 my-4">UPCOMING EVENTS</h2>
          {(() => {
            if (events.current[0]) {
              return (
                <div className="row justify-content-center">
                  {events.current.map(event => <EventItem event={event} />)}
                </div>)
            } else if (eventsLoading) {
              return (
                <div>Loading</div>
              )
            } else return (
              <div className="mb-4 pb-4 w-75 text-center">We currently don't have any events available to see online, but there are always plenty in the works, so follow our <a target="_blank" rel="noreferrer" href="https://www.facebook.com/thevenomdolls/">facebook page</a> to keep updated!</div>
            )
          })()}
          <h2 className="pt-4 pb-2 my-4">PAST EVENTS</h2>
          {(() => {
            if (events.past[0]) {
              return (
                <div className="row justify-content-center">
                {events.past.map(event => <EventItem event={event} isPast />)}
                </div>
              )
            } else if (eventsLoading) {
              return (
                <div>Loading</div>
              )
            } else return (
            <div className="mb-4">No past events found.</div>
            )
          })()}
        </div>
      </Layout>
    );
  }

  const EventItem = ({ event, isPast = false }) => (
    <Card className="mb-4 p-0 text-dark col-10 col-md-7" key={event.id}>
      <Card.Img variant="top" src={event.cover.source} alt={event.name} />
      <Card.Body>
        <Card.Title className="fw-bold">{event.name}</Card.Title>
        <Card.Subtitle className="text-secondary fw-bold">{formatDate(event.start_time)}</Card.Subtitle>
          <Card.Subtitle className="pt-4 text-primary">
          { event.place.location ?
          <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${formatLocation(event.place.location)}`}>
            {event.place.name}, {event.place.location.city}
          </a> : event.place.name
          }
        </Card.Subtitle>
        <div className="text-center mt-4">
        <a target="_black" rel="noreferrer" className={`my-2 btn btn-lg btn-outline-${isPast ? 'secondary disabled' : 'danger'}`} href={`https://www.facebook.com/events/${event.id}`}>Buy Tickets</a>
        </div>
      </Card.Body>
    </Card>
  );

  
// export const query = graphql`
// query {
//     e(id: {eq: $productId}) {
//         id
//         currency
//         unit_amount
//         product {
//         id
//         images
//         description
//         name
//         }
//     }
// }
// `
  
  export default Events;