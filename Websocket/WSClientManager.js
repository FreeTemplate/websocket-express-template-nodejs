// Import the GameClient module
const GameClient = require("./GameClient");

class WSClientManager {

    /**
     * Constructor for the WSClientManager class.
     */
    constructor() {
        /** 
         * @type {GameClient[]} 
         * List to manage all the GameClient instances.
         */
        this.clients = [];
    }

    /**
     * Add a new GameClient to the list.
     * @param {GameClient} client - The GameClient instance to be added.
     */
    addClient(client) {
        this.clients.push(client);
        // Call the Connected handler of the client
        client.onConnected();
    }

    /**
     * Remove a GameClient from the list and call its disconnection handler.
     * @param {GameClient} client - The GameClient instance to be removed.
     */
    removeClient(client) {
        // Call the disconnection handler of the client
        client.onDisconnected();

        // Find the index of the client in the list
        const index = this.clients.indexOf(client);

        // If the client exists in the list, remove it
        if (index > -1) {
            this.clients.splice(index, 1);
        }
    }

    /**
     * Send a message to all the clients in the list.
     * @param {string} message - The message to be broadcasted.
     */
    broadcast(message) {
        for (let client of this.clients) {
            client.sendToClient(message);  // Use the sendToClient method of GameClient to send the message
        }
    }

    /**
     * Get the count of clients in the list.
     * @returns {number} - The number of clients in the list.
     */
    getClientCount() {
        return this.clients.length;
    }
}

// Export the WSClientManager class for use in other modules
module.exports = WSClientManager;
