let onlineReq = new XMLHttpRequest(), onlineData;

onlineReq.open('GET', 'http://krd_online.csrv.pl/online');
onlineReq.send();

onlineReq.onload = () => {
  onlineData = JSON.parse(onlineReq.responseText)

  if(onlineData.status == "ERR") {
    // Serwer off || "tryb czuwania"
  } else {
    if(onlineData.status == "OK") {
      //Serwer działa pobieram dane:
      let max_players = onlineData.max_players;
      let online_players = onlineData.online;
      let motd = onlineData.motd;
      let online_players_names = onlineData.online_list;
    }
  }
}
