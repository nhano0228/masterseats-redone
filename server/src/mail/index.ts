import Email from 'email-templates'
import {EmailTemplates} from '../config/types'
import * as nodemailer from 'nodemailer' 
import { User } from 'entity/User';

export class MailService { 

  private email: Email; 

  constructor() { 
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
             user: 'masterseatstest@gmail.com',
             pass: 'masterseats'
         }
     })
    this.email = new Email({
        message: {
          from: 'Elan Arnowitz <no-reply@masterseats.com>'
        },
        transport: transporter,
    });
  } 

  sendMail(user: User, subject: EmailTemplates, locals) { 
    this.email.send({
      template: subject,
      message: {
        to: user.email
      },
      locals
    }).then(console.log).catch(console.error)
  } 
} 
