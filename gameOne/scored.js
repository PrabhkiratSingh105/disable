function main(code, element){
    var first = localStorage.getItem(code);
    first = first.split(",");
    document.getElementById("Timer_" + element).innerText = first[4] + "s";
    document.getElementById("Question_" + element).innerText = first[3];
    document.getElementById("Correct_" + element).innerText = first[2];
    document.getElementById("Filled_" + element).innerText = first[1];
    if(first[0] == "Correct"){
        document.getElementById(element).className = "Correct";
    }
    if(first[0] == "Wrong"){
        document.getElementById(element).className = "Wrong";
    }
}
function clicked(){
    open("index.html");
    window.close();
}
main("one", "One");
main("two", "Two");
main("three", "Three");
main("four", "Four");
main("five", "Five");
main("six", "Six");
main("seven", "Seven");
main("eight", "Eight");
main("nine", "Nine");
main("ten", "Ten");
main("eleven", "one_One");
main("one_two", "one_Two");
main("one_three", "one_Three");
main("one_four", "one_Four");
main("one_five", "one_Five");
main("one_six", "one_Six");
main("one_seven", "one_Seven");
main("one_eight", "one_Eight");
main("one_nine", "one_Nine");
main("two_zero", "two_Zero");
main("two_one", "two_One");
main("two_two", "two_Two");
main("two_three", "two_Three");
main("two_four", "two_Four");
main("two_five", "two_Five");
main("two_six", "two_Six");
main("two_seven", "two_Seven");
main("two_eight", "two_Eight");
main("two_nine", "two_Nine");
main("three_zero", "two_Ten");
function tableToCSV() {
    var csv_data = [];
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        var cols = rows[i].querySelectorAll('td,th');
        var csvrow = [];
        for (var j = 0; j < cols.length; j++) {
            csvrow.push(cols[j].innerHTML);
        }
        csv_data.push(csvrow.join(","));
    }
    csv_data = csv_data.join('\n');
    downloadCSVFile(csv_data);
}
function downloadCSVFile(csv_data) {
    CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });
    var temp_link = document.createElement('a');
    var date = new Date();
    var a_date = localStorage.setItem("date",date)
    a_date=localStorage.getItem("date");

    var dater = a_date.split(" ");
    var dater = dater[2]+"-"+dater[1]+"-"+dater[3]
    var Time = date.getHours()+ "h " + date.getMinutes()+"m "+date.getSeconds()+"s";
    var ccsv = "Name{" + localStorage.getItem("name") + "} Date{" + dater + "} Time{" + Time + "}.csv";
    temp_link.download = ccsv;
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);
    temp_link.click();
    document.body.removeChild(temp_link);
}