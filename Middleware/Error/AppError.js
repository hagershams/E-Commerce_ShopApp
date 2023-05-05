
class AppError extends Error{
    constructor(message,StatusCode){
        super(message)
        //this.message=message
        this.statusCode=StatusCode
    }
}
export default AppError;