function loadTable() {
    chrome.storage.sync.get({arrays:[]}, function (result) {
        // count the number of entries
		var arrays = result.arrays;
        var entryCount = arrays.length;

        var row, cellUrl, cellUsername, cellPassword, cellTime,
            timeConverted, yyyy, mm, dd, hh, minute, ss, ampm;

        // insert each entry into a new row
        for (i=0; i<entryCount; i++) {
            row = table.insertRow(i+1);
			cellUrl = row.insertCell(0);
            cellUsername = row.insertCell(1);
            cellTime = row.insertCell(2);

			array = JSON.parse(arrays[i]);

            cellUrl.innerHTML = array.url;
            cellUsername.innerHTML = array.username;
            cellTime.innerHTML = array.time;
        }
    });
}

var entryCount;
var table = document.getElementById("loginArray");

document.body.onload = loadTable;
