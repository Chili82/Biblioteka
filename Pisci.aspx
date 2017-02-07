<%@ page title="Home Page" language="C#" masterpagefile="~/Site.master" autoeventwireup="true" inherits="_Default, App_Web_qmr5xzfl" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
<link href="Styles/demo_page.css" rel="stylesheet" type="text/css" />
    <link href="Styles/dtJui.css" rel="stylesheet" type="text/css" />
    <link href="Styles/TableTools_JUI.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/Pisci.js" type="text/javascript"></script>
    <script src="Scripts/jquery.dataTables.js" type="text/javascript"></script>
    <script src="Scripts/TableTools.js" type="text/javascript"></script>
    <script src="Scripts/ZeroClipboard.js" type="text/javascript"></script>
     <body onload="pisci();">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">

<div id="dialog-form" title="Dodaj novog korisnika">
	<p class="validateTips" id="titleDlg">Попуните поља.</p>

	
	<fieldset>
    <div style="width:100px;float:left;text-align:left">
		<label id="lbName"for="jmbg">Име:</label>
    </div>
    <div style="width:400px;float:left;text-align:left">
		<input type="text" name="ime" id="ime" class="text ui-widget-content ui-corner-all" style="width:400px" />
   </div>
    <div style="width:100px;clear:both;text-align:left;float:left;padding-top:2px">
		<label id="lbKorIme" for="adresa">Презиме:</label>
    </div>
    <div style="width:400px;float:left;text-align:left;padding-top:2px">
		<input type="text" name="prezime" id="prezime" value="" class="text ui-widget-content ui-corner-all" style="width:400px" />
   </div>
	</fieldset>

</div>
<div id="center">
    <div id="table">

    <div id="divTable" style="width:700px; ">
    </div>

    </div>
    </div>
    <div style="float:left; width:196px; padding-left:60px; padding-top:20px">
    <div style="float:left">
    <div class="dodaj">
        <button id="dodajNovi" style="width:150px" type="button">Додај нови</button>
    </div>
     </div>
     <div style="clear:both;padding-top:10px">
         <div class="izmjeni">
         <button id="izmjeniItem" style="width:150px" type="button">Измјени</button>
         </div>
     </div>
    </div>
    <div style="clear:" id="dialog-confirm" title="Empty the recycle bin?">
<%--	<p><span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;"></span> </p>--%>
</div>
 <input id="IdItem" type="text"  style="width: 0px; height: 0px;visibility:hidden" />
    <input id="Mode" type="text" style="width: 0px; height: 0px;visibility:hidden"  />
</asp:Content>
