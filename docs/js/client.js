setTimeout(() => { let onlineReq = new XMLHttpRequest(), onlineData;

onlineReq.open('GET', 'https://mcapi.us/server/status?ip=krd_online.csrv.pl');
onlineReq.send();

onlineReq.onload = () => {
  onlineData = JSON.parse(onlineReq.responseText)

  if(onlineData.online) {
    console.log('Serwer działa!')
  }
  document.write(onlineData.motd);
  document.write(onlineData.players.now + '/' + onlineData.players.max)

}, 1000)
