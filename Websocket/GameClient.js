// Import the EventHandler module
const EventHandler = require("../Event/EventHandler");
const events = require("../Event/events");

class GameClient {

    /** 
     * @type {WebSocket} 
     * Represents the WebSocket associated with this client.
     */
    ws;

    /** 
     * @type {EventHandler} 
     * Event handler for managing events related to this game client.
     */
    eventHandler;

    /**
     * Constructor for the GameClient class.
     * @param {WebSocket} ws - The WebSocket associated with this client.
     */
    constructor(ws) {
        this.ws = ws;  // Set the WebSocket
        this.eventHandler = new EventHandler();  // Initialize the event handler
        this.eventHandler.emitSharedEvent(events.CLIENT_CONNECTED, this)
    }

    /**
     * Method to handle actions when the client is connected.
     */
    onConnected() {
        // Logic for handling client connection can be added here

    }

    /**
     * Method to handle actions when the client is disconnected.
     */
    onDisconnected() {
        // Release all events associated with this client when disconnected
        this.eventHandler.releaseAllEvents();
        this.eventHandler.emitSharedEvent(events.CLIENT_DISCONNECTED, this)
    }

    /**
     * Send a message to the client.
     * @param {string} message - The message to be sent to the client.
     */
    sendToClient(message) {
        this.ws.send(message);  // Use the WebSocket's send method to send the message
    }

    /**
     * Handle incoming messages from the client.
     * @param {string} message - The received message from the client.
     */
    handleMessage(message) {
        console.log('GameClient received:', message);  // Log the received message
        // Game-specific logic for handling the message can be added here
    }
}

// Export the GameClient class for use in other modules
module.exports = GameClient;
