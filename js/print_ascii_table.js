

function printASCIITable(){

    let ascii_table = '<table>';
    ascii_table += '<tr> <th>Symbol</th> <th>Dec</th> <th>Hex</th> </tr>'
    for(var i=32;i<127;++i) {
      let dec = i;
      let hex = i.toString(16);
      let char = String.fromCharCode(i);
      ascii_table += `<tr> <td>${char}</td>  <td>${dec}</td> <td>${hex}</td> </tr>`;

    }
    ascii_table += '</table>'
    $('#ascii_canvas').html(ascii_table);
}


printASCIITable();
