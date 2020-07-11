import express from 'express';
import { RegisterRoutes } from './routes/routes';
import {createConnection} from "typeorm";
import "reflect-metadata";
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../api/dist/swagger.json'
import * as bodyParser from 'body-parser';

createConnection().then(async connection => {

    const app = express();
    const port = process.env.PORT || 8000;
    app.use(cors())
    app.use(bodyParser.json())
    
    app.use('/swagger-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use('/', express.static('dist/api/dist'))
    RegisterRoutes(app);
    app.listen(port, () => console.log(`Server started listening to port ${port}`));

}).catch(error => console.log("TypeORM connection error: ", error));
