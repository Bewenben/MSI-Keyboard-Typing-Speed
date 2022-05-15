document.addEventListener('DOMContentLoaded', competitive);
const leader = document.querySelector('.leader')

function back () {
    window.location.href = "/index";
};

function competitive(){
const url = 'https://docs.google.com/spreadsheets/d/11Xzt9o9CSewZfaOO7chMSy752seXdZcIWZGHdybJpJA/gviz/tq?';
const outputheader = document.querySelector('.outputheader');

const table = document.getElementById("outputheader");

while (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }
  
  var btns = document.getElementsByClassName("leaderbtn");
  for (const element of btns) {
    element.addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  
  document.getElementById('leadersub1').classList.remove('leadersubhide');
  document.getElementById('leadersub2').classList.add('leadersubhide');

fetch(url)
.then(response => response.text())
.then(rep =>{
    const data = JSON.parse(rep.substr(47).slice(0,-2))
    const row = document.createElement('tr');
    outputheader.append(row);
    data.table.cols.forEach((heading)=>{
        const cell = document.createElement('td');
        cell.textContent = heading.label;
        row.append(cell);
    })
    data.table.rows.forEach((main)=>{
        const container = document.createElement('tr');
        container.classList.add('outputrows');
        outputheader.append(container);
        main.c.forEach((ele)=>{
            const cell = document.createElement('td');
            cell.textContent = ele.v;
            container.append(cell);
        })
    })
})
}

function contest(){
    const url = 'https://docs.google.com/spreadsheets/d/1dE9qhxrwfGzgQGlOUviapQlKiDYOCrIBVyLoR20yYH4/gviz/tq?';
    const outputheader = document.querySelector('.outputheader');
    
    const table = document.getElementById("outputheader");
    
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
      }

      var btns = document.getElementsByClassName("leaderbtn");
      for (const element of btns) {
        element.addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }

      document.getElementById('leadersub1').classList.add('leadersubhide');
      document.getElementById('leadersub2').classList.remove('leadersubhide');
    
    fetch(url)
    .then(response => response.text())
    .then(rep =>{
        const data = JSON.parse(rep.substr(47).slice(0,-2))
        const row = document.createElement('tr');
        outputheader.append(row);
        data.table.cols.forEach((heading)=>{
            const cell = document.createElement('td');
            cell.textContent = heading.label;
            row.append(cell);
        })
        data.table.rows.forEach((main)=>{
            const container = document.createElement('tr');
            container.classList.add('outputrows');
            outputheader.append(container);
            main.c.forEach((ele)=>{
                const cell = document.createElement('td');
                cell.textContent = ele.v;
                container.append(cell);
            })
        })
    })
    }

