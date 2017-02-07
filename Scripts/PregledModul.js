var oTable;

function pisci() {

    var asInitVals = new Array();
   
    $("#divTable").html('');

    $("#divTable").append('<table id="gvPisci" style="border:1px solid gray;width:600px"></table>');

    $('#gvPisci').append(
                                          $('<thead>').append($('<tr>').append(

                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>')
                                                                 )
                                                              )

                                         );


    $('#gvPisci').append(
                 $('<tfoot>').append($('<tr>').append(

                                $('<th>'),
                                $('<th>'),
                                $('<th>')
                                )
//                                ,

//                                $('<tr>').append(
//                                
//                                $('<td>').append($('<input>').attr("type", "text").attr("name", "id_knjige").attr("value", "pretraga naziv").addClass("search_init").attr("id", "0")),
//                                $('<td>').append($('<input>').attr("type", "text").attr("name", "naziv_knjige").attr("value", "pretraga ime").addClass("search_init").attr("id", "1")),
//                                $('<td>').append($('<input>').attr("type", "text").attr("name", "ime").attr("value", "pretraga prezime").addClass("search_init").attr("id", "2"))
//                                )
                        )

        );

    $.ajax({

        type: "POST",
        url: "PregledModuls.aspx/Get",
        data: "{id:'" + $("#Mode").val() + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            if (msg.hasOwnProperty("d")) {

                var supstanca_json = jQuery.parseJSON(msg.d);


                for (var x = 0; x < supstanca_json.length; x++) {

                    $('#gvPisci').append(
                                   $('<tr>').append(
                                        $('<td>').text(supstanca_json[x].col_0),
                                        $('<td>').text(supstanca_json[x].col_1),
                                        $('<td>').text(supstanca_json[x].col_2)

                                                    )
                                  );

                }

                $('#gvPisci tbody tr').mouseover(function () {
                    $(this).css({ cursor: "pointer" });
                    $(this).css({ color: "#4c3000" });
                    $(this).css({ 'font-weight': "bold" });

                }
                             );

                $('#gvPisci tbody tr').mouseout(function () {

                    $(this).css({ cursor: "auto" });
                    $(this).css({ color: "black" });
                    $(this).css({ 'font-weight': "normal" });
                }
                  );

                $.ajax({
                    type: "POST",
                    url: "PregledModuls.aspx/GetColumn",
                    data: "{name:''}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                        if (msg.hasOwnProperty("d")) {

                            var columns_json = jQuery.parseJSON(msg.d);

                            $('#gvPisci thead tr th').eq(0).text(columns_json[0].col_0);
                            $('#gvPisci thead tr th').eq(1).text(columns_json[0].col_1);
                            $('#gvPisci thead tr th').eq(2).text(columns_json[0].col_2);



                            $('#gvPisci tfoot tr th').eq(0).text(columns_json[0].col_0);
                            $('#gvPisci tfoot tr th').eq(1).text(columns_json[0].col_1);
                            $('#gvPisci tfoot tr th').eq(2).text(columns_json[0].col_2);



//                            $('#gvPisci tfoot tr td input').eq(0).val(columns_json[0].col_3.toLowerCase() + ' ' + columns_json[0].col_0.toLowerCase());
//                            $('#gvPisci tfoot tr td input').eq(1).val(columns_json[0].col_3.toLowerCase() + ' ' + columns_json[0].col_1.toLowerCase());
//                            $('#gvPisci tfoot tr td input').eq(2).val(columns_json[0].col_3.toLowerCase() + ' ' + columns_json[0].col_2.toLowerCase());


                            

                            $("#gvPisci tbody").click(function (event) {
                                $(oTable.fnSettings().aoData).each(function () {
                                    $(this.nTr).removeClass('row_selected');
                                });
                                $(event.target.parentNode).addClass('row_selected');

                            });

                            $('#gvPisci tbody tr').each(function () {
                                var sTitle;
                                var nTr = $('tr', this)
                                var nTds = $('td', this);
                                var idO = $(nTds[0]).text();

                                $(nTds).click(function () {

                                    $('#IdItem').val(idO);




                                }
                                        );
                            });


                            /* Init DataTables */
                            oTable = null;
                            oTable = $('#gvPisci').dataTable(
        {
            "bJQueryUI": true,
            "bStateSave": true,
            "sPaginationType": "full_numbers",
            "iDisplayLength": 5,
            "aLengthMenu": [[5, 10, 50, -1], [5, 10, 50, "All"]],
            "bRetrieve": true,
            "bFilter": false,


            "aoColumnDefs": [
           

                       { "sClass": "align", "aTargets": [1, 2] },

                       { "bVisible": false, "aTargets": [0] }
                            ]


        }
        );

//                            $("tfoot input").keyup(function () {
//                                /* Filter on the column (the index) of this element */
//                                //oTable.fnFilter(this.value, $("tfoot input").index(this));

//                                var ind = parseInt($(this).attr("id"));

//                                oTable.fnFilter(this.value, ind);

//                            });


                            /*
                            * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
                            * the footer
                            */
//                            $("tfoot input").each(function (i) {
//                                asInitVals[i] = this.value;
//                            });

//                            $("tfoot input").focus(function () {
//                                if (this.className == "search_init") {
//                                    this.className = "";
//                                    this.value = "";
//                                }
//                            });

//                            $("tfoot input").blur(function (i) {
//                                if (this.value == "") {
//                                    this.className = "search_init";
//                                    this.value = asInitVals[$("tfoot input").index(this) + 1];
//                                }
//                            });





                        }
                    }
                }
                                                       );

            }
        }
    }
   );

}

