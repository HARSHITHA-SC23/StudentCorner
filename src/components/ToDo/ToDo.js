import { Button } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom'
import "../ToDo/style.css";


const ToDo = () => {
    const history = useHistory();
    return (
        <div className="hi">
            <Button 
            href="https://calendar.google.com/calendar/u/0/r" 
            variant="contained" 
            color="secondary"
            align="center">
                Click to view Google calendar
            </Button>
        </div>
    )
}

export default ToDo