"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const excursion_1 = __importDefault(require("../routes/excursion"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        // IMPORTANT the middlewares must come before the routes or it won't work
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App is running on port ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API Working!',
            });
        });
        this.app.use('/api/excursions', excursion_1.default);
    }
    middlewares() {
        // Parse body
        this.app.use(express_1.default.json());
    }
}
exports.default = Server;
