const { sharedEventHandler } = require("../Event/EventHandler");
const events = require("../Event/events");
const GameClient = require("./GameClient");

/**
 * The GameEventManager class manages game-specific events and their handlers.
 * It uses the singleton pattern to ensure a single instance of the event manager.
 * @class GameEventManager
 */
class GameEventManager {

    /** 
     * @type {GameEventManager}
     * Singleton instance of the GameEventManager.
     */
    static manager = new GameEventManager();

    /**
     * Initializes a new instance of the GameEventManager class.
     * Registers the CLIENT_CONNECTED and CLIENT_DISCONNECTED events to their handlers.
     */
    constructor() {
        sharedEventHandler.registerEvent(events.CLIENT_CONNECTED, this.onClientConnected.bind(this));
        sharedEventHandler.registerEvent(events.CLIENT_DISCONNECTED, this.onClientDisconnected.bind(this)); // Updated line
    }

    /**
     * Handles the CLIENT_CONNECTED event.
     * @param {GameClient} client - The GameClient instance representing the connected client.
     */
    onClientConnected(client) {
        // TODO: Add logic for when a client connects.
    }

    /**
     * Handles the CLIENT_DISCONNECTED event.
     * @param {GameClient} client - The GameClient instance representing the disconnected client.
     */
    onClientDisconnected(client) {
        // TODO: Add logic for when a client disconnects.
    }
}

module.exports = GameEventManager;
