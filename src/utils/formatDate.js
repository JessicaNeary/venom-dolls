const formatDate = (start_time, end_time) => {
    const date = new Date(start_time);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    if (end_time) {
        const end_date = new Date(end_time);
        return `${date.toLocaleDateString('en-NZ', options)} at ${date.toLocaleTimeString('en-NZ')} - ${end_date.toLocaleTimeString('en-NZ')}`;
    }
    else return `${date.toLocaleDateString('en-NZ', options)} at ${date.toLocaleTimeString('en-NZ')}`;
};

export default formatDate;