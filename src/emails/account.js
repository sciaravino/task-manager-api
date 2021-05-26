const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sal.ciaravino17@gmail.com',
        subject: 'Thanks for joining',
        text: `Hi, ${name}. Please let me know if you experience any issues with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sal.ciaravino17@gmail.com',
        subject: 'Sorry to see you go :(',
        text: `Goodbye, ${name}. Your account has been removed. I hope you find the task app you're looking for.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}