document.querySelector('#yell').addEventListener('click',run)

function run() {
  console.log('HELLO TWITCH')
  let pumpkin = document.querySelector('#firstName').value

  pumpkin = pumpkin * 9/5 + 32

  document.querySelector('#placeToYell').innertext = pumpkin
}