document.addEventListener("DOMContentLoaded", () => {
  const currentPathName = window.location.pathname
  const path = ['', '/', '/users', '/schedules']

  for(let i = 0; i < path.length; i++){
    if(path[i] == currentPathName) {
      document.querySelector('.i' + i).style.backgroundColor = '#F8F8F8'
      document.querySelector(`.i${i}>a`).style.color = '#233C4B'
      document.querySelector(`.i${i}>a`).style.fontWeight = 'bolder'
      document.querySelector(`.i${i}>a>i`).style.backgroundColor = '#ddd'
      document.querySelector(`.i${i}>a>i`).style.color = '#3a6079'
      document.querySelector('.i' + (i-1)).style.borderRadius = '0px 0px 25px 0px'
      document.querySelector('.i' + (i+1)).style.borderRadius = '0px 25px 0px 0px'
    }
  }
})

function loadSchedules() {
  const showById = document.getElementById("showById")
  const userId = document.getElementById('userId')
  const selectedRad = document.getElementById('user' + userId.value)

  selectedRad.checked = true
  
  if(showById.value == 'true'){
    let tr = document.querySelectorAll('.rUser')
    // let selectedTr = document.querySelectorAll('.r'+ userId.value)
    const classname = 'rUser r'+ userId.value
    
    for(let i = 0; i < tr.length; i++){
      if(tr[i].className != classname)
        tr[i].style.display = 'none'
    }
  }
}

function changeLocation(id) {

  const user_id = id.value;
  const location = 'http://localhost:3000'

  if(user_id == -999) {
    window.location.replace(`${location}/schedules`)
  }else{
    window.location.replace(`${location}/users/${user_id}/schedules`)
  }

}

function getDateTime() {
  const eDate = document.querySelector('.date')
  const eTime = document.querySelector('.time')
  const today = new Date()
  const fullMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let yy = today.getFullYear()
  let mm = today.getMonth()
  let dd = today.getDate()
  let h = today.getHours()
  let m = today.getMinutes()
  let s = today.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  eDate.innerHTML =  fullMonth[mm] + ` ${dd}, ${yy}`
  eTime.innerHTML =  `${h}:${m}:${s}`
  setTimeout(getDateTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}