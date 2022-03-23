import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
        <div className="pt-4 text-white d-flex flex-column justify-content-center align-items-center bg-dark w-100">
          <h2 className="py-4">UPCOMING EVENTS</h2>
          {(() => {
            if (events.current[0]) {
              return events.current.map(event => <EventItem event={event} />)
            } else if (eventsLoading) {
              return (
                <div>Loading</div>
              )
            } else return (
              <div className="mb-4">There are currently no upcoming events, but gigs are added regularly, so follow our facebook page to keep updated!</div>
            )
          })()}
          <h2 className="py-4">PAST EVENTS</h2>
          {(() => {
            if (events.past[0]) {
              return events.past.map(event => <EventItem event={event} />)
            } else if (eventsLoading) {
              return (
                <div>Loading</div>
              )
            } else return (
            <div className="mb-4">No past events found.</div>
            )
          })()}
        </div>
        Events
      </Layout>
    );
  }

  const EventItem = ({ event }) => (
    <div className="mb-4" key={event.id}>
      {event.name}
    </div>
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