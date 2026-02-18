import usersRepositories from "../repositories/users.repositories.js";
import AppError from "../utils/AppError.js";
import sendEmail from "../utils/sendEmail.js";

class CronServices {

    async dailyReminder() {

        const users = await usersRepositories.getAll();

        for (const user of users) {
            await sendEmail({
                to: user.email,
                subject: "Daily Reminder",
                html: this.#content(user.name),
            });
        }
    }

    async welcomingEvent(){

        const betaUsers = await usersRepositories.findAllBetaUsers();
        console.log(betaUsers)

        if(betaUsers.length === 0){
            throw new AppError('Fail Retrieve User' , 404);
        }


        for (const user of betaUsers) {
            await sendEmail({
                to: user.email,
                subject: "Daily Reminder",
                html: this.welcomingEvent(),
            });
        }


    }

    #content(name) {
        const template = `
        <table width="600" cellpadding="0" cellspacing="0"
            style="background-color:#ffffff; border-radius:8px; overflow:hidden; font-family:Arial, sans-serif;"> 
            
            <tr> 
            <td style="background-color:#34B3E4; color:#ffffff; padding:20px; text-align:center;">
                <h1 style="margin:0; font-size:22px;">Daily Qur'an Reminder</h1> 
            </td> 
            </tr>  

            <tr> 
            <td style="padding:30px; color:#333333;"> 
                <p style="font-size:16px; line-height:1.6; margin-top:0;"> 
                Assalamu Alaikum ${name}, 
                </p> 

                <p style="font-size:16px; line-height:1.6;"> 
                This is your gentle daily reminder to take a moment with the Qur'an 📖. 
                Even a few verses a day can bring barakah, clarity, and peace to your heart. 
                </p> 

                <p style="font-size:16px; line-height:1.6;"> 
                “Indeed, in the remembrance of Allah do hearts find rest.”<br />
                <em>(Qur'an 13:28)</em> 
                </p>  

                <div style="text-align:center; margin:30px 0;"> 
                <a href="https://ramadhan-with-motionu.vercel.app/"
                    style="
                    background-color:#34B3E4;
                    color:#ffffff;
                    text-decoration:none;
                    padding:14px 24px;
                    border-radius:6px;
                    font-size:16px;
                    display:inline-block;
                    ">
                    Read Qur'an Now
                </a> 
                </div> 

                <p style="font-size:14px; color:#555555; line-height:1.6;"> 
                May Allah make the Qur'an a light for your heart and a guide in your life. 
                </p> 

                <p style="font-size:14px; color:#555555;"> 
                Barakallahu feek,<br /> 
                <strong>The Motion-U Team</strong> 
                </p> 
            </td> 
            </tr> 

            <tr> 
            <td style="background-color:#f1f9fd; padding:15px; text-align:center; font-size:12px; color:#666666;"> 
                You are receiving this email as a daily reminder.<br />
                If you wish to stop receiving these emails, you may unsubscribe anytime. 
            </td> 
            </tr> 

        </table>
        `;

        return template;
    }

    #welcomeEventContent() {
        const template = `
        <table width="600" cellpadding="0" cellspacing="0"
            style="background-color:#ffffff; border-radius:8px; overflow:hidden; font-family:Arial, sans-serif;"> 
            
            <!-- Header -->
            <tr> 
            <td style="background-color:#34B3E4; color:#ffffff; padding:22px; text-align:center;">
                <h1 style="margin:0; font-size:24px;">Welcome to Our Community 🎉</h1> 
            </td> 
            </tr>  

            <!-- Body -->
            <tr> 
            <td style="padding:30px; color:#333333;"> 

                <p style="font-size:16px; line-height:1.6; margin-top:0;"> 
                Assalamu Alaikum Br/Sr, 
                </p> 

                <p style="font-size:16px; line-height:1.6;"> 
                We're truly happy to have you with us 🤍.  
                Thank you for signing up earlier and becoming part of our growing community.
                </p> 

                <p style="font-size:16px; line-height:1.6;"> 
                We would like to personally invite you to join our upcoming event — a meaningful
                session designed to help us reconnect with the Qur'an, gain beneficial knowledge,
                and grow together.
                </p> 

                <p style="font-size:16px; line-height:1.6;"> 
                Whether you're joining to learn, reflect, or simply be part of something good,
                we'd love to see you there, in shaa Allah 🌙.
                </p>  

                <!-- CTA -->
                <div style="text-align:center; margin:32px 0;"> 
                <a href="https://ramadhan-with-motionu.vercel.app/"
                    style="
                    background-color:#34B3E4;
                    color:#ffffff;
                    text-decoration:none;
                    padding:14px 28px;
                    border-radius:6px;
                    font-size:16px;
                    font-weight:bold;
                    display:inline-block;
                    ">
                    Join the Event
                </a> 
                </div> 

                <p style="font-size:14px; color:#555555; line-height:1.6;"> 
                You can also explore our platform to access reminders, resources, and updates
                prepared especially for you.
                </p> 

                <p style="font-size:14px; color:#555555;"> 
                Barakallahu feek,<br /> 
                <strong>The Motion-U Team</strong> 
                </p> 

            </td> 
            </tr> 

            <!-- Footer -->
            <tr> 
            <td style="background-color:#f1f9fd; padding:15px; text-align:center; font-size:12px; color:#666666;"> 
                You are receiving this email because you signed up on our platform.<br />
                May Allah bless your journey and reward your intentions.
            </td> 
            </tr> 

        </table>
        `;

        return template;
    }


  
}

export default new CronServices();
