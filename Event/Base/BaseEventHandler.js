// Import the EventEmitter module from Node.js
const EventEmitter = require("events");

/**
 * Base event handler class that provides basic functionalities for registering and managing events.
 * @class BaseEventHandler
 */
class BaseEventHandler {
    /** 
     * @type {EventEmitter} 
     * The event emitter responsible for managing all the event listeners.
     */
    eventEmitter;

    /**
     * @type {Object} 
     * Object to keep track of handlers for each event.
     */
    registeredHandlers;

    /**
     * Creates a new instance of the BaseEventHandler.
     */
    constructor() {
        this.eventEmitter = new EventEmitter();
        this.registeredHandlers = {};
    }

    /**
     * Registers an event handler.
     * @param {string} eventName - Name of the event.
     * @param {Function} handler - Event handler function.
     */
    registerEvent(eventName, handler) {
        if (!this.registeredHandlers[eventName]) {
            this.registeredHandlers[eventName] = [];
        }

        if (!this.hasHandler(eventName, handler)) {
            this.registeredHandlers[eventName].push(handler);
            this.eventEmitter.on(eventName, handler);
        }
    }

    /**
     * Checks whether a specific event name has been registered.
     * @param {string} eventName - Event name to check.
     * @returns {boolean} Returns true if the event name is registered, false otherwise.
     */
    hasEvent(eventName) {
        return !!this.registeredHandlers[eventName];
    }

    /**
     * Checks whether a specific event has the given handler.
     * @param {string} eventName - Name of the event.
     * @param {Function} handler - Event handler function to check.
     * @returns {boolean} Returns true if the specified handler exists, false otherwise.
     */
    hasHandler(eventName, handler) {
        return (
            this.registeredHandlers[eventName] &&
            this.registeredHandlers[eventName].includes(handler)
        );
    }

    /**
     * Unregisters an event handler.
     * @param {string} eventName - Name of the event.
     * @param {Function} handler - Event handler function.
     */
    unregisterEvent(eventName, handler) {
        if (this.registeredHandlers[eventName]) {
            const index = this.registeredHandlers[eventName].indexOf(handler);
            if (index !== -1) {
                this.registeredHandlers[eventName].splice(index, 1);
                this.eventEmitter.off(eventName, handler);
            }
        }
    }

    /**
     * Releases all events.
     */
    releaseAllEvents() {
        for (let [eventName, handlers] of Object.entries(this.registeredHandlers)) {
            for (let handler of handlers) {
                this.eventEmitter.off(eventName, handler);
            }
        }
        this.registeredHandlers = {};
    }
}

// Export the BaseEventHandler class for use in other modules
module.exports = BaseEventHandler;
