import messageModel from "../models/messageModel.js";

export const sendMessageController = async (req, res) => {
  console.log("controller called");
  try {
    const { name, email, subject, message } = req.body;
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!subject) {
      return res.send({ message: "Subject is Required" });
    }
    if (!message) {
      return res.send({ message: "Message is Required" });
    }

    const contact = await messageModel.create({
      name,
      email,
      subject,
      message,
    });
    return res
      .status(200)
      .send({ success: true, message: "Message Sent Successfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: "Error While Sending Message", error });
  }
};
