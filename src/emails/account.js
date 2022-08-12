const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail.send({
//   to: "robert@safetymts.com",
//   from: "robert@safetymts.com",
//   subject: "This is my first creation",
//   text: "I hope this one gets to you",
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "robert@safetymts.com",
    subject: "Welcome to Safety Management and Training Solutions",
    text: `Welcome to the app, ${name}. Let me know how we can help`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "robert@safetymts.com",
    subject: "Sorry you to see you go",
    text: `Goodbye, ${name}. We hope you return soon`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
