<%@ page language="C#" autoeventwireup="true" inherits="PregledModuls, App_Web_u4us23ol" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="Scripts/jquery-1.7.1.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui-1.8.17.custom.min.js" type="text/javascript"></script>  
    <link href="Styles/Site.css" rel="stylesheet" type="text/css" />
     <link href="Styles/jquery-ui-1.8.17.custom.css" rel="stylesheet" type="text/css" />
    <link href="Styles/demo_page.css" rel="stylesheet" type="text/css" />
    <link href="Styles/demo_table_jui.css" rel="stylesheet" type="text/css" />
   <%-- <link href="Styles/TableTools_JUI.css" rel="stylesheet" type="text/css" />--%>
    <script src="Scripts/PregledModul.js" type="text/javascript"></script>
    <script src="Scripts/jquery.dataTables.js" type="text/javascript"></script>
   <%-- <script src="Scripts/TableTools.js" type="text/javascript"></script>--%>
    <script src="Scripts/ZeroClipboard.js" type="text/javascript"></script>
    

</head>
<body onload="pisci();showAutor();" style="background:#feeebd;">
    <form id="form1" runat="server">

    <div id="dialog-autor">
    <p class="validateTips" id="P1">Изаберите аутора</p>
        <fieldset>
    <div style="width:100px;float:left;text-align:left">
		<label id="lbPass1"for="passwordOne">Аутор:</label>
    </div>
    <div style="width:200px;float:left;text-align:left;padding-top:5px; font-size:medium;">
        <select style="width:200px;" runat="server"  id="cmbAutor" class="text ui-corner-all ui-widget-content">  </select>
    </div>
    </fieldset>
    </div>

    <div id="center" style="font-size:medium;;padding:10px 0 0 10px">
    <div style="width:100px;float:left;text-align:left;padding-left:10px">
		<label id="Label1"for="naziv">Назив књиге:</label>
    </div>
    <div style="width:400px;float:left;text-align:left;font-size:medium;padding-top:5px">
		<input type="text" name="naziv" id="naziv" class="text ui-widget-content ui-corner-all" style="width:700px" runat="server" />
   </div>
    <div style="clear:both;width:100px;text-align:left;float:left;padding-top:5px;padding-left:10px">
		<label id="lbTip" for="password2">Жанр:</label>
        </div>
       <div style="width:200px;float:left;text-align:left;padding-top:5px; font-size:medium;">
        <select style="width:200px;" runat="server"  id="cmbZanr" class="text ui-corner-all ui-widget-content">  </select>
    </div>
    <div style="float:left;width:70px;text-align:left;float:left;padding-top:5px;padding-left:20px">
		<label id="Label2"for="godina">Година:</label>
    </div>
    <div style="width:200px;float:left;text-align:left;padding-top:5px;">
		<input type="text" name="godina" runat="server"  id="godina" class="text ui-widget-content ui-corner-all" style="width:200px" />
   </div>
    <div style="clear:both;width:100px;text-align:left;float:left;padding-top:2px;padding-left:10px">
		<label id="lbPrava" for="password2">Издавач</label>
        </div>
       <div style="width:200px;float:left;text-align:left;padding-top:2px; font-size:medium;">
        <select style="width:200px;" runat="server"  id="cmbIzdavac" class="text ui-corner-all ui-widget-content">  </select>
    </div>
     <div style="float:left;width:70px;text-align:left;float:left;padding-top:5px;padding-left:20px">
		<label id="Label4"for="broj">Број:</label>
    </div>
    <div style="width:200px;float:left;padding-top:2px; text-align:left">
		<input type="text" name="broj" runat="server" id="broj" class="text ui-widget-content ui-corner-all" style="width:200px" />
   </div>
   <div style="clear:both;width:100px;text-align:left;float:left;padding-top:2px;padding-left:10px">
		<label id="Label3" for="password2">Група:</label>
        </div>
       <div style="width:200px;float:left;text-align:left;padding-top:2px; font-size:medium;">
        <select style="width:200px;" runat="server"  id="cmbGrupa" class="text ui-corner-all ui-widget-content">  </select>
    </div>
   
   <div style="float:left;width:70px;text-align:left;float:left;padding-top:5px;padding-left:20px">
		<label id="Label5"for="jmbg">Опис:</label>
    </div>
    <div style="width:400px;float:left;text-align:left">
		<textarea type="text" name="opisD" runat="server"  id="opisD" class="text ui-widget-content ui-corner-all" style="width:400px" cols="20" rows="3" ></textarea>
   </div>
        
    </div>
    <div style="float:right; padding-right:20px;padding-top:10px">
    <div class="unesi">
         <button id="unesiKnjigu" style="width:150px" type="button">Унеси књигу</button>
         </div>
    </div>
    <div id="autori" style="clear:both; width:800px;padding-left:10px">
    <fieldset>
    <legend>Autori</legend>
    <div id="tablePisci" style="width:600px;">
    <div id="divTable" style="width:600px; margin:5px 0px 10px 0px;">
    </div>
    </div>
    <div style = "float:left;width:160px;padding:10px 0 0 10px;">
     <div style="float:left">
    <div class="dodaj">
        <button id="dodajPisca" style="width:150px" type="button">Додај аутора</button>
    </div>
     </div>
     <div style="clear:both;padding-top:10px">
         <div class="obrisi">
         <button id="obrisiPisca" style="width:150px" type="button">Обриши</button>
         </div>
     </div>
    </div>
    </fieldset>
    </div>
    <div  style="clear:both;float:right;padding-right:20px">
    <div class="prihvati">
         <button id="prihvatiP" style="width:150px;" type="button">Прихвати</button>
         </div>
          <div id="dialog-confirm" title="Empty the recycle bin?">
    </div>
    <input id="IdItem" type="text"  style="width: 0px; height: 0px;visibility:hidden;" />
    <input id="Mode" type="text" style="width: 0px; height: 0px;visibility:hidden;" runat="server"  />
    <input id="knjiga" type="text" style="width: 0px; height: 0px;visibility:hidden;" runat="server" />
    </form>
</body>
</html>
