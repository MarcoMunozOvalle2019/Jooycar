class ModuleError extends Error {

     constructor (cause){
         let causeAux 
         let causeMessageAux
         if(cause instanceof Error){
         causeMessageAux = cause.message
         causeAux = cause
         }else{
           causeMessageAux = cause
         }

         super(causeMessageAux)


         if(causeAux) this.description = causeAux.message
         this.srcMessage = 'InvalidAtributo'
         this.translateMessage ='Atributo invalido'
         this.statusCode='0'
         this.errorCode ='0'
 

     }
}

module.exports = ModuleError;