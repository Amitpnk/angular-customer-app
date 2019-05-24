export interface ILogger {
    Log();
}

export class BaseLogger implements ILogger {
    Log(){

    }
}

export class consoleLogger implements BaseLogger {
    Log() {
        console.log("using console logger");
    }
}

export class DBLogger implements BaseLogger {
    Log() {
        console.log("using DB logger");
    }
}


export class FileLogger implements BaseLogger {
    Log() {
        console.log("using File logger");
    }
}