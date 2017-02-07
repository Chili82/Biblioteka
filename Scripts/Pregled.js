
function biblioteka() {
    var oTable;
    var asInitVals = new Array();
   
    

    $("#divTable").html('');

    $("#divTable").append('<table id="gvKnjige" style="border:1px solid gray;width:950px"></table>');

    $('#gvKnjige').append(
                                          $('<thead>').append($('<tr>').append(

                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>')
                                                                 )
                                                              )

                                         );

   
    $('#gvKnjige').append(
                 $('<tfoot>').append($('<tr>').append(

                                $('<th>'),
                                $('<th>'),
                                $('<th>'),
                                $('<th>'),
                                $('<th>'),
                                $('<th>'),
                                $('<th>'),
                                $('<th>'),
                                $('<th>')
                                ),

                                $('<tr>').append(
                                
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "id_knjige").attr("value", "pretraga naziv").addClass("search_init").attr("id", "0")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "naziv_knjige").attr("value", "pretraga naziv_knjige").addClass("search_init").attr("id", "1")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "ime").attr("value", "pretraga zanr").addClass("search_init").attr("id", "2")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "prezime").attr("value", "pretraga datum od").addClass("search_init").attr("id", "3")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "opis").attr("value", "pretraga izdavac").addClass("search_init").attr("id", "4")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "zanr").attr("value", "pretraga datum do").addClass("search_init").attr("id", "5")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "izdavac").attr("value", "pretraga naziv").addClass("search_init").attr("id", "6")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "godina").attr("value", "pretraga naziv").addClass("search_init").attr("id", "7")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "godina").attr("value", "pretraga naziv").addClass("search_init").attr("id", "8"))
                                )
                        )

        );

    $.ajax({
        type: "POST",
        url: "Pregled.aspx/Get",
        data: "{id:'0'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            if (msg.hasOwnProperty("d")) {

                var supstanca_json = jQuery.parseJSON(msg.d);


                for (var x = 0; x < supstanca_json.length; x++) {

                    $('#gvKnjige').append(
                                   $('<tr>').append(
                                        $('<td>').text(supstanca_json[x].col_0),
                                        $('<td>').text(supstanca_json[x].col_1),
                                        $('<td>').text(supstanca_json[x].col_2),
                                        $('<td>').text(supstanca_json[x].col_3),
                                        $('<td>').text(supstanca_json[x].col_4),
                                        $('<td>').text(supstanca_json[x].col_5),
                                        $('<td>').text(supstanca_json[x].col_6),
                                        $('<td>').text(supstanca_json[x].col_7),
                                        $('<td>').text(supstanca_json[x].col_8)

                                                    )
                                  );

                }

                $('#gvKnjige tbody tr').mouseover(function () {
                    $(this).css({ cursor: "pointer" });
                    $(this).css({ color: "#4c3000" });
                    $(this).css({ 'font-weight': "bold" });

                }
                             );

                $('#gvKnjige tbody tr').mouseout(function () {

                    $(this).css({ cursor: "auto" });
                    $(this).css({ color: "black" });
                    $(this).css({ 'font-weight': "normal" });
                }
                  );

                $.ajax({
                    type: "POST",
                    url: "Pregled.aspx/GetColumn",
                    data: "{name:''}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                        if (msg.hasOwnProperty("d")) {

                            var columns_json = jQuery.parseJSON(msg.d);

                            $('#gvKnjige thead tr th').eq(0).text(columns_json[0].col_0);
                            $('#gvKnjige thead tr th').eq(1).text(columns_json[0].col_1);
                            $('#gvKnjige thead tr th').eq(2).text(columns_json[0].col_2);
                            $('#gvKnjige thead tr th').eq(3).text(columns_json[0].col_3);
                            $('#gvKnjige thead tr th').eq(4).text(columns_json[0].col_4);
                            $('#gvKnjige thead tr th').eq(5).text(columns_json[0].col_5);
                            $('#gvKnjige thead tr th').eq(6).text(columns_json[0].col_6);
                            $('#gvKnjige thead tr th').eq(7).text(columns_json[0].col_7);
                            $('#gvKnjige thead tr th').eq(8).text(columns_json[0].col_8);


                            $('#gvKnjige tfoot tr th').eq(0).text(columns_json[0].col_0);
                            $('#gvKnjige tfoot tr th').eq(1).text(columns_json[0].col_1);
                            $('#gvKnjige tfoot tr th').eq(2).text(columns_json[0].col_2);
                            $('#gvKnjige tfoot tr th').eq(3).text(columns_json[0].col_3);
                            $('#gvKnjige tfoot tr th').eq(4).text(columns_json[0].col_4);
                            $('#gvKnjige tfoot tr th').eq(5).text(columns_json[0].col_5);
                            $('#gvKnjige tfoot tr th').eq(6).text(columns_json[0].col_6);
                            $('#gvKnjige tfoot tr th').eq(7).text(columns_json[0].col_7);
                            $('#gvKnjige tfoot tr th').eq(8).text(columns_json[0].col_8);


                            $('#gvKnjige tfoot tr td input').eq(0).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_0.toLowerCase());
                            $('#gvKnjige tfoot tr td input').eq(1).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_1.toLowerCase());
                            $('#gvKnjige tfoot tr td input').eq(2).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_2.toLowerCase());
                            $('#gvKnjige tfoot tr td input').eq(3).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_3.toLowerCase());
                            $('#gvKnjige tfoot tr td input').eq(4).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_4.toLowerCase());
                            $('#gvKnjige tfoot tr td input').eq(5).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_5.toLowerCase());
                            $('#gvKnjige tfoot tr td input').eq(6).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_6.toLowerCase());
                            $('#gvKnjige tfoot tr td input').eq(7).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_7.toLowerCase());
                            $('#gvKnjige tfoot tr td input').eq(8).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_8.toLowerCase());


                            $("#gvKnjige tbody").click(function (event) {
                                $(oTable.fnSettings().aoData).each(function () {
                                    $(this.nTr).removeClass('row_selected');
                                });
                                $(event.target.parentNode).addClass('row_selected');

                            });

                            $('#gvKnjige tbody tr').each(function () {
                                var sTitle;
                                var nTr = $('tr', this)
                                var nTds = $('td', this);
                                var idO = $(nTds[0]).text();

                                $(nTds).click(function () {
                                    $("#opisKnjige").show();

                                    $('#autori').text('');

                                    $.ajax({
                                        type: "POST",
                                        url: "Pregled.aspx/Vrati",
                                        data: "{id:'" + $(nTds[0]).text() + "'}",
                                        contentType: "application/json; charset=utf-8",
                                        dataType: "json",
                                        success: function (msg) {
                                            if (msg.hasOwnProperty("d")) {
                                                var columns_json = jQuery.parseJSON(msg.d);



                                                for (var x = 0; x < columns_json.length; x++) {

                                                    $('#autori').text(columns_json[x].col_0 + ' ' + columns_json[x].col_1 + '; ' + $('#autori').text());
                                                    $('#opis').text(columns_json[x].col_2);
                                                }
                                            }
                                        }
                                    });

                                    $('#IdItem').val(idO);




                                }
                                        );
                            });


                            /* Init DataTables */
                            oTable = null;
                            oTable = $('#gvKnjige').dataTable(
        {
            "bJQueryUI": true,
            "bStateSave": false,
            "sPaginationType": "full_numbers",
            "iDisplayLength": 5,
            "aLengthMenu": [[5, 10, 50, -1], [5, 10, 50, "All"]],
            "bRetrieve": true,
//            "aaSorting": ["asc"], "aTargets": [8] ,
            "aaSorting": [[8,'asc']],

            "aoColumnDefs": [
            { "bSearchable": false, "aTargets": [0] },
             
                       { "sClass": "align", "aTargets": [1, 2, 3, 4] },

                       { "bVisible": false, "aTargets": [0,7,8] }
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

}

    ////////////////////////////////////////////////////

    $(document).ready(function () {

        $("#opisKnjige").hide();

        $("#pretraziOpis")
			.button()
			.click(function () {
			    test();

			});

        $("#osvjezi")
			.button()
			.click(function () {

			    $('#autorIme').val('');
			    $('#autorPrezime').val('');
			    $('#autori').val('');
			    $('#opis').val('');
			    $('#IdItem').val('');
			    test();

			});

        $(function () {
            $(".dodaj button:first").button({
                icons: {
                    primary: "ui-icon-plusthick"
                }
            })


            $(".opis button:first").button({
                icons: {
                    primary: "ui-icon-search"
                }
            })

            $(".izmjeni button:first").button({
                icons: {
                    primary: "ui-icon-pencil"
                }
            })

            $(".osvjezi button:first").button({
                icons: {
                    primary: "ui-icon-refresh"
                }
            })

            $(".pretraziIme button:first").button({
                icons: {
                    primary: "ui-icon-search"
                }
            })

        });



        $("#dialog-form").dialog("destroy");

        $("#dialog-form").dialog({
            autoOpen: false,
            title: 'Унос нове књиге',
            height: 500,
            width: 600,
            modal: true,
            resizable: true,

            buttons: [{
                text: 'Сачувај',
                click: function () {


                    var zanr = $('#cmbZanr option:selected').val();
                    var izdavac = $('#cmbIzdavac option:selected').val();
                    var grupa = $('#cmbGrupa option:selected').val();

                    if ($('#Mode').val() == 'Insert') {

                        $.ajax({
                            type: "POST",
                            url: "Pregled.aspx/Save",
                            data: "{naziv:'" + $('#naziv').val() + "',zanr:'" + zanr + "',izdavac:'" + izdavac + "',godina:'" + $('#godina').val() + "',grupa:'" + grupa + "',broj:'" + $('#broj').val() + "',opisD:'" + $('#opisD').val() + "'}",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (msg) {
                                if (msg.hasOwnProperty("d")) {

                                    var columns_json = jQuery.parseJSON(msg.d);
                                    if (parseFloat(columns_json[0].col_0) > -1) {

                                        test();
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
                        text: 'Затвори',
                        click: function () {
                            $(this).dialog("close");
                        }


                    }]

        });


        $("#dodajNovi")
			.button()
			.click(function () {


			    $('#Mode').val('Insert');

			    var optionalCallback;
			    var options;
			    $("#ifitems").src("", optionalCallback, options);
			    $("#DivItems").dialog("open").parent().appendTo("#ctl01");

			    $("#ifitems").src("PregledModuls.aspx?var=0", optionalCallback, options);

			    // $("#dialog-form").dialog("open");
			});

        $("#izmjeniItem")
			.button()
			.click(function () {

			    if ($('#gvKnjige tbody tr').hasClass('row_selected')) {

			        var idKnjige = $('#IdItem').val();
			        $('#Mode').val('Update');

			        var optionalCallback;
			        var options;
			        $("#ifitems").src("", optionalCallback, options);
			        $("#DivItems").dialog("open").parent().appendTo("#ctl01");

			        $("#ifitems").src("PregledModuls.aspx?var=" + idKnjige, optionalCallback, options);
			    } else {
			        alert('Морате изабрати књигу !');
			    }
			    // $("#dialog-form").dialog("open");
			});

        $("#DivItems").dialog({
            autoOpen: false,
            resizable: true,
            height: 650,
            width: 900,
            modal: true,
            title: 'Унос нове књиге',
            buttons: [
                {

                    text: 'Затвори',
                    click: function () {
                        var optionalCallback;
                        var options;

                        $("#ifitems").src("", optionalCallback, options);
                        $(this).dialog("close");
                        test();
                    }

                }
                ]
        });



    });
    

    

    function test() {
        var oTable;
        var asInitVals = new Array();

        $("#divTable").html('');

        $("#divTable").append('<table id="gvKnjige" style="border:1px solid gray;width:950px"></table>');

        $('#gvKnjige').append(
                                          $('<thead>').append($('<tr>').append(

                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>'),
                                                                    $('<th>')
                                                                 )
                                                              )

                                         );


        $('#gvKnjige').append(
                 $('<tfoot>').append($('<tr>').append(

                                $('<th>'),
                                $('<th>'),
                                $('<th>'),
                                $('<th>'),
                                $('<th>'),
                                $('<th>'),
                                $('<th>'),
                                $('<th>'),
                                $('<th>')
                                ),

                                $('<tr>').append(

                                $('<td>').append($('<input>').attr("type", "text").attr("name", "id_knjige").attr("value", "pretraga naziv").addClass("search_init").attr("id", "0")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "naziv_knjige").attr("value", "pretraga naziv_knjige").addClass("search_init").attr("id", "1")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "ime").attr("value", "pretraga zanr").addClass("search_init").attr("id", "2")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "prezime").attr("value", "pretraga datum od").addClass("search_init").attr("id", "3")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "opis").attr("value", "pretraga izdavac").addClass("search_init").attr("id", "4")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "zanr").attr("value", "pretraga datum do").addClass("search_init").attr("id", "5")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "izdavac").attr("value", "pretraga naziv").addClass("search_init").attr("id", "6")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "godina").attr("value", "pretraga naziv").addClass("search_init").attr("id", "7")),
                                $('<td>').append($('<input>').attr("type", "text").attr("name", "godina").attr("value", "pretraga naziv").addClass("search_init").attr("id", "8"))
                                )
                        )

        );

        $.ajax({
            type: "POST",
            url: "Pregled.aspx/GetPretraga",
            data: "{ime:'" + $('#autorIme').val() + "', prezime:'" + $('#autorPrezime').val() + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                if (msg.hasOwnProperty("d")) {

                    var supstanca_json = jQuery.parseJSON(msg.d);


                    for (var x = 0; x < supstanca_json.length; x++) {

                        $('#gvKnjige').append(
                                   $('<tr>').append(
                                        $('<td>').text(supstanca_json[x].col_0),
                                        $('<td>').text(supstanca_json[x].col_1),
                                        $('<td>').text(supstanca_json[x].col_2),
                                        $('<td>').text(supstanca_json[x].col_3),
                                        $('<td>').text(supstanca_json[x].col_4),
                                        $('<td>').text(supstanca_json[x].col_5),
                                        $('<td>').text(supstanca_json[x].col_6),
                                        $('<td>').text(supstanca_json[x].col_7),
                                        $('<td>').text(supstanca_json[x].col_8)

                                                    )
                                  );

                    }

                    $('#gvKnjige tbody tr').mouseover(function () {
                        $(this).css({ cursor: "pointer" });
                        $(this).css({ color: "#4c3000" });
                        $(this).css({ 'font-weight': "bold" });

                    }
                             );

                    $('#gvKnjige tbody tr').mouseout(function () {

                        $(this).css({ cursor: "auto" });
                        $(this).css({ color: "black" });
                        $(this).css({ 'font-weight': "normal" });
                    }
                  );

                    $.ajax({
                        type: "POST",
                        url: "Pregled.aspx/GetColumn",
                        data: "{name:''}",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (msg) {
                            if (msg.hasOwnProperty("d")) {

                                var columns_json = jQuery.parseJSON(msg.d);

                                $('#gvKnjige thead tr th').eq(0).text(columns_json[0].col_0);
                                $('#gvKnjige thead tr th').eq(1).text(columns_json[0].col_1);
                                $('#gvKnjige thead tr th').eq(2).text(columns_json[0].col_2);
                                $('#gvKnjige thead tr th').eq(3).text(columns_json[0].col_3);
                                $('#gvKnjige thead tr th').eq(4).text(columns_json[0].col_4);
                                $('#gvKnjige thead tr th').eq(5).text(columns_json[0].col_5);
                                $('#gvKnjige thead tr th').eq(6).text(columns_json[0].col_6);
                                $('#gvKnjige thead tr th').eq(7).text(columns_json[0].col_7);
                                $('#gvKnjige thead tr th').eq(8).text(columns_json[0].col_8);


                                $('#gvKnjige tfoot tr th').eq(0).text(columns_json[0].col_0);
                                $('#gvKnjige tfoot tr th').eq(1).text(columns_json[0].col_1);
                                $('#gvKnjige tfoot tr th').eq(2).text(columns_json[0].col_2);
                                $('#gvKnjige tfoot tr th').eq(3).text(columns_json[0].col_3);
                                $('#gvKnjige tfoot tr th').eq(4).text(columns_json[0].col_4);
                                $('#gvKnjige tfoot tr th').eq(5).text(columns_json[0].col_5);
                                $('#gvKnjige tfoot tr th').eq(6).text(columns_json[0].col_6);
                                $('#gvKnjige tfoot tr th').eq(7).text(columns_json[0].col_7);
                                $('#gvKnjige tfoot tr th').eq(8).text(columns_json[0].col_8);


                                $('#gvKnjige tfoot tr td input').eq(0).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_0.toLowerCase());
                                $('#gvKnjige tfoot tr td input').eq(1).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_1.toLowerCase());
                                $('#gvKnjige tfoot tr td input').eq(2).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_2.toLowerCase());
                                $('#gvKnjige tfoot tr td input').eq(3).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_3.toLowerCase());
                                $('#gvKnjige tfoot tr td input').eq(4).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_4.toLowerCase());
                                $('#gvKnjige tfoot tr td input').eq(5).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_5.toLowerCase());
                                $('#gvKnjige tfoot tr td input').eq(6).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_6.toLowerCase());
                                $('#gvKnjige tfoot tr td input').eq(7).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_7.toLowerCase());
                                $('#gvKnjige tfoot tr td input').eq(8).val(columns_json[0].col_12.toLowerCase() + ' ' + columns_json[0].col_8.toLowerCase());



                                $("#gvKnjige tbody").click(function (event) {
                                    $(oTable.fnSettings().aoData).each(function () {
                                        $(this.nTr).removeClass('row_selected');
                                    });
                                    $(event.target.parentNode).addClass('row_selected');

                                });

                                $('#gvKnjige tbody tr').each(function () {
                                    var sTitle;
                                    var nTr = $('tr', this)
                                    var nTds = $('td', this);
                                    var idO = $(nTds[0]).text();

                                    $(nTds).click(function () {
                                        $("#opisKnjige").show();

                                        $('#autori').text('');

                                        $.ajax({
                                            type: "POST",
                                            url: "Pregled.aspx/Vrati",
                                            data: "{id:'" + $(nTds[0]).text() + "'}",
                                            contentType: "application/json; charset=utf-8",
                                            dataType: "json",
                                            success: function (msg) {
                                                if (msg.hasOwnProperty("d")) {
                                                    var columns_json = jQuery.parseJSON(msg.d);



                                                    for (var x = 0; x < columns_json.length; x++) {

                                                        $('#autori').text(columns_json[x].col_0 + ' ' + columns_json[x].col_1 + '; ' + $('#autori').text());
                                                        $('#opis').text(columns_json[x].col_2);
                                                    }
                                                }
                                            }
                                        });

                                        $('#IdItem').val(idO);




                                    }
                                        );
                                });


                                /* Init DataTables */
                                oTable = null;
                                oTable = $('#gvKnjige').dataTable(
        {
            "bJQueryUI": true,
            "bStateSave": false,
            "sPaginationType": "full_numbers",
            "iDisplayLength": 5,
            "aLengthMenu": [[5, 10, 50, -1], [5, 10, 50, "All"]],
            "bRetrieve": true,
            "aaSorting": [[8, 'asc']],


            "aoColumnDefs": [
            { "bSearchable": false, "aTargets": [0] },
           
                       { "sClass": "align", "aTargets": [1, 2, 3, 4] },

                       { "bVisible": false, "aTargets": [0,7,8] }
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
    }