notes

> When you receive JSON data from an API or read it from a file, it is typically transmitted or stored as a string. To work with this JSON data in JavaScript, you use the JSON.parse method to convert it from a string into a JavaScript object:

> Parsing the JSON response using JSON.parse is necessary because the response from the API is typically in JSON (JavaScript Object Notation) format, which is a string. In order to work with the data as JavaScript objects, you need to convert (or parse) that JSON string into a JavaScript object.

<hr>
responseText.results[0].name.title +" " + responseText.results[0].name.first +" "+ responseText.results[0].name.last
// literal template

 `${responseText.results[0].name.title} ${responseText.results[0].name.first} ${responseText.results[0].name.last}`

<code>
const { title, first, last } = responseText.results[0].name;
const fullName = `${title} ${first} ${last}`; </code>

>       const val = responseText.results[0].dob.date; // "1992-03-08T15:13:16.688Z"
        const arr = val.split("-"); 
        console.log(arr)
        console.log(`${date[2].substring(0,2)}/${date[1]}/${date[0]}`); // 08/03/1992
        console.log(val);
    
 