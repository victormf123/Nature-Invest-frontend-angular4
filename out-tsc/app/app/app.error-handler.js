import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
var ApplicationErrorHandler = (function () {
    function ApplicationErrorHandler() {
    }
    ApplicationErrorHandler.handlerError = function (error) {
        var errorMessage;
        if (error instanceof HttpErrorResponse) {
            var body = error.error;
            errorMessage = "Erro " + error.status + " ao obter a URL " + error.url + " - " + (error.statusText || '') + " " + body;
        }
        else {
            errorMessage = error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    };
    return ApplicationErrorHandler;
}());
export { ApplicationErrorHandler };
//# sourceMappingURL=app.error-handler.js.map