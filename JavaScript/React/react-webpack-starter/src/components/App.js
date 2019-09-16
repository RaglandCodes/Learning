import React from "react";
import Para from "./Para";

export default function App() {
  return (
    <div>
      <h1>My app</h1>
      <Para text='Hello. This is paragraph 1' />
      <Para text='Hello. This is paragraph 3' />
      <Para text='Hello. This is paragraph 2' />
    </div>
  );
}

// class App extends Component {
//     render(){
//         return (<div>
//             <h1>
//                 My react app
//             </h1>
//         </div>)
//     }
// }

// export default App;
