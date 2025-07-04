import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import http from 'http';
import helmet from 'helmet';
import morgan from 'morgan';
import router from '../../routes/index.routes.js';
import {
  errorHandler,
  notFound,
} from '../../middlewares/errorHandler.middleware.js';
import session from 'express-session';
import passport from 'passport';

// Create express app for testing
const app = express();
const server = http.createServer(app);

// Setup basic middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Session setup
app.use(
  session({
    secret: 'test-session-secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// CORS
app.use(cors({ origin: '*', credentials: true }));

// Security
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "script-src": ["'self'"],
        "style-src": ["'self'"],
      },
    },
  })
);

// Logging - minimal in test environment
app.use(morgan('dev'));

// Routes
app.use(router);

// Error handlers
app.use(notFound);
app.use(errorHandler);

export { app, server };
