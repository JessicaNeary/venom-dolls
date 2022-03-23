import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getEvents } from "../actions";
import Layout from "../components/Layout";

function Events({ location }) {
    const events = useSelector(store => store.events);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getEvents())
    }, [])
    return (
      <Layout path={location.pathname}>
        Events
      </Layout>
    );
  }
  
  export default Events;