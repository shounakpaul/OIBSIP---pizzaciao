import Razorpay from "razorpay";

const handler = async (req, res) => {
  var instance = new Razorpay({
    key_id: "rzp_test_mN1wRwT7pbAZhP",
    key_secret: "QqDlTPWUBJQg8Kh936Bk8nZJ",
  });
  if (req.method === "POST") {
    const amount = req.body.amount;

    var options = {
      amount: amount, // amount in the smallest currency unit
      currency: "INR",
      receipt: "rcp1",
    };
    instance.orders.create(options, function (err, order) {
      if (err) {
        console.error(err);
        res.status(500).send({ error: "Internal Server Error" });
      } else if (order && order.id) {
        console.log(order);
        res.send({ orderId: order.id });
      } else {
        console.error("Invalid order object:", order);
        res.status(500).send({ error: "Internal Server Error" });
      }
    });
  }
};

export default handler;
