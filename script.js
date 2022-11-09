<!DOCTYPE html>
<html>
    <head>
      <style>
        .box {

            height: 200px;
            width: 200px;
            padding: 10px ;
            border: 10px solid black;
            margin: 0;
          }
          .center {
            position: absolute;
            padding: 10px 24px; 
            left: 50%;
         }
      </style>
      <script>
        function changeHeadingBg(color){
            document.getElementById("b").style.background = color;
        }
      </script>
      <body>
        <h1 id="h">Welcome to My Color Changing Game!</h1>
        <div id = "b" class = "center"> 
            <div class = "box" > 
            </div>
        </div>
        <div>
          <label>Change Heading Background To:</label>
          <button type="button" onclick="changeHeadingBg('rgb(255,0,0)');">Red</button>
          <button type="button" onclick="changeHeadingBg('rgb(0,255,0)');">Green</button>
          <button type="button" onclick="changeHeadingBg('rgb(0,0,255)');">Blue</button>
        </div>
      </body>
   </head>
</html>