document.querySelector("button").addEventListener('click',team)
 function team(){ 
  let typedTeam = document.querySelector("input").value 
  fetch(`https://statsapi.web.nhl.com/api/v1/teams/${typedTeam}`)
  .then(res => res.json())
  .then(data => {
    console.log(data.teams[0])
      document.querySelector('h2').innerText = data.teams[0].officialSiteUrl
      document.querySelector('h4').innerText = data.teams[0].shortName
      document.querySelector('h3').innerText = data.teams[0].locationName
  })
  
  .catch(err => {
    console.log(`error ${err}`)
  });
}

Array.map((currentvalue,index,arr)=>{})