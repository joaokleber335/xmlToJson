// import File System Module
import fs from "fs";

// import xml2js Module
import { parseString } from "xml2js";

// import '/file.xml';

//xml data
// var xmldata = '<?xml version=”1.0" encoding=”UTF-8"?>' +
//     '<Student>' +
//     '<PersonalInformation>' +
//     '<FirstName>Sravan</FirstName>' +
//     '<LastName>Kumar</LastName>' +
//     '<Gender>Male</Gender>' +
//     '</PersonalInformation>' +
//     '<PersonalInformation>' +
//     '<FirstName>Sudheer</FirstName>' +
//     '<LastName>Bandlamudi</LastName>' +
//     '<Gender>Male</Gender>' +
//     '</PersonalInformation>' +
//     '</Student>';

// var tools = require('./file.xml');
let xml_string = fs.readFileSync("file.xml", "utf8");
// const fs = require('fs');

// parsing xml data
parseString(xml_string, function (err, results) {

    // parsing to json
    let data = JSON.stringify(results)

    // display the json data
    console.log("results", data);
    // file system module to perform file operations

    // json data
    var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';

    // parse json
    var jsonObj = JSON.parse(jsonData);
    console.log(jsonObj);

    // stringify JSON Object
    var jsonContent = JSON.stringify(jsonObj);
    console.log(jsonContent);

    fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
        console.log("criou arquivo json");
    });
});