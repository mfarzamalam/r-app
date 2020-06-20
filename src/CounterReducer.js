 const CounterReducer = (state,action) => {
     // eslint-disable-next-line default-case
     switch(action){
             case 'incre':
                 return state + 1
             case 'dec':
                 return state - 1
             case 'multi':
                 return state * 2;
             case 'div': 
                return state / 2;
         }
     }

 export default CounterReducer