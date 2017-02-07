
function grupa() {

    var asInitVals = new Array();

    $("#divTable").html('');

    $("#divTable").append('<table id="gvZanr" style="border:1px solid gray;width:700px"></table>');

    $("#gvZanr").ready(function () {



        $('#gvZanr').append(
                                          $('<thead>').append($('<tr>').append(

                                                                    $('<th>'),
                                                                    $('<th>')
                                                                 )
                                                              )

                                         );
        $('#gvZanr').append(
                                          $('<tfoot>').append($('<tr>').append(

                                $('<th>'),
                                $('<th>')
                                ),
                                $('<tr>').append(

                                $('<td>').append($('<input>').attr("type", "text").attr("name", "id_autora").attr("value", "pretraga naziv").addClass("search_init").attr("id", "0")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "ime").attr("value", "pretraga ime").addClass("search_init").attr("id", "1"))


                                )
                            )

        );


        $.ajax({
            type: "POST",
            url: "Grupa.aspx/Get",
            data: "{id:'-1'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                if (msg.hasOwnProperty("d")) {

                    var supstanca_json = jQuery.parseJSON(msg.d);


                    for (var x = 0; x < supstanca_json.length; x++) {

                        $('#gvZanr').append(
                                   $('<tr>').append(
                                        $('<td>').text(supstanca_json[x].col_0),
                                        $('<td>').text(supstanca_json[x].col_1)

                                                    )
                                  );

                    }
                    //

                    //$('#gvKorisnik tbody tr').attr("onmouseover", "this.style.cursor = 'pointer';this.style.color = 'red'");
                    // $('#gvKorisnik tbody tr').attr("onmouseout", "this.style.cursor = 'auto';this.style.color = 'black'");
                    $('#gvZanr tbody tr').mouseover(function () {
                        $(this).css({ cursor: "pointer" });
                        $(this).css({ color: "red" });

                    }
                             );

                    $('#gvZanr tbody tr').mouseout(function () {

                        $(this).css({ cursor: "auto" });
                        $(this).css({ color: "black" });
                    }
                             );

                    $.ajax({
                        type: "POST",
                        url: "Grupa.aspx/GetColumn",
                        data: "{name:''}",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (msg) {
                            if (msg.hasOwnProperty("d")) {


                                var columns_json = jQuery.parseJSON(msg.d);
                                // var DataTableLocStr = columns_json[0].col_17;


                                $('#gvZanr thead tr th').eq(0).text(columns_json[0].col_0);
                                $('#gvZanr thead tr th').eq(1).text(columns_json[0].col_1);







                                $('#gvZanr tfoot tr th').eq(0).text(columns_json[0].col_0);
                                $('#gvZanr tfoot tr th').eq(1).text(columns_json[0].col_1);








                                $('#gvZanr tfoot tr td input').eq(0).val(columns_json[0].col_2.toLowerCase() + ' ' + columns_json[0].col_0.toLowerCase());
                                $('#gvZanr tfoot tr td input').eq(1).val(columns_json[0].col_2.toLowerCase() + ' ' + columns_json[0].col_1.toLowerCase());








                                $("#gvZanr tbody").click(function (event) {
                                    $(oTable.fnSettings().aoData).each(function () {
                                        $(this.nTr).removeClass('row_selected');
                                    });
                                    $(event.target.parentNode).addClass('row_selected');
                                    //$(event.target.parentNode).css({backgroundColor:'red'});

                                });

                                $('#gvZanr tbody tr').each(function () {
                                    var sTitle;
                                    var nTr = $('tr', this)
                                    var nTds = $('td', this);
                                    var idO = $(nTds[0]).text();
                                    //                                 var sGrade = $(nTds[4]).text();
                                    //                                 var id = $(this).attr("id");




                                    $(nTds).click(function () {

                                        $('#IdItem').val(idO);



                                    }
);
                                });

                                /* Init DataTables */
                                oTable = null;
                                oTable = $('#gvZanr').dataTable(
        {
            "bJQueryUI": true,
            "bStateSave": true,
            "sPaginationType": "full_numbers",
            "iDisplayLength": 5,
            "aLengthMenu": [[5, 10, 50, -1], [5, 10, 50, "All"]],
            "bRetrieve": true,



            "aoColumnDefs": [
            { "bSearchable": false, "aTargets": [0] },

                       { "sClass": "align", "aTargets": [1] },

                       { "bVisible": false, "aTargets": [0] }
                            ],

            "sDom": '<"H"lTfr>t<"F"ip>',
            "oTableTools": {
                "aButtons": [
							           

						]

            }


        }
        );

                                $("tfoot input").keyup(function () {
                                    /* Filter on the column (the index) of this element */
                                    //oTable.fnFilter(this.value, $("tfoot input").index(this));

                                    var ind = parseInt($(this).attr("id"));

                                    oTable.fnFilter(this.value, ind);

                                });




                                /*
                                * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
                                * the footer
                                */
                                $("tfoot input").each(function (i) {
                                    asInitVals[i] = this.value;
                                });

                                $("tfoot input").focus(function () {
                                    if (this.className == "search_init") {
                                        this.className = "";
                                        this.value = "";
                                    }
                                });

                                $("tfoot input").blur(function (i) {
                                    if (this.value == "") {
                                        this.className = "search_init";
                                        this.value = asInitVals[$("tfoot input").index(this) + 1];
                                    }
                                });





                            }
                        }
                    }
                                                       );

                }
            }
        }
                        );




    })
}


