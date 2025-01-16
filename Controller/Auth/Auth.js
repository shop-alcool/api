require('dotenv').config();
const express = require('express');
import { createAuth0Client } from '@auth0/auth0-spa-js';
 
const user = require('../../Model/User/User');


