# Airtable Guestbook

This is a simple guestbook built with NodeJS, that stores responses in an Airtable.

## Make your own!

### Requirements
1. An [Airtable account](https://airtable.com/signup)

### Get started!

First of all, [remix this app](https://glitch.com/edit/#!/remix/airtable-guestbook-starter). Remixing will create your own copy of the app that is unique to you -- any changes you make will only apply to your version. Make sure you change the description in your version so you remember what the app does when you're looking at it later.
 
1. Copy [this base in Airtable](https://airtable.com/shrdzb2kFVMeV6Z8X). This requires that you have an Airtable account. To copy click on the title "Guestbook/RSVP" drop-down icon, and select "Duplicate base".
2. Open the [Airtable API](https://airtable.com/api) and select your copy of "Guestbook/RSVP".
3. Locate the Base ID in the Introduction section. Copy that ID.
4. Come back to your Glitch app, and open the `.env` file. Paste the Base ID on the line that begins `AIRTABLE_BASE_ID=`. _The `.env` file is a secure place to store your secret keys. If someone remixes your app, they won't be able to see those IDs._ 
5. Go back to the Airtable documentation. Scroll to the "Authentication" section, then click the link to your Account.
6. Copy your API key from the API section.
7. Come back to your Glitch app, and open the `.env` file. Paste the API Key on the line that begins `AIRTABLE_API_KEY=`
8. Test the app! Add some info to the form, and confirm that it shows up in your Airtable base.
9. In the Glitch editor settings turn off "Refresh App on Changes". This will make sure that you don't accidentally hit the API request limit.
10. Make this app your own! Edit `public/style.css` to match your event colors!




## Made by [Glitch](https://glitch.com/)

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).