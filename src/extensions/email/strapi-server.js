const contactForm = require('../../email-templates/contact-form');

module.exports = (plugin) => {
  plugin.controllers.email.send = async (ctx) => {
    const { template, ...data } = ctx.request.body;

    switch (template) {
      case 'contactForm': {
        const { name, email, message, phone } = data;
        try {
          const fields = {
            __name__: name,
            __email__: email,
            __phone__: phone,
            __message__: message,
          };

          await strapi
            .plugin('email')
            .service('email')
            .send({
              to: 'mitri.dvp@gmail.com',
              from: 'Cedar Farm <mitri.dvp@gmail.com>',
              replyTo: null,
              subject: 'New Contact Form Email',
              text: `${name}, ${email}, ${message}.`,
              html: contactForm.replace(
                /\b(?:__name__|__email__|__phone__|__message__)\b/g,
                (matched) => fields[matched]
              ),
            });
        } catch (e) {
          console.log(e);
          throw new ApplicationError('EMAIL :: ERROR');
        }

        return ctx.send('EMAIL :: SUCCESS');
      }

      default:
        return ctx.internalServerError('EMAIL :: ERROR :: TEMPLATE NOT FOUND');
    }
  };

  return plugin;
};
