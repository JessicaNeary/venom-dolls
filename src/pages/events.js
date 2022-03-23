import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getEvents } from "../actions";
import Layout from "../components/Layout";

function Events({ location }) {
    const pastEvents = useSelector(store => store.pastEvents);
    const currentEvents = useSelector(store => store.currentEvents);
    console.log(pastEvents)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getEvents())
    }, [])
    return (
      <Layout path={location.pathname}>
        <div className="pt-4 text-white d-flex flex-column justify-content-center align-items-center bg-dark w-100">
          <h2 className="py-4">UPCOMING EVENTS</h2>
          { currentEvents[0] ?
            currentEvents.map(event => <EventItem event={event} />) :
            <div className="mb-4">There are currently no upcoming events, but gigs are added regularly, so follow our facebook page to keep updated!</div>
          }
          <h2 className="py-4">PAST EVENTS</h2>
          { pastEvents[0] ?
            pastEvents.map(event => <EventItem event={event} />) : <div>idk</div>
          }
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
  
  export default Events;