<%@ page title="" language="C#" masterpagefile="~/Site.master" autoeventwireup="true" inherits="Zanr, App_Web_qmr5xzfl" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" Runat="Server">
<link href="Styles/demo_page.css" rel="stylesheet" type="text/css" />
    <link href="Styles/dtJui.css" rel="stylesheet" type="text/css" />
    <link href="Styles/TableTools_JUI.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/Zanr.js" type="text/javascript"></script>
    <script src="Scripts/jquery.dataTables.js" type="text/javascript"></script>
    <script src="Scripts/TableTools.js" type="text/javascript"></script>
    <script src="Scripts/ZeroClipboard.js" type="text/javascript"></script>
     <body onload="zanr();">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">

<div id="dialog-form" title="Dodaj novi zanr">
	<p class="validateTips" id="titleDlg">Popunite polja. (Sva polja moraju biti popunjena!)</p>

	
	<fieldset>
    <div style="width:100px;float:left;text-align:left">
		<label id="lbName"for="jmbg">Zanr:</label>
    </div>
    <div style="width:400px;float:left;text-align:left">
		<input type="text" name="zanr" id="zanr" class="text ui-widget-content ui-corner-all" style="width:400px" />
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
        <button id="dodajNovi" style="width:150px" type="button">Dodaj novi</button>
    </div>
     </div>
     <div style="clear:both;padding-top:10px">
         <div class="izmjeni">
         <button id="izmjeniItem" style="width:150px" type="button">Izmjeni</button>
         </div>
     </div>
    </div>
    <div style="clear:" id="dialog-confirm" title="Empty the recycle bin?">
<%--	<p><span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;"></span> </p>--%>
</div>
 <input id="IdItem" type="text"  style="width: 0px; height: 0px;visibility:hidden" />
    <input id="Mode" type="text" style="width: 0px; height: 0px;visibility:hidden"  />
</asp:Content>

