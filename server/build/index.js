"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/RootController");
const app = (0, express_1.default)();
// app.get('/', (req: Request, res: Response) => {
//   res.send(`
//     <div>
//       <h1>Hey there!</h1>
//     </div>
//   `);
// });
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['fvoinrivni'] }));
app.use(AppRouter_1.AppRouter.getInstance());
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
