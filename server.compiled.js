"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = require('./db/queries');

var bodyParser = require('body-parser');

var PORT = process.env.HTTP_PORT || 8080;
var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('just gonna send it');
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});
app.get('/products', function (req, res) {
  // console.log('server', req.query.product)
  db.getProducts(req.query.product, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      // console.log(result)
      res.send(result);
    }
  });
});
app.post('/addOrder', function (req, res) {
  console.log('query', req.body);
  var currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
  console.log("del date", req.body.deliveryDate.slice(0, 19).replace('T', ' '));
  var order = [req.body.address, req.body.customerName, 'Liberty Hill', currentDate, req.body.deliveryDate.slice(0, 19).replace('T', ' '), req.body.neighborhood, req.body.email, req.body.phone]; // console.log("order:", order)

  var id;
  db.addDelivery(order, function (err, results) {
    if (err) {
      res.send(err);
    } else {
      // console.log("RESULT FROM ADDING", results.insertId)
      var _id = results.insertId;

      for (item in req.body.cartItems) {
        var params = [req.body.cartItems[item].id, _id, req.body.cartItems[item].quantity];
        db.addItemToOrder(params, function (err, secondResult) {
          // console.log("callback called")
          if (err) {
            res.send(err);
          } else {
            console.log('sent: ', secondResult);
          }
        });
      }

      res.send(results);
    }
  });
});
app.post('/updateQuantity', function (req, res) {
  console.log(req.body.quantity, req.body.productName); // let quantity = [req.body.quantity, req.body.productName]

  var quantity = [req.body.quantity, req.body.productName];
  db.updateQuantity(quantity, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get('/getOrders', function (req, res) {
  db.getOrders(function (err, result) {
    console.log("RESULTTTTT1", result);
    result = result[0];

    if (err) {
      console.log(err);
    } else {
      console.log("type", result); // res.send(result)

      var orders = {};

      for (var _item in result) {
        console.log("ITEM: ", result[_item]);

        if (!orders[result[_item].id]) {
          orders[result[_item].id] = {
            customer: result[_item].name,
            address: result[_item].street_address,
            deliveryDate: result[_item].scheduled_delivery,
            neighborhood: result[_item].neighborhood,
            email: result[_item].email,
            phone: result[_item].phone,
            products: [{
              productName: result[_item].product_name,
              quantity: result[_item].quantity,
              price: result[_item].price
            }]
          };
        } else {
          orders[result[_item].id].products.push({
            productName: result[_item].product_name,
            quantity: result[_item].quantity,
            price: result[_item].price
          });
        }
      }

      res.send(orders);
    }
  });
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, ". cwm"));
});
