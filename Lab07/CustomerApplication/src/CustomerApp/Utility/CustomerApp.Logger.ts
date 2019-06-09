export interface ILogger {
    Log();
}

export class BaseLogger implements ILogger {
    Log() {
        console.log('using console logger');
    }
}

export class ConsoleLogger extends BaseLogger {
    Log() {
        console.log('using console logger');
    }
}

export class DbLogger extends BaseLogger {
    Log() {
        console.log('using DB logger');
    }
}

export class EmailLogger extends BaseLogger {
    Log() {
        console.log('using Email logger');
    }
}
