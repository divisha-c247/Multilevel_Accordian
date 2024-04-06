import "./App.css";
import React from "react";
import Main from "./multiLevel/Main";
import {QueryClient,
QueryClientProvider,
} from '@tanstack/react-query'
function App () {
 const queryClient = new QueryClient()
    return (
<QueryClientProvider client={queryClient}>
      <Main/>
      </QueryClientProvider>
    );

}

export default App;
