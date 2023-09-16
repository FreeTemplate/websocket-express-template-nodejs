
How to Add New Events
=====================

Adding custom events to the project is straightforward. Follow these steps to seamlessly integrate new events:

### 1. Define Your Event Constant:

- Navigate to the `events` directory or file.
- Declare a constant for your new event. This helps in standardizing the event names and makes it easier to reference them later.

```javascript
const YOUR_NEW_EVENT = 'YourNewEventName';
```

### 2. Emit Your Event:

- In the desired location within your code (for instance, upon receiving a specific type of message in `GameClient`), emit the event.

```javascript
if (message.type === "TriggerSth") {
    // Your specific logic here...
    this.eventHandler.emitSharedEvent(events.YOUR_NEW_EVENT, data);
}
```

### 3. Register the Event Handler:

- Register a handler for your new event in the `GameEventManager` or any other appropriate event manager class.

- Ensure you do this registration within the constructor or an initialization method.

```javascript
constructor() {
    // Existing event registrations...
    sharedEventHandler.registerEvent(events.YOUR_NEW_EVENT, this.yourEventHandlerFunction.bind(this));
}
```

By following the steps above, you can effortlessly add and manage custom events within the project.
