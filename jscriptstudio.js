
jscriptstudio.js
Load:jscriptstudio.js;
<p id="myfilecontent"></p>
<script>
  var jss = jscriptstudio;
  jss.File.Read("myfile.txt", "readMyFile");
  function readFiles() {
  document.getElementById("myfilecontent").innerHTML = readMyFile();
  }
</script>
<input type="button" onclick="readFiles()" value="Read Files" />