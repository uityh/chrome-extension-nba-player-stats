document.addEventListener('DOMContentLoaded', function () {
  const background = document.getElementById("poppingup");
  var input = document.getElementById("Player Input");
  input.addEventListener("keydown", function(event) {
  if (event.key === 'Enter') {
   event.preventDefault();
   if(input.innerHTML ==="" || input.innerHTML === "Player name")
    return;
   document.getElementById("button").click();
  }
});


  document.querySelector('button').addEventListener('click', onclick, false)
  function onclick () {
    var tables = document.getElementsByTagName("TABLE");

    for (var i=tables.length-1; i>=0;i-=1)
    if (tables[i]) tables[i].parentNode.removeChild(tables[i]);

    var errorMsg = document.getElementById('div_id');
    if(errorMsg !== null)
      errorMsg.parentNode.removeChild(errorMsg);

    async function getData()
    {
      var player = input.innerHTML.trim().split(' ').join('_')
      const x = await fetch("https://www.balldontlie.io/api/v1/players?search="+player)
      var y = await x.json()
      
      const response = await fetch("https://www.balldontlie.io/api/v1/season_averages?player_ids[]=" +y.data[0].id)
      const data = await response.json()

      input.innerHTML = y.data[0].first_name + " " + y.data[0].last_name;
      
      return data;
    }
    getData().then(data => 
        output(data))
        .catch(error => badInput());
  function badInput()
  {
    var myDiv = document.createElement("div");
    myDiv.id = 'div_id';
    if(input.innerHTML.split(' ').join('').replace(/&nbsp;/g, '')  === '')
    {
      myDiv.innerHTML = "<h1>Please a curent NBA player's name.</h1>";
    }
    else
    {
      myDiv.innerHTML = "<h1>" + input.innerHTML + " is not currently playing this season. Please enter a different player's name.</h1>";
    }

    background.appendChild(myDiv);
    return;
  }
  function createTable(data)
  {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    row_1.style.color= 'black'
    heading_1.innerHTML = "Season";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "G";
    heading_2.title = "Games Played"

    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "PTS";
    heading_3.title = "Points Per Game"

    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "MP";
    heading_4.title = "Minutes Player Per Game"

    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "FG";
    heading_5.title = "Field Goals Made Per Game"

    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "FGA";
    heading_6.title = "Field Goal Attempts Per Game"

    let heading_7 = document.createElement('th');
    heading_7.innerHTML = "FG%";
    heading_7.title = "Field Goal Percentage"

    let heading_8 = document.createElement('th');
    heading_8.innerHTML = "3P";
    heading_8.title = "3-Pointers Made Per Game"

    let heading_9 = document.createElement('th');
    heading_9.innerHTML = "3PA";
    heading_9.title = "3-Pointers Attempts Per Game"

    let heading_10 = document.createElement('th');
    heading_10.innerHTML = "3P%";
    heading_10.title = "3-Pointer Percentage"

    let heading_11 = document.createElement('th');
    heading_11.innerHTML = "FT";
    heading_11.title = "Free Throws Made Per Game"

    let heading_12 = document.createElement('th');
    heading_12.innerHTML = "FTA";
    heading_12.title = "Free Throw Attempts Per Game"

    let heading_13 = document.createElement('th');
    heading_13.innerHTML = "FT%";
    heading_13.title = "Free Throw Percentage"

    let heading_14 = document.createElement('th');
    heading_14.innerHTML = "ORB";
    heading_14.title = "Offensive Rebounds Per Game"

    let heading_15 = document.createElement('th');
    heading_15.innerHTML = "DRB";
    heading_15.title = "Defensive Rebounds Per Game"

    let heading_16 = document.createElement('th');
    heading_16.innerHTML = "TRB";
    heading_16.title = "Total Rebounds Per Game"

    let heading_17 = document.createElement('th');
    heading_17.innerHTML = "AST";
    heading_17.title = "Assists Per Game"

    let heading_18 = document.createElement('th');
    heading_18.innerHTML = "BLK";
    heading_18.title = "Blocks Per Game"

    let heading_19 = document.createElement('th');
    heading_19.innerHTML = "PF";
    heading_19.title = "Personal Fouls"
    
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
    row_1.appendChild(heading_7);
    row_1.appendChild(heading_8);
    row_1.appendChild(heading_9);
    row_1.appendChild(heading_10);
    row_1.appendChild(heading_11);
    row_1.appendChild(heading_12);
    row_1.appendChild(heading_13);
    row_1.appendChild(heading_14);
    row_1.appendChild(heading_15);
    row_1.appendChild(heading_16);
    row_1.appendChild(heading_17);
    row_1.appendChild(heading_18);
    row_1.appendChild(heading_19);
    thead.appendChild(row_1);
    
    let row_2 = document.createElement('tr');

    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = data.data[0].season;

    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = data.data[0].games_played;

    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = data.data[0].pts;

    let row_2_data_4 = document.createElement('td');
    row_2_data_4.innerHTML = data.data[0].min;

    let row_2_data_5 = document.createElement('td');
    row_2_data_5.innerHTML = data.data[0].fgm;
    
    let row_2_data_6 = document.createElement('td');
    row_2_data_6.innerHTML = data.data[0].fga;

    let row_2_data_7 = document.createElement('td');
    row_2_data_7.innerHTML = data.data[0].fg_pct;
    
    let row_2_data_8 = document.createElement('td');
    row_2_data_8.innerHTML = data.data[0].fg3m;

    let row_2_data_9 = document.createElement('td');
    row_2_data_9.innerHTML = data.data[0].fg3a;
    
    let row_2_data_10 = document.createElement('td');
    row_2_data_10.innerHTML = data.data[0].fg3_pct;

    let row_2_data_11 = document.createElement('td');
    row_2_data_11.innerHTML = data.data[0].ftm;

    let row_2_data_12 = document.createElement('td');
    row_2_data_12.innerHTML = data.data[0].fta;

    let row_2_data_13 = document.createElement('td');
    row_2_data_13.innerHTML = data.data[0].ft_pct;

    let row_2_data_14 = document.createElement('td');
    row_2_data_14.innerHTML = data.data[0].oreb;

    let row_2_data_15 = document.createElement('td');
    row_2_data_15.innerHTML = data.data[0].dreb;
    
    let row_2_data_16 = document.createElement('td');
    row_2_data_16.innerHTML = data.data[0].reb;

    let row_2_data_17 = document.createElement('td');
    row_2_data_17.innerHTML = data.data[0].ast;

    let row_2_data_18 = document.createElement('td');
    row_2_data_18.innerHTML = data.data[0].stl;

    let row_2_data_19 = document.createElement('td');
    row_2_data_19.innerHTML = data.data[0].pf;

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    row_2.appendChild(row_2_data_5);
    row_2.appendChild(row_2_data_6);
    row_2.appendChild(row_2_data_7);
    row_2.appendChild(row_2_data_8);
    row_2.appendChild(row_2_data_9);
    row_2.appendChild(row_2_data_10);
    row_2.appendChild(row_2_data_11);
    row_2.appendChild(row_2_data_12);
    row_2.appendChild(row_2_data_13);
    row_2.appendChild(row_2_data_14);
    row_2.appendChild(row_2_data_15);
    row_2.appendChild(row_2_data_16);
    row_2.appendChild(row_2_data_17);
    row_2.appendChild(row_2_data_18);
    row_2.appendChild(row_2_data_19);
    tbody.appendChild(row_2);
    background.append(table);

  }
  function output(data)
  {
    var myDiv = document.createElement("div");
    myDiv.id = 'div_id';

    if(data.data.length === 0)
    {
      badInput();
      return;
    }
    createTable(data);
  }

    }

}, false)