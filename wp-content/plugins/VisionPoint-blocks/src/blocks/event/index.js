import './style.scss';
const { registerBlockType } = window.wp.blocks;
const { InspectorControls } = window.wp.blockEditor;
const { PanelBody, TextControl, TextareaControl, Button, ToggleControl } = window.wp.components;
const { Fragment } = window.wp.element;

registerBlockType('blocks/event-block', {
  title: 'Event Block',
  category: 'common',

  attributes: {
    events: {
      type: 'array',
      default: [
        {
          date: '',
          startTime: '',
          endTime: '',
          eventName: '',
          description: '',
          link: '',
        },
      ],
    },
    showEvents: {
      type: 'boolean',
      default: true,
    },
  },

  edit: function (props) {
    const { attributes, setAttributes } = props;
    const { events, showEvents } = attributes;

    function onChangeEvent(newEvent, index) {
      const newEvents = Array.from(events);
      newEvents[index] = newEvent;
      setAttributes({ events: newEvents });
    }

    function addEvent() {
      const newEvent = {
        startTime: '',
        endTime: '',
        eventName: '',
        description: '',
        link: '',
        date: '',
      };
      const newEvents = Array.from(events);
      newEvents.push(newEvent);
      setAttributes({ events: newEvents });
    }

    function removeEvent(index) {
      const newEvents = Array.from(events);
      newEvents.splice(index, 1);
      setAttributes({ events: newEvents });
    }

    function toggleShowEvents() {
      setAttributes({ showEvents: !showEvents });
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title="Event Details" initialOpen={true}>
            {events.map((event, index) => (
              <div key={index}>
                <h3>Event {index + 1}</h3>
                <TextControl
                  label="Date "
                  type="date"
                  value={event.date}
                  onChange={(dateT) =>
                    onChangeEvent(
                      Object.assign({}, event, { date: dateT }),
                      index
                    )
                  }
                />
                <TextControl
                  label="Start Time"
                  type="time"
                  value={event.startTime}
                  onChange={(newStartTime) =>
                    onChangeEvent(
                      Object.assign({}, event, { startTime: newStartTime }),
                      index
                    )
                  }
                />
                <TextControl
                  label="End Time"
                  type="time"
                  value={event.endTime}
                  onChange={(newEndTime) =>
                    onChangeEvent(
                      Object.assign({}, event, { endTime: newEndTime }),
                      index
                    )
                  }
                />
                <TextControl
                  label="Event Name"
                  value={event.eventName}
                  onChange={(newEventName) =>
                    onChangeEvent(
                      Object.assign({}, event, { eventName: newEventName }),
                      index
                    )
                  }
                />
                <TextareaControl
                  label="Description"
                  value={event.description}
                  onChange={(newDescription) =>
                    onChangeEvent(
                      Object.assign({}, event, { description: newDescription }),
                      index
                    )
                  }
                />
                <TextControl
                  label="Link"
                  value={event.link}
                  onChange={(newLink) =>
                    onChangeEvent(
                      Object.assign({}, event, { link: newLink }),
                      index
                    )
                  }
                />
                <Button onClick={() => removeEvent(index)} isDestructive>
                  Remove Event
                </Button>
              </div>
            ))}
            <Button onClick={addEvent}>Add Event</Button>
          </PanelBody>
          <PanelBody title="Display Options" initialOpen={true}>
            <ToggleControl
              label="Show Events Horizental / Vertical "
              checked={showEvents}
              onChange={toggleShowEvents}
            />
          </PanelBody>
        </InspectorControls>
        <div>
           {events.map((event, index) => (
            <div key={index}>
              <h3>Event {index + 1}</h3>
              <p>Start Time: {event.startTime}</p>
              <p>End Time: {event.endTime}</p>
              <p>Event Name: {event.eventName}</p>
              <p>Description: {event.description}</p>
              <p>Link: {event.link}</p>
            </div>
          ))}
        </div>
      </Fragment>
    );
  },

  save: function (props) {
    const { attributes } = props;
    const { events, showEvents } = attributes;

    if (!showEvents) {
    //   return null; // Don't render anything if showEvents is false
    

    return (
      <div>
        <div className="row">
          {events.map((event, index) => {
          
  
              const startTime = new Date(`01/01/2000 ${event.startTime}`);
              const formattedStartTime = startTime.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              });
  
              const endTime = new Date(`01/01/2000 ${event.endTime}`);
              const formattedEndTime = endTime.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              });
            const eventDate = new Date(event.date);
            const monthAbbreviation = eventDate.toLocaleString('en-US', { month: 'short' });
            const day = eventDate.getDate();
            return (
              <div className="col-md-4 onhover" style={{ paddingBottom: '22px' }}>
                <div className="date-main">
                  <h5>{monthAbbreviation}</h5>
                  <h3>{day}</h3>
                </div>
                <div className="main-div">
                  <div className="main-time">
                    <span>
                    {formattedStartTime} - {formattedEndTime}
                    </span>
                  </div>
                  <h6>{event.eventName}</h6>
                  <p>{event.description}</p>
                  <a href={event.link} className="font-arrow">CTA  <i className="fa fa-chevron-right"></i></a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
        }else{

           return (
        <div>
          {events.map((event, index) => {
            const eventDate = new Date(event.date);
            const monthAbbreviation = eventDate.toLocaleString('en-US', { month: 'short' });
            const day = eventDate.getDate();

            const startTime = new Date(`01/01/2000 ${event.startTime}`);
            const formattedStartTime = startTime.toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            });

            const endTime = new Date(`01/01/2000 ${event.endTime}`);
            const formattedEndTime = endTime.toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            });
            return (
              <div className="row" key={index}>
                <div className="col-md-6 onhover" style={{ paddingBottom: '22px' }}>
                  <div className="date-main">
                    <h5>{monthAbbreviation}</h5>
                    <h3>{day}</h3>
                  </div>
                  <div className="main-div">
                    <div className="main-time">
                    {formattedStartTime} - {formattedEndTime}
                    </div>
                    <h6>{event.eventName}</h6>
                    <p>{event.description}</p>
                    <a href={event.link} className="font-arrow">CTA <i className="fa fa-chevron-right"></i></a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
        }
  },
});
