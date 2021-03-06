const navContainer = document.getElementById('team__navContainer');
const navs = navContainer.getElementsByClassName('team__li');
const teamContainer = document.getElementsByClassName('team');
const teamMembers = document.getElementsByClassName('team__member');

// Set default (current) members active
updateMembers('current');

// Add event listenter to navs
let currentNav = null;
for (let i = 0; i < navs.length; i++) {
   if (navs[i].classList.contains('active')) {
      currentNav = navs[i];
   }
}

for (let i = 0; i < navs.length; i++) {
   navs[i].addEventListener('click', (e) => {
      if (e.target.id !== currentNav.id) {
         currentNav.classList.remove('active');
         e.target.classList.add('active');
         currentNav = e.target;
         updateMembers(currentNav.id);
      }
   });
}

function updateMembers(id) {
   for (let i = 0; i < teamMembers.length; i++) {
      let teamMember = teamMembers[i];
      if (teamMember.dataset.id.indexOf(id) != -1) {
         teamMember.classList.add('active');
      } else {
         teamMember.classList.remove('active');
      }
   }
}