$(document).ready(function () {


    $(function () {
        $(".dodaj button:first").button({
            icons: {
                primary: "ui-icon-plusthick"
            }
        })

        $(".izmjeni button:first").button({
            icons: {
                primary: "ui-icon-pencil"
            }
        })

        $(".obrisi button:first").button({
            icons: {
                primary: "ui-icon-trash"
            }
        })

        $(".refresh button:first").button({
            icons: {
                primary: "ui-icon-refresh"
            }
        })


    });

    $("#dialog-form").dialog("destroy");

    $("#dialog-form").dialog({
        autoOpen: false,
        title: 'Унесите групу',
        height: 300,
        width: 500,
        modal: true,
        resizable: true,
        buttons: [{
            text: 'Унеси',
            click: function () {

                if ($('#Mode').val() == 'Insert') {

                    $.ajax({
                        type: "POST",
                        url: "Grupa.aspx/Save",
                        data: "{grupa:'" + $('#grupa').val() + "'}",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (msg) {
                            if (msg.hasOwnProperty("d")) {

                                var columns_json = jQuery.parseJSON(msg.d);
                                if (parseFloat(columns_json[0].col_0) > -1) {
                                    alert("Успјешно сте унијели групу. Можете наставити са уносом сљедеће групе!");
                                    $('#grupa').val('');

                                    grupa();
                                    //                                    $("#dialog-form").dialog("close");
                                }


                            }
                        }
                    }
                            );

                } else {

                    $.ajax({
                        type: "POST",
                        url: "Grupa.aspx/Update",
                        data: "{grupa:'" + $('#grupa').val() + "',id:'" + $('#IdItem').val() + "'}",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (msg) {
                            if (msg.hasOwnProperty("d")) {

                                var columns_json = jQuery.parseJSON(msg.d);
                                if (parseFloat(columns_json[0].col_0) > -1) {
                                    alert('Успјешно сте промијенили податке !');
                                    grupa();
                                    $("#dialog-form").dialog("close");
                                }
                            }
                        }
                    }
                               );
                }


            }
        },
                        {
                            text: 'Откажи',
                            click: function () {
                                $(this).dialog("close");
                            }

                        }

                        ]

    });

    $("#dodajNovi")
			.button()
			.click(function () {
			    $('#Mode').val('Insert');

			    $('#grupa').val('');


			    $("#dialog-form").dialog("open").parent().appendTo("#ctl01");

			    // $("#dialog-form").dialog("open");
			});

    $("#izmjeniItem")
			.button()
			.click(function () {

			    if ($('#gvZanr tbody tr').hasClass('row_selected')) {

			        var id = $('#IdItem').val();
			        $('#Mode').val('Update');

			        $.ajax({
			            type: "POST",
			            url: "Grupa.aspx/Get",
			            data: "{id:'" + id + "'}",
			            contentType: "application/json; charset=utf-8",
			            dataType: "json",
			            success: function (msg) {
			                if (msg.hasOwnProperty("d")) {

			                    var supstanca_json = jQuery.parseJSON(msg.d);

			                    $('#grupa').val(supstanca_json[0].col_1);


			                    $("#dialog-form").dialog("open").parent().appendTo("#ctl01");

			                }
			            }
			        }
                  );



			    } else {
			        alert('Морате изабрати групу из табеле !');
			    }
			    // $("#dialog-form").dialog("open");
			});
}
);