import React from "react"

import { link } from "../../backend/routes"

function App() {


 \
 <>

 <BrowserRouter>
  <Routers>
    <Route path= "/signup" element={<Signup />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/send" element={<SendMoney />} />
  </Routers>
 </BrowserRouter>
 </>
}
export default App





