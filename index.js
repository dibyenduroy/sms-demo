
/* This Code is to Test SMS */
const RC = require('ringcentral')
const dotenv = require('dotenv')

var RINGCENTRAL_RECEIVER='+1XXXXXXXXXXX';
//var RINGCENTRAL_USERNAME='+1XXXXXX';
var RINGCENTRAL_USERNAME='+1XXXXXXXX';

//Array of To Numbers

var phone_array = ['+1XXXXXXX','+1XXXXXXXXXX']

//'+15072087802','+919831091527'

var rcsdk = new RC({
    server: 'https://platform.ringcentral.com',
    appKey: 'XXXXXXXXXX',
    appSecret: 'XXXXXXXXXXXXXXXXXXXXXX'
});

console.log("The Server name is "+ rcsdk.server);

const platform = rcsdk.platform()
platform.login({
  username: '+1XXXXXXXX',
  extension: '101',
  password: 'XXXXXXXX'
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
