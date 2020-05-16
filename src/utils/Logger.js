const LogLevel = {
  Trace : 'trace',
  Debug : 'debug',
  Info : 'info',
  Warn : 'warn',
  Error : 'error',
  log : 'log',
};

class Logger {
  trace = (message) => {
    this.logWithLevel(LogLevel.Trace, message);
  };

  debug = (message) => {
    this.logWithLevel(LogLevel.Debug, message);
  };

  info = (message) => {
    this.logWithLevel(LogLevel.Info, message);
  };

  warn = (message) => {
    this.logWithLevel(LogLevel.Warn, message);
  };

  error = (message) => {
    this.logWithLevel(LogLevel.Error, message);
  };

  log = (...message) => {
    // eslint-disable-next-line no-console
    console.log(...message);
  };

  logWithLevel = (logLevel, message) => {
    const logMessage = JSON.parse(JSON.stringify(message));

    // @ts-ignore
    // tslint:disable-next-line:tsr-detect-unsafe-properties-access
    // eslint-disable-next-line no-console
    console[logLevel.toString()](logMessage);
  }
}
const logger = new Logger();
export { logger as Logger };
