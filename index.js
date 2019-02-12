
/* This Code is to Test SMS */
const RC = require('ringcentral')
const dotenv = require('dotenv')

var RINGCENTRAL_RECEIVER='+14083388064';
//var RINGCENTRAL_USERNAME='+18883303674';
var RINGCENTRAL_USERNAME='+16504377133';
var phone_array = ['+14083388064','+14088543617']

//'+15072087802','+919831091527'

var rcsdk = new RC({
    server: 'https://platform.ringcentral.com',
    appKey: 'PecY7xaOSaSUGkALifVcWQ',
    appSecret: '2tyIzCYSR4y4NH6fZQHb9A4YQqGPhaTzqjS7-wVbGwng'
});

console.log("The Server name is "+ rcsdk.server);

const platform = rcsdk.platform()
platform.login({
  username: '+18883303674',
  extension: '101',
  password: 'Test@987'
}).then(response => {
    for (i in phone_array ) {
  platform.post('/account/~/extension/~/sms', {
    from: { phoneNumber: RINGCENTRAL_USERNAME },
    to: [
      { phoneNumber: phone_array[i] }
    ],
    text: 'This is Toll-Free SMS Marketing. From RC Platform. Testing from Dibyendu (SMS Code)'
  }).then(response => {
    console.log('SMS sent: ' + response.json().id )
  }).catch(e => {
    console.error(e)
  })
}}).catch(e => {
  console.error(e)
})