import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var AppErrorHandler = (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.handlerError = function (error) {
        var errorMessage;
        if (error instanceof Response) {
            errorMessage = "Erro " + error.status + " ao obter a URL " + error.url + " - " + error.statusText;
        }
        else {
            errorMessage = error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    };
    return AppErrorHandler;
}());
export { AppErrorHandler };
//# sourceMappingURL=app.error-handler.js.map