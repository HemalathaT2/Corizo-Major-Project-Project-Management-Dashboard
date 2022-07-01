document.addEventListener('DOMContentLoaded', function () {  
  var modeSwitch = document.querySelector('.mode-switch');  
  modeSwitch.addEventListener('click', function () {           document.documentElement.classList.toggle('dark');  
   modeSwitch.classList.toggle('active');  
  });  
  var listView = document.querySelector('.list-view');  
  var gridView = document.querySelector('.grid-view');  
  var projectsList = document.querySelector('.project-boxes');  
  listView.addEventListener('click', function () {  
   gridView.classList.remove('active');  
   listView.classList.add('active');  
   projectsList.classList.remove('jsGridView');  
   projectsList.classList.add('jsListView');  
  });  
  gridView.addEventListener('click', function () {  
   gridView.classList.add('active');  
   listView.classList.remove('active');  
   projectsList.classList.remove('jsListView');  
   projectsList.classList.add('jsGridView');  
  });  
  document.querySelector('.messages-btn').addEventListener('click', function () {  
   document.querySelector('.messages-section').classList.add('show');  
  });  
  document.querySelector('.messages-close').addEventListener('click', function() {  
   document.querySelector('.messages-section').classList.remove('show');  
  });  
 });  

 // Chart JS
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: [
              'Completed',
              'Ongoing',
              'Stalled'
          ],
          datasets: [{
              label: 'My First Dataset',
              data: [300, 50, 100],
              backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
          }]
      },
  });