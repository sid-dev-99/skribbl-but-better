import config from "../constants/config";
import User from "./user";
import fs from 'fs';

const words:string[] = JSON.parse(fs.readFileSync()); //  to read the word 