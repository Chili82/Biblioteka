<%@ page title="" language="C#" masterpagefile="~/Site.master" autoeventwireup="true" inherits="Pregled, App_Web_qmr5xzfl" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" Runat="Server">
    <link href="Styles/demo_page.css" rel="stylesheet" type="text/css" />
    <link href="Styles/demo_table_jui.css" rel="stylesheet" type="text/css" />
    <link href="Styles/TableTools_JUI.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/Pregled.js" type="text/javascript"></script>
    <script src="Scripts/jquery.dataTables.js" type="text/javascript"></script>
    <script src="Scripts/TableTools.js" type="text/javascript"></script>
    <script src="Scripts/ZeroClipboard.js" type="text/javascript"></script>
    <script src="Scripts/iframe.js" type="text/javascript"></script>
    <body onload="biblioteka();">

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">

<div id="DivItems" title="Items">
    <iframe id="ifitems"  width="100%" height="100%"></iframe>
    </div>

<div id="center">
<div style = "float:left;clear:both;">
<div style="float:left;text-align:left;padding-right:10px;">
		<label id="lbName"for="jmbg" style="color:#4c3000;font-weight:bold">По презимену аутора:</label>
        <input type="text" name="autorPrezime" id="autorPrezime" class="text ui-widget-content ui-corner-all" style="width:300px" />
    </div>

<div class="opis" style="float:left; padding-right:70px">
<button id="pretraziOpis" style="width:85px" type="button">Тражи</button>
</div>
<div style="float:left; padding-left:5px">
    <div class="dodaj">
        <button id="dodajNovi" style="width:80px" type="button">Додај</button>
    </div>
     </div>
     <div style="float:left; padding-left:5px">
       <div class="izmjeni">
         <button id="izmjeniItem" style="width:95px" type="button">Измјени</button>
         </div>
     </div>
      <div class="osvjezi" style="float:left; padding-left:5px">
            <button id="osvjezi" style="width:100px" type="button">Освјежи</button>
        </div>
</div>
<div style="clear:both;">
<div style="float:left;text-align:left;padding-left:25px;">
		<label id="lbIme"for="jmbg" style="color:#4c3000;font-weight:bold">По имену аутора:</label>
        <input type="text" name="autorIme" id="autorIme" class="text ui-widget-content ui-corner-all" style="width:300px;" />
    </div>

</div>
<div id="table">

    <div id="divTable" style="width:950px; margin:20px 0px 10px 0px;">
    </div>

    </div>
    <div id="autoriPodaci" style="clear:both; width:950px;">
     <fieldset style="border:solid 1px #494437">
    <legend>Autori</legend>
        <label id="autori"  for="autori" style="color:#4c3000;font-weight:bold"></label>
        </fieldset>
    </div>
    <div id="opisKnjige" style="clear:both; width:950px;">
    <fieldset style="border:solid 1px #494437">
    <legend>Opis</legend>
        <label id="opis"  for="opis" style="color:#4c3000;font-weight:bold"></label>
        </fieldset>
    </div>
</div>
<input id="IdItem" type="text"  style="width: 0px; height: 0px;visibility:hidden;" />
<input id="Mode" type="text" style="width: 0px; height: 0px;visibility:hidden;"  />
</asp:Content>

