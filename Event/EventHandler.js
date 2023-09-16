// Import the BaseEventHandler module
const BaseEventHandler = require("./Base/BaseEventHandler");

/**
 * Project-specific event handler class extending from the base event handler.
 * @class EventHandler
 * @extends BaseEventHandler
 */
class EventHandler extends BaseEventHandler {

    /**
     * Shared event handler for use across instances.
     * @type {BaseEventHandler}
     * @static
     */
    static sharedEventHandler = new BaseEventHandler();

    /**
     * Creates a new instance of the project-specific event handler.
     */
    constructor() {
        super();
    }

    /**
     * Retrieves the shared event handler.
     * @returns {BaseEventHandler} Returns an instance of the shared event handler.
     */
    getSharedEventHandler() {
        return EventHandler.sharedEventHandler;
    }

    /**
     * Register an event using the shared event handler.
     * @param {string} eventName - Name of the event.
     * @param {Function} handler - Callback function for handling the event.
     */
    registerSharedEvent(eventName, handler) {
        EventHandler.sharedEventHandler.registerEvent(eventName, handler);
    }

    /**
     * Unregister an event using the shared event handler.
     * @param {string} eventName - Name of the event.
     * @param {Function} handler - Previously used callback function for the event.
     */
    unregisterSharedEvent(eventName, handler) {
        EventHandler.sharedEventHandler.unregisterEvent(eventName, handler);
    }

    /**
     * Emit a certain event on the shared event handler.
     * @param {string} eventName - Name of the event to be emitted.
     * @param {...any} args - Arguments to be passed to the event handlers.
     */
    emitSharedEvent(eventName, ...args) {
        EventHandler.sharedEventHandler.eventEmitter.emit(eventName, ...args);
    }

    /**
     * Check if a certain event is registered on the shared event handler.
     * @param {string} eventName - Name of the event.
     * @returns {boolean} Returns true if the event is registered, false otherwise.
     */
    hasSharedEvent(eventName) {
        return EventHandler.sharedEventHandler.hasEvent(eventName);
    }

    /**
     * Check if a specific handler is registered for a certain event on the shared event handler.
     * @param {string} eventName - Name of the event.
     * @param {Function} handler - Event handler function.
     * @returns {boolean} Returns true if the specified handler is registered for the event, false otherwise.
     */
    hasSharedHandler(eventName, handler) {
        return EventHandler.sharedEventHandler.hasHandler(eventName, handler);
    }
}

// Export the EventHandler class for use in other modules
module.exports = EventHandler;
