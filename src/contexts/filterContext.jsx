const { createContext, useContext, useReducer } = require("react");



const videoReduceFun=(videoListState,action)=>{
    switch (action.type) {
        case "CATEGORY":
          return {
            ...videoListState,
            category: action.payload,
          };
          case "HISTORY":
      return {
        ...videoListState,
        history: videoListState.history.includes(action.payload)
          ? [...videoListState.history]
          : [...videoListState.history, action.payload],
      };
    case "CLEAR_HISTORY":
      return {
        ...videoListState,
        history: [],
      };
          default:
              return {
                  videoListState
              }
       
      }
}


const FilterContext=createContext();

const FilterContextProvider=({ children })=>{
    const[videoListState,videoListDispatch]=useReducer(videoReduceFun,{
        category: "all",
        likedVideo: [],
        watchLater: [],
        history: [],
        playlist: [],

    })
    return(
        < FilterContext.Provider value={{ videoListState, videoListDispatch }}>
               {children}
        </FilterContext.Provider>
    )
};

const useFilterContext=()=> useContext(FilterContext);

export { FilterContextProvider, useFilterContext };