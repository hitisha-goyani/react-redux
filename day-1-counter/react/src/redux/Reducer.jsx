import { DEC, INC, RESET } from "./Action";




export const Reducer = (store={count:0},action) =>{



      // if(action.type == "INC")
        // {
        //     store.count++;
        //     return store
        // }
        // else if(action.type == "DEC")
        // {
        //     store.count--
        //     return store
        // }
        // else{
        //     return store;
        // }

        switch(action.type)
        {
            case INC :
                return {
                    ...store,
                    count:store.count+1
                }   
            

                case DEC : 
                        return  {
                        ...store,
                             count: store.count - 1
                    }
              
            case RESET : 
                        return  {
                        ...store,
                             count: 0
                    }
                 

                   default : return {...store}
                                                                                        
        }

        return store;

}