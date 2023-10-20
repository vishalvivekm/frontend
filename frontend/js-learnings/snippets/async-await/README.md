### question:
- What error will we get if we use the await keyword outside of an async function?

Ans: SyntaxError: await is only valid in async function

<table>
<tr>
<th>await</th>
<th>async</th>
<th>try</th>
<th>catch</th>
</tr>
<tr>
<td>When a function is declared, using this keyword makes the code asynchronous. The return of an async function will always be a Promise.</td>
<td>It works only inside the async functions.</td>
<td> It is executed and completed successfully if the Promise is resolved.</td>
<td>It only executes if the Promise is rejected.</td>
</tr>
</table>
- which is/are the use of then keyword in async/await.

--To convert a promise to a callback function and vice versa <br>
--To handle errors efficiently <br>
--To access the resolved value of a promise<br> // Yes
-- To make an API request 