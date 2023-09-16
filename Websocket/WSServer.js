// Import required modules
const WebSocket = require('ws');
const { IncomingMessage, ServerResponse } = require("http");
const WSClientManager = require('./WSClientManager');
const GameClient = require('./GameClient');

class WSServer {
    /** 
     * @type {Server<typeof IncomingMessage, typeof ServerResponse>} 
     * The Express server instance.
     */
    expressServer;

    /** 
     * @type {WSClientManager}
     * The WebSocket client manager to manage active clients.
     */
    clientManager = new WSClientManager();

    /**
     * Constructor for the WSServer class.
     * @param {Server<typeof IncomingMessage, typeof ServerResponse>} server - The express server instance.
     */
    constructor(server) {
        this.expressServer = server;
        this.wss = new WebSocket.Server({ server: this.expressServer });
        // Handle the 'connection' event using the handleConnection method
        this.wss.on('connection', this.handleConnection.bind(this));
    }

    /**
     * Handle a new WebSocket connection.
     * @param {WebSocket} ws - The WebSocket instance representing the connection.
     */
    handleConnection(ws) {
        console.log('Client connected');

        // Create a GameClient instance for the new WebSocket connection
        const gameClient = new GameClient(ws);

        // Add the new GameClient to the WSClientManager
        this.clientManager.addClient(gameClient);

        // Handle 'message' and 'close' events on the WebSocket
        ws.on('message', this.handleMessage.bind(this, gameClient));
        ws.on('close', () => {
            this.clientManager.removeClient(gameClient);
            console.log('Client disconnected');
        });
    }

    /**
     * Handle messages received from the client.
     * @param {GameClient} client - The GameClient instance representing the client.
     * @param {string} message - The received message from the client.
     */
    handleMessage(client, message) {


        let jsonData;

        try {
            jsonData = JSON.parse(message);
        } catch (error) {
            if (message instanceof Buffer) {
                message = message.toString('utf8');
            }

            console.error("Error parsing JSON Received:", message);
            return;
        }

        // Uncomment the line below to log received messages
        // console.log('Received:', jsonData);

        // Further process the message or use the client to send a response
        client.handleMessage(jsonData);
    }
}

// Export the WSServer class for use in other modules
module.exports = WSServer;
