export const INC = "INC";
export const DEC = "DEC";
export const RESET = "RESET";

    export function inCount(){
            return {
                type:INC
            }
        }


    export function deCount(){
            return {
                type:DEC
            }
        }


    export function reCount(){
            return {
                type:RESET
            }
        }