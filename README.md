# MERN_BLOGS

# This is just a basic tutotial for MERN stack
# we have created client side on react using:
npx create-react-app client

# Then, we have created API server using:
npx express-generator api

# We have connected client to server using,
fetch("http://localhost:9000/testapi").then(res => res.text()).then(res => this.setState({ apiResponse: res }));

# To solve the CORS error, we install cors on our server using: 
npm install cors

# And then we require and use cors in our code:
var cors = require('cors');
app.use(cors());