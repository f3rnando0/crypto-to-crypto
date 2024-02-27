import express from 'express';
import cors from 'cors';
import { connect } from './database';

export const app = express();
connect()

app.use(cors());