$(document).ready(function () {

    $(function () {
        $(".dodaj button:first").button({
            icons: {
                primary: "ui-icon-plusthick"
            }
        })

        //            alert($("#knjiga").val().toString());

        $(".obrisi button:first").button({
            icons: {
                primary: "ui-icon-search"
            }
        })

        $(".unesi button:first").button({
            icons: {
                primary: "ui-icon-plusthick"
            }
        })

        $(".prihvati button:first").button({
            icons: {
                primary: "ui-icon-plusthick"
            }
        })

    });


    $("#dialog-autor").dialog("destroy");

    $("#dialog-autor").dialog({
        autoOpen: false,
        title: 'Додавање аутора',
        height: 400,
        width: 500,
        modal: true,
        resizable: true,

        buttons: [{

            text: 'Сачувај',
            click: function () {



                $.ajax({
                    type: "POST",
                    url: "PregledModuls.aspx/unesiPiscaKnjigu",
                    data: "{knjiga:'" + $("#Mode").val() + "', pisac:'" + $('#cmbAutor option:selected').val() + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                        if (msg.hasOwnProperty("d")) {

                            var columns_json = jQuery.parseJSON(msg.d);

                            alert('Успјешно,додајте још аутора или затворите дијалог за унос!');
                            pisci();

                        }
                    }
                }
        );


            }
        }, {

            text: 'Затвори',
            click: function () {

                $(this).dialog("close");
            }
        }]

    });

    $("#prihvatiP")
			.button()
			.click(function () {

			    $("#Mode").val('');
			    $("#naziv").val('');
			    $("#opisD").val('');
			    $("#broj").val('');
			    $("#godina").val('');
			    $("#cmbZanr").val(0);
			    $("#cmbIzdavac").val(0);
			    $("#cmbGrupa").val(0);

			    pisci();


			}
            );


    $("#obrisiPisca")
			.button()
			.click(function () {

			    if ($('#gvPisci tbody tr').hasClass('row_selected')) {

			        $("#dialog-confirm").dialog("open");
			    }
			    else {
			        alert('Морате изабрати аутора!');
			    }
			});

    $("#dialog-confirm").dialog({
        autoOpen: false,
        resizable: false,
        height: 40,
        modal: true,
        title: 'Да ли желите да обришете аутора?',

        buttons: [
                {
                    text: 'Да',
                    click: function () {

                        $.ajax({
                            type: "POST",
                            url: "PregledModuls.aspx/Obrisi",
                            data: "{knjiga:'" + $("#Mode").val() + "', pisac:'" + $('#IdItem').val() + "'}",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (msg) {
                                if (msg.hasOwnProperty("d")) {

                                    var columns_json = jQuery.parseJSON(msg.d);


                                    pisci();




                                }
                            }
                        }
                     );

                        $(this).dialog("close");
                    }
                },
                    {
                        text: 'Не',
                        click: function () {
                            $(this).dialog("close");
                        }

                    }
                ]
    });

    $("#dodajPisca")
			.button()
			.click(function () {



			    $.ajax({
			        type: "POST",
			        url: "PregledModuls.aspx/VratiMaxKnjigu",
			        data: "{}",
			        contentType: "application/json; charset=utf-8",
			        dataType: "json",
			        success: function (msg) {
			            if (msg.hasOwnProperty("d")) {

			                var columns_json = jQuery.parseJSON(msg.d);



			                if (parseFloat(columns_json[0].col_0) > -1) {

			                    if ($("#knjiga").val() == 0) {

			                        $("#Mode").val(columns_json[0].col_0);

			                    }
			                    //                                else
			                    //                                {
			                    //                                $("#Mode").val(idk);
			                    //                                }

			                }


			            }
			        }
			    }
                            );


			    $("#dialog-autor").dialog("open").parent().appendTo("#ctl01");

			    // $("#dialog-form").dialog("open");
			});

    try {


        document.getElementById('cmbAutor').innerHTML = "";
        //Fill cmbAutor
        $.ajax({
            type: "POST",
            url: "PregledModuls.aspx/GetPisci",
            data: "{id:'-1'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                if (msg.hasOwnProperty("d")) {

                    var columns_json = jQuery.parseJSON(msg.d);


                    for (var x = 0; x < columns_json.length; x++) {

                        $('#cmbAutor').append('<option value="' + columns_json[x].col_0 + '">' + columns_json[x].col_1 + ' ' + columns_json[x].col_2 + '</option>');

                    }

                }
            }
        }
        );

    } catch (e) {
        alert("Error: " + e.message);
    }


    $("#unesiKnjigu")
			.button()
			.click(function () {

			    var zanr = $('#cmbZanr option:selected').val();
			    var izdavac = $('#cmbIzdavac option:selected').val();
			    var grupa = $('#cmbGrupa option:selected').val();

			    if ($('#naziv').val() == '') {
			        alert('Унесите назив књиге !!!');

			    } else {

			        if ($("#knjiga").val() == 0) {
			            $.ajax({
			                type: "POST",
			                url: "PregledModuls.aspx/Save",
			                data: "{naziv:'" + $('#naziv').val() + "',zanr:'" + zanr + "',izdavac:'" + izdavac + "',godina:'" + $('#godina').val() + "',grupa:'" + grupa + "',broj:'" + $('#broj').val() + "',opisD:'" + $('#opisD').val() + "'}",
			                contentType: "application/json; charset=utf-8",
			                dataType: "json",
			                success: function (msg) {
			                    if (msg.hasOwnProperty("d")) {

			                        var columns_json = jQuery.parseJSON(msg.d);
			                        if (parseFloat(columns_json[0].col_0) > -1) {

			                            $("#prihvatiP").show();
			                            alert('Успјешно сте унијели књигу молимо изаберите ауторе!');

			                        }


			                    }
			                }
			            }
                            );

			        }
			        else {
			            $.ajax({
			                type: "POST",
			                url: "PregledModuls.aspx/Update",
			                data: "{id_knjige:'" + $("#knjiga").val() + "',naziv:'" + $('#naziv').val() + "',opisD:'" + $('#opisD').val() + "',godina:'" + $('#godina').val() + "',zanr:'" + zanr + "',izdavac:'" + izdavac + "',grupa:'" + grupa + "',broj:'" + $('#broj').val() + "'}",
			                contentType: "application/json; charset=utf-8",
			                dataType: "json",
			                success: function (msg) {
			                    if (msg.hasOwnProperty("d")) {

			                        var columns_json = jQuery.parseJSON(msg.d);
			                        if (parseFloat(columns_json[0].col_0) > -1) {

			                            alert('Успјешно сте промијенили податке!');

			                        }


			                    }
			                }
			            }
                            );
			        }


			        $("#autori").show();
			    }

			    // $("#dialog-form").dialog("open");
			});
});



function showAutor() {

    $("#prihvatiP").hide();
    if ($('#knjiga').val() == '0') {
        $("#autori").hide();
       
    }
}